/* eslint-disable */

const fs = require('fs');
const { log, logSuccess, logError, logWarning, logInfo } = require('../utils/logger.cjs');
const { confirmQuestion } = require('../utils/prompts.cjs');
const { directoriesToDelete, filesToDelete } = require('../config/paths.cjs');

// Klasörleri kontrol etme fonksiyonu
function checkDirectories() {
  const existing = [];
  const missing = [];

  for (const dir of directoriesToDelete) {
    if (fs.existsSync(dir)) {
      existing.push(dir);
    } else {
      missing.push(dir);
    }
  }

  return { existing, missing };
}

// Dosyaları kontrol etme fonksiyonu
function checkFiles() {
  const existing = [];
  const missing = [];

  for (const file of filesToDelete) {
    if (fs.existsSync(file)) {
      existing.push(file);
    } else {
      missing.push(file);
    }
  }

  return { existing, missing };
}

// Klasörleri silme fonksiyonu
async function deleteDirectories(lang, texts) {
  logInfo(texts.checkingDirectories);

  const { existing, missing } = checkDirectories();
  const uniqueExisting = [...new Set(existing)];

  // Mevcut ve eksik klasörleri göster
  if (uniqueExisting.length > 0) {
    logInfo(texts.existingDirectories);
    uniqueExisting.forEach(dir => log(`  - ${dir}`, 'green'));
  }

  if (missing.length > 0) {
    logWarning(texts.missingDirectories);
    missing.forEach(dir => log(`  - ${dir}`, 'yellow'));
  }

  // Kullanıcıdan onay al
  const shouldStart = await confirmQuestion(texts.confirmDeleteDirectories, lang);
  if (!shouldStart) {
    logWarning(texts.cancelled);
    return false;
  }

  // Eğer silinecek klasör yoksa
  if (uniqueExisting.length === 0) {
    logInfo('No directories to delete.');
    return true;
  }

  // Silinecek klasörleri bir kez göster
  logInfo(texts.willDelete);
  uniqueExisting.forEach(dir => log(`  - ${dir}`, 'red'));

  if (missing.length > 0) {
    logInfo(texts.willSkip);
    missing.forEach(dir => log(`  - ${dir}`, 'yellow'));
  }

  // Son onay
  const confirmDelete = await confirmQuestion(texts.confirmDelete, lang);
  if (!confirmDelete) {
    logWarning(texts.cancelled);
    return false;
  }

  // Klasörleri sil
  for (const dir of uniqueExisting) {
    try {
      fs.rmSync(dir, { recursive: true, force: true });
      logSuccess(`${dir} klasörü silindi`);
    } catch (error) {
      logError(`${dir} klasörü silinirken hata: ${error.message}`);
    }
  }

  return true;
}

// Dosyaları silme fonksiyonu
async function deleteFiles(lang, texts) {
  logInfo(texts.checkingFiles);

  const { existing, missing } = checkFiles();
  const uniqueExisting = [...new Set(existing)];

  // Mevcut ve eksik dosyaları göster
  if (uniqueExisting.length > 0) {
    logInfo(texts.existingFiles);
    uniqueExisting.forEach(file => log(`  - ${file}`, 'green'));
  }

  if (missing.length > 0) {
    logWarning(texts.missingFiles);
    missing.forEach(file => log(`  - ${file}`, 'yellow'));
  }

  // Kullanıcıdan onay al
  const shouldStart = await confirmQuestion(texts.confirmDeleteFiles, lang);
  if (!shouldStart) {
    logWarning(texts.cancelled);
    return false;
  }

  // Eğer silinecek dosya yoksa
  if (uniqueExisting.length === 0) {
    logInfo('No files to delete.');
    return true;
  }

  // Silinecek dosyaları bir kez göster
  logInfo(texts.willDelete);
  uniqueExisting.forEach(file => log(`  - ${file}`, 'red'));

  if (missing.length > 0) {
    logInfo(texts.willSkip);
    missing.forEach(file => log(`  - ${file}`, 'yellow'));
  }

  // Son onay
  const confirmDelete = await confirmQuestion(texts.confirmDelete, lang);
  if (!confirmDelete) {
    logWarning(texts.cancelled);
    return false;
  }

  // Dosyaları sil
  for (const file of uniqueExisting) {
    try {
      fs.unlinkSync(file);
      logSuccess(`${file} dosyası silindi`);
    } catch (error) {
      logError(`${file} dosyası silinirken hata: ${error.message}`);
    }
  }

  return true;
}

module.exports = {
  deleteDirectories,
  deleteFiles,
  checkDirectories,
  checkFiles,
};
