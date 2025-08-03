#!/usr/bin/env node
/* eslint-disable */

const fs = require('fs');
const { log, logBlankLine, logWarning, logSuccess } = require('./utils/logger-methods.cjs');
const { selectLanguage } = require('./language/language-helper.cjs');
const { folderDeletionMethod } = require('./services/folder-deletion/folder-deletion-service.cjs');
const { fileEditingMethod } = require('./services/file-editing/file-editing-service.cjs');
const {
  getCriticalFileFolderDeletingList,
} = require('./services/critical-file-folder-deletion/critical-file-folder-deletion-list.cjs');
const {
  criticalFileFolderDeletingMethod,
} = require('./services/critical-file-folder-deletion/critical-file-folder-deletion-service.cjs');

const languages = require('./language/languages.cjs');

async function devStarterCleanupGuideMethod() {
  try {
    // TODO SECTION 1
    const selectedLang = await selectLanguage();
    const texts = languages[selectedLang];

    logWarning(texts.dependencyAlertMissingNodeModulesOrLockFile);
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

    // TODO SECTION 4
    const _getCriticalFileFolderDeletingList = getCriticalFileFolderDeletingList();
    for (const item of _getCriticalFileFolderDeletingList) {
      if (fs.existsSync(item.path)) {
        logBlankLine();
        await criticalFileFolderDeletingMethod(texts, item);
      } else {
      }
    }

    // TODO SECTION 5
    logBlankLine();
    logBlankLine();
    logBlankLine();
    logSuccess(texts.cleanupCompleted);
    logWarning(texts.recommendFreshInstall);
    logWarning(texts.runDevAndTest);
    logSuccess(texts.goodWorkWish);
  } catch (error) {
    logError(error.message);
    process.exit(1);
  }
}

// Script'i çalıştır
if (require.main === module) {
  devStarterCleanupGuideMethod();
}

module.exports = { devStarterCleanupGuideMethod };
