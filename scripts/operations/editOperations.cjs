/* eslint-disable */

const fs = require('fs');
const { execSync } = require('child_process');
const { logInfo, logSuccess, logError, logWarning } = require('../utils/logger.cjs');
const { getTextInput } = require('../utils/prompts.cjs');
const { filesToEdit } = require('../config/paths.cjs');
const languages = require('../utils/languages.cjs');

// Güncellenen dosyaları takip etmek için
let updatedFiles = [];

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

// users.json dosyasını sadece admin bırakacak şekilde düzenle
async function editUsersJson(lang, texts) {
  try {
    const filePath = 'src/db/users.json';
    if (!fs.existsSync(filePath)) {
      logWarning('users.json dosyası bulunamadı, atlanıyor.');
      return true;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    let arr = [];
    try {
      arr = JSON.parse(content);
    } catch (e) {
      logError('users.json dosyası okunamadı veya bozuk!');
      return false;
    }
    const filtered = arr.filter((user) => user.userType === 'admin');
    fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2));
    logSuccess('users.json dosyası güncellendi (sadece admin bırakıldı)');
    updatedFiles.push(filePath);
    return true;
  } catch (error) {
    logError(`users.json dosyası düzenlenirken hata: ${error.message}`);
    return false;
  }
}

// Genel amaçlı blok silme ve aktifleştirme fonksiyonları
function processBlocks(content, blockDefs) {
  // blockDefs: [{ type: 'delete'|'activate', start: '...', end: '...' }]
  let lines = content.split('\n');
  let result = [];
  let i = 0;
  while (i < lines.length) {
    let matched = false;
    for (const def of blockDefs) {
      if (lines[i].includes(def.start)) {
        matched = true;
        let block = [];
        let j = i + 1;
        while (j < lines.length && !lines[j].includes(def.end)) {
          block.push(lines[j]);
          j++;
        }
        // j şu anda end satırında
        if (def.type === 'activate') {
          // Yorumdan çıkar (// veya {/* ... */} gibi)
          block = block.map((l) => l.replace(/^\s*\/\/ ?/, '').replace(/^\s*\{\/\* ?| ?\*\/\}$/, '').replace(/^\s*\* ?/, ''));
          result = result.concat(block);
        }
        // delete ise hiçbir şey ekleme (blok ve start/end satırları tamamen silinir)
        i = j + 1;
        break;
      }
    }
    if (!matched) {
      result.push(lines[i]);
      i++;
    }
  }
  return result.join('\n');
}

// --- Blok Temizleme ve Aktifleştirme İşlemleri ---

const blockEditTasks = [
  {
    file: 'src/router/Router.tsx',
    blocks: [
      { type: 'delete', start: '//! 001DeletedStart', end: '//! 001DeletedFinish' },
      { type: 'delete', start: '//! 002DeletedStart', end: '//! 002DeletedFinish' },
      { type: 'activate', start: '//! 003ActivatedStart', end: '//! 003ActivatedFinish' },
      { type: 'delete', start: '//! 004DeletedStart', end: '//! 004DeletedFinish' },
      { type: 'activate', start: '//! 005ActivatedStart', end: '//! 005ActivatedFinish' },
    ],
  },
  {
    file: 'src/router/routerConstant.ts',
    blocks: [
      { type: 'delete', start: '//! 001DeletedStart', end: '//! 001DeletedFinish' },
      { type: 'activate', start: '//! 002ActivatedStart', end: '//! 002ActivatedFinish' },
      { type: 'delete', start: '//! 003DeletedStart', end: '//! 003DeletedFinish' },
      { type: 'activate', start: '//! 004ActivatedStart', end: '//! 004ActivatedFinish' },
      { type: 'delete', start: '//! 005DeletedStart', end: '//! 005DeletedFinish' },
      { type: 'activate', start: '//! 006ActivatedStart', end: '//! 006ActivatedFinish' },
    ],
  },
  {
    file: 'src/redux/store.ts',
    blocks: [
      { type: 'delete', start: '//! 001DeletedStart', end: '//! 001DeletedFinish' },
      { type: 'delete', start: '//! 002DeletedStart', end: '//! 002DeletedFinish' },
      { type: 'delete', start: '//! 003DeletedStart', end: '//! 003DeletedFinish' },
      { type: 'activate', start: '//! 004ActivatedStart', end: '//! 004ActivatedFinish' },
    ],
  },
  {
    file: 'src/pages/auth/signIn/SignIn.tsx',
    blocks: [
      { type: 'delete', start: '//! 001DeletedStart', end: '//! 001DeletedFinish' },
      { type: 'delete', start: '{/* //! 002DeletedStart */}', end: '{/* //! 002DeletedFinish */}' },
      { type: 'delete', start: '//! 003DeletedStart', end: '//! 003DeletedFinish' },
    ],
  },
  {
    file: 'src/utils/enums/userTypes.ts',
    blocks: [
      { type: 'delete', start: '//! 001DeletedStart', end: '//! 001DeletedFinish' },
    ],
  },
  {
    file: 'src/i18n/i18n.ts',
    blocks: [
      { type: 'delete', start: '//! 001DeletedStart', end: '//! 001DeletedFinish' },
      { type: 'delete', start: '//! 002DeletedStart', end: '//! 002DeletedFinish' },
      { type: 'delete', start: '//! 003DeletedStart', end: '//! 003DeletedFinish' },
      { type: 'delete', start: '//! 004DeletedStart', end: '//! 004DeletedFinish' },
    ],
  },
];

async function editBlocksInFiles(lang, texts) {
  for (const task of blockEditTasks) {
    try {
      if (!fs.existsSync(task.file)) {
        logWarning(`${task.file} bulunamadı, atlanıyor.`);
        continue;
      }
      const content = fs.readFileSync(task.file, 'utf8');
      const newContent = processBlocks(content, task.blocks);
      fs.writeFileSync(task.file, newContent);
      logSuccess(`${task.file} dosyası bloklara göre güncellendi.`);
      updatedFiles.push(task.file);
    } catch (error) {
      logError(`${task.file} dosyası güncellenirken hata: ${error.message}`);
    }
  }
}

// Otomatik prettier ve eslint düzeltmesi
function fixWithPrettierAndEslint(files) {
  const uniqueFiles = [...new Set(files)];
  for (const file of uniqueFiles) {
    try {
      execSync(`npx prettier --write "${file}"`, { stdio: 'inherit' });
      execSync(`npx eslint "${file}" --fix`, { stdio: 'inherit' });
      logSuccess(`${file} dosyası prettier ve eslint ile otomatik düzeltildi.`);
    } catch (error) {
      logWarning(`${file} dosyası prettier/eslint ile düzeltilirken hata: ${error.message}`);
    }
  }
}

// editFiles fonksiyonuna entegre et
async function editFiles(lang, texts) {
  updatedFiles = [];
  logInfo(texts.editingFiles);

  // .env dosyası düzenleme
  await editEnvFile(lang, texts);

  // package.json dosyası düzenleme
  await editPackageJson(lang, texts);

  // users.json dosyası düzenleme
  await editUsersJson(lang, texts);

  // Blok temizleme işlemleri
  await editBlocksInFiles(lang, texts);

  // Otomatik prettier ve eslint düzeltmesi
  fixWithPrettierAndEslint(updatedFiles);

  logInfo('Diğer dosya düzenleme işlemleri henüz implement edilmedi');
}

module.exports = {
  editFiles,
  editEnvFile,
  editPackageJson,
  editUsersJson,
  processBlocks,
  editBlocksInFiles,
  fixWithPrettierAndEslint,
};
