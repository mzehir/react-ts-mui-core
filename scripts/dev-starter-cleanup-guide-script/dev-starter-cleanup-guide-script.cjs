#!/usr/bin/env node
/* eslint-disable */

const fs = require('fs');
const { log, logBlankLine, logWarning, logSuccess, logError } = require('./utils/logger-methods.cjs');
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
    if (!fs.existsSync('node_modules')) {
      logWarning(
        "This script requires the 'node_modules' directory to run properly. Please run the npm i command first to install the necessary dependencies.",
      );
      logWarning(
        "Bu betik, çalışabilmesi için 'node_modules' klasörüne ihtiyaç duyar. Lütfen öncelikle npm i komutunu çalıştırarak gerekli bağımlılıkları yükleyin.",
      );
      logWarning(
        "Dieses Skript benötigt den Ordner 'node_modules', um ordnungsgemäß ausgeführt zu werden. Bitte führen Sie zunächst den Befehl npm i aus, um die erforderlichen Abhängigkeiten zu installieren.",
      );
      logBlankLine();
      return;
    }

    if (!fs.existsSync('package-lock.json')) {
      logWarning(
        "This script requires the 'package-lock.json' file to run properly. Please run the npm i command first to install the necessary dependencies.",
      );
      logWarning(
        "Bu betik, çalışabilmesi için 'package-lock.json' dosyasına ihtiyaç duyar. Lütfen öncelikle npm i komutunu çalıştırarak gerekli bağımlılıkları yükleyin.",
      );
      logWarning(
        "Dieses Skript benötigt die Datei 'package-lock.json', um ordnungsgemäß ausgeführt zu werden. Bitte führen Sie zunächst den Befehl npm i aus, um die erforderlichen Abhängigkeiten zu installieren.",
      );
      logBlankLine();
      return;
    }

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
    // const _getCriticalFileFolderDeletingList = getCriticalFileFolderDeletingList();
    // for (const item of _getCriticalFileFolderDeletingList) {
    //   if (fs.existsSync(item.path)) {
    //     logBlankLine();
    //     await criticalFileFolderDeletingMethod(texts, item);
    //   } else {
    //   }
    // }

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
