/* eslint-disable */

const fs = require('fs');

const { logInfo, logSuccess, logError, logWarning } = require('../../utils/logger-methods.cjs');
const { confirmQuestion } = require('../../utils/helper-methods.cjs');

async function criticalFileFolderDeletingMethod(texts, item) {
  try {
    logInfo(texts[item.deletingTitle]);

    const confirmQuestionResult = await confirmQuestion(item.deletingConfirm, texts);
    if (confirmQuestionResult === 'no') {
      logWarning(texts.cancelled);
      return false;
    }

    // fs.rmSync(item.path, { recursive: true, force: true });
    logSuccess(texts[item.deletingSuccess]);
    return true;
  } catch (error) {
    logError(texts[item.deletingError]);
    logError(texts.deletionFolderError);
    logError(error?.message);
  }
}

module.exports = {
  criticalFileFolderDeletingMethod,
};
