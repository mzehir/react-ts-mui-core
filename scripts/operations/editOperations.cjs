/* eslint-disable */

const fs = require('fs');
const { logInfo, logSuccess, logError, logWarning } = require('../utils/logger.cjs');
const { getTextInput } = require('../utils/prompts.cjs');
const { filesToEdit } = require('../config/paths.cjs');
const languages = require('../utils/languages.cjs');

// .env dosyasını düzenleme
async function editEnvFile(lang, texts) {
  try {
    if (!fs.existsSync('.env')) {
      logWarning('.env dosyası bulunamadı, atlanıyor.');
      return true;
    }

    let content = fs.readFileSync('.env', 'utf8');
    const match = content.match(/VITE_APP_NAME\s*=\s*"([^"]*)"/);
    const currentAppName = match ? match[1] : '';

    let appName = '';
    while (!appName) {
      logInfo(`${texts.currentAppName}"${currentAppName}"`);
      logInfo(texts.keepCurrentAppNameInfo);
      appName = await getTextInput(texts.enterAppName);
      if (!appName.trim()) {
        appName = currentAppName;
        logInfo(`${texts.currentAppName}"${appName}"`);
      }
      if (!appName.trim()) {
        logWarning(texts.emptyAppNameWarning);
      }
    }

    content = content.replace(
      /VITE_APP_NAME\s*=\s*"[^"]*"/,
      `VITE_APP_NAME = "${appName.trim()}"`
    );
    
    fs.writeFileSync('.env', content);
    logSuccess('.env dosyası güncellendi');
    return true;
  } catch (error) {
    logError(`.env dosyası düzenlenirken hata: ${error.message}`);
    return false;
  }
}

// package.json dosyasını düzenleme
async function editPackageJson(lang, texts) {
  try {
    if (!fs.existsSync('package.json')) {
      logError('package.json dosyası bulunamadı!');
      return false;
    }

    const content = fs.readFileSync('package.json', 'utf8');
    const packageJson = JSON.parse(content);
    const currentProjectName = packageJson.name || '';

    let projectName = '';
    while (true) {
      logInfo(`${texts.currentProjectName}"${currentProjectName}"`);
      logInfo(texts.projectNameFormatInfo);
      logInfo(texts.keepCurrentProjectNameInfo);
      projectName = await getTextInput(texts.enterProjectName);
      if (!projectName.trim()) {
        projectName = currentProjectName;
        logInfo(`${texts.currentProjectName}"${projectName}"`);
      }
      if (!projectName.trim()) {
        logWarning(texts.emptyProjectNameWarning);
        continue;
      }
      if (!/^[a-z0-9\-]+$/.test(projectName.trim())) {
        logWarning(texts.invalidProjectNameWarning);
        continue;
      }
      break;
    }

    packageJson.name = projectName.trim();
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
    logSuccess('package.json dosyası güncellendi');
    return true;
  } catch (error) {
    logError(`package.json dosyası düzenlenirken hata: ${error.message}`);
    return false;
  }
}

// Dosyaları düzenleme fonksiyonu
async function editFiles(lang, texts) {
  logInfo(texts.editingFiles);

  // .env dosyası düzenleme
  await editEnvFile(lang, texts);

  // package.json dosyası düzenleme
  await editPackageJson(lang, texts);

  // TODO: Diğer dosya düzenleme işlemleri eklenecek
  // - users.json için sadece admin kullanıcısını bırakma
  // - Router dosyaları için yorum bloklarını temizleme
  // - Diğer dosyalar için gerekli düzenlemeler

  logInfo('Diğer dosya düzenleme işlemleri henüz implement edilmedi');
}

module.exports = {
  editFiles,
  editEnvFile,
  editPackageJson,
};
