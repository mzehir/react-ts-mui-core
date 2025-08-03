/* eslint-disable */

const fs = require('fs');

const { logInfo, log, logWarning, logSuccess, logError } = require('../../utils/logger-methods.cjs');
const { folderDeletedList } = require('./folder-deleted-list.cjs');
const { confirmQuestion } = require('../../utils/helper-methods.cjs');

function checkFoldersToDelete() {
  const existingFolders = [];
  const missingFolders = [];

  for (const dir of folderDeletedList) {
    if (fs.existsSync(dir)) {
      existingFolders.push(dir);
    } else {
      missingFolders.push(dir);
    }
  }

  return { existingFolders, missingFolders };
}

async function folderDeletionMethod(texts) {
  logInfo(texts.checkingFoldersToDelete);

  const { existingFolders, missingFolders } = checkFoldersToDelete();
  if (existingFolders.length > 0) {
    logInfo(texts.directoryCheckExisting);
    existingFolders.forEach((dir) => log(`  - ${dir}`, 'green'));
  }
  if (missingFolders.length > 0) {
    logWarning(texts.directoryCheckMissing);
    missingFolders.forEach((dir) => log(`  - ${dir}`, 'yellow'));
  }

  const confirmQuestionResult = await confirmQuestion(texts.confirmDeleteDirectories, texts);
  if (confirmQuestionResult === 'no') {
    logWarning(texts.cancelled);
    return false;
  }

  for (const dir of existingFolders) {
    try {
      // fs.rmSync(dir, { recursive: true, force: true });
      logSuccess(`${dir}`);
      logSuccess(texts.deletionFolderSuccess);
    } catch (error) {
      logError(`${dir}`);
      logError(texts.deletionFolderError);
      logError(error.message);
    }
  }

  return true;
}

module.exports = {
  folderDeletionMethod,
};
