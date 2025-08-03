/* eslint-disable */
const fs = require('fs');

const { logInfo, logWarning, log, logBlankLine } = require('../../utils/logger-methods.cjs');
const { getFileEditingList, fileEditingObject } = require('./file-editing-list.cjs');
const {
  editingEnvFileMethod,
  editingPackageJsonFileMethod,
  editingUsersJsonFileMethod,
  editingBlockActivateAndDelete,
  fixWithPrettierAndEslint,
} = require('./file-editing-helper-services.cjs');

function checkFilesToEditing(fileEditingList) {
  const existingFiles = [];
  const missingFiles = [];

  for (const file of fileEditingList) {
    if (fs.existsSync(file.path)) {
      existingFiles.push(file);
    } else {
      missingFiles.push(file);
    }
  }

  return { existingFiles, missingFiles };
}

async function fileEditingMethod(texts) {
  logInfo(texts.checkingFilesToEditing);

  const _fileEditingList = getFileEditingList();
  const _fileEditingObject = fileEditingObject;

  const { existingFiles, missingFiles } = checkFilesToEditing(_fileEditingList);
  if (existingFiles.length > 0) {
    logInfo(texts.fileCheckExisting);
    existingFiles.forEach((file) => log(`  - ${file.path}`, 'green'));
  }
  if (missingFiles.length > 0) {
    logWarning(texts.filesCheckMissing);
    missingFiles.forEach((file) => log(`  - ${file?.path}`, 'yellow'));
  }

  if (existingFiles.find((file) => file.path === _fileEditingObject?.env?.path)) {
    logBlankLine();
    await editingEnvFileMethod(texts, _fileEditingObject?.env?.path);
  }

  if (existingFiles.find((file) => file.path === _fileEditingObject?.packageJson?.path)) {
    logBlankLine();
    await editingPackageJsonFileMethod(texts, _fileEditingObject?.packageJson?.path);
  }

  if (existingFiles.find((file) => file.path === _fileEditingObject?.srcDbUsersJson?.path)) {
    logBlankLine();
    await editingUsersJsonFileMethod(texts, _fileEditingObject?.srcDbUsersJson?.path);
  }

  const itemsToBeBlocked = existingFiles.filter((file) => file.type === 'blockActivatingAndBlockDeleting');
  for (const item of itemsToBeBlocked) {
    logBlankLine();
    await editingBlockActivateAndDelete(texts, item);
  }

  const itemsToBeFormatted = existingFiles.filter((file) => file.isFormatted);
  for (const item of itemsToBeFormatted) {
    logBlankLine();
    await fixWithPrettierAndEslint(texts, item);
  }
}

module.exports = {
  fileEditingMethod,
};
