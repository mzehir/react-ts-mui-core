#!/usr/bin/env node
/* eslint-disable */

const { log, logBlankLine } = require('./utils/logger-methods.cjs');
const { selectLanguage } = require('./language/language-helper.cjs');
const { folderDeletionMethod } = require('./services/folder-deletion/folder-deletion-service.cjs');
const { fileEditingMethod } = require('./services/file-editing/file-editing-service.cjs');

const languages = require('./language/languages.cjs');

// Projeyi üretime hazır hale getirmek için temizlik rehberini başlatan ana fonksiyon.
async function devStarterCleanupGuideMethod() {
  try {
    // TODO SECTION 1
    const selectedLang = await selectLanguage();
    const texts = languages[selectedLang];

    log(texts.title, 'cyan');

    // TODO SECTION 2
    logBlankLine();
    const folderDeletionMethodResult = await folderDeletionMethod(texts);
    if (!folderDeletionMethodResult) {
      logBlankLine();
      return;
    }

    // TODO SECTION 3
    logBlankLine();
    const fileEditingMethodResult = await fileEditingMethod(texts);
    if (!fileEditingMethodResult) {
      logBlankLine();
      return;
    }
  } catch (error) {
    //
  }
}

// Script'i çalıştır
if (require.main === module) {
  devStarterCleanupGuideMethod();
}

module.exports = { devStarterCleanupGuideMethod };
