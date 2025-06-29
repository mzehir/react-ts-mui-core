/* eslint-disable */

const fs = require('fs');
const { logInfo, logSuccess, logError, logWarning } = require('../utils/logger');
const { confirmQuestion, getTextInput } = require('../utils/prompts');
const { filesToEdit } = require('../config/paths');

// .env dosyasını düzenleme
async function editEnvFile(lang, texts) {
  try {
    if (!fs.existsSync('.env')) {
      logWarning('.env dosyası bulunamadı, atlanıyor.');
      return true;
    }

    const appName = await getTextInput(texts.enterAppName);
    if (!appName.trim()) {
      logWarning('Uygulama adı boş olamaz, atlanıyor.');
      return true;
    }

    let content = fs.readFileSync('.env', 'utf8');
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

    const projectName = await getTextInput(texts.enterProjectName);
    if (!projectName.trim()) {
      logWarning('Proje adı boş olamaz, atlanıyor.');
      return true;
    }

    const content = fs.readFileSync('package.json', 'utf8');
    const packageJson = JSON.parse(content);
    
    packageJson.name = projectName.trim().toLowerCase().replace(/\s+/g, '-');
    
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
