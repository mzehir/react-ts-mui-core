#!/usr/bin/env node
/* eslint-disable */

const { log, logSuccess, logError, logInfo } = require('./utils/logger.cjs');
const { deleteDirectories, deleteFiles } = require('./operations/deleteOperations.cjs');
const { editFiles } = require('./operations/editOperations.cjs');
const { selectLanguage, closeInterface } = require('./utils/prompts.cjs');
const languages = require('./utils/languages.cjs');

// Ana temizlik fonksiyonu
async function cleanupProject() {
  try {
    // 1. Dil seçimi
    const selectedLang = await selectLanguage();
    const texts = languages[selectedLang];
    
    log(texts.title, 'cyan');
    log('', 'reset');

    // 2. Klasörleri silme işlemi
    const directoriesResult = await deleteDirectories(selectedLang, texts);
    if (!directoriesResult) {
      logInfo(texts.cancelled);
      closeInterface();
      return;
    }

    // 3. Dosyaları silme işlemi
    const filesResult = await deleteFiles(selectedLang, texts);
    if (!filesResult) {
      logInfo(texts.cancelled);
      closeInterface();
      return;
    }

    // 4. Dosyaları düzenleme işlemi
    await editFiles(selectedLang, texts);

    logSuccess(texts.success);
    logInfo(texts.restartInfo);
    
    closeInterface();
  } catch (error) {
    logError(`Temizlik işlemi sırasında hata oluştu: ${error.message}`);
    closeInterface();
    process.exit(1);
  }
}

// Script'i çalıştır
if (require.main === module) {
  cleanupProject();
}

module.exports = { cleanupProject }; 