/* eslint-disable */

const criticalFileFolderDeletingObject = {
  nodeModules: {
    path: 'node_modules',
    deletingTitle: 'nodeModulesDeletedTitle',
    deletingConfirm: 'nodeModulesConfirmDelete',
    deletingSuccess: 'nodeModulesDeleteSuccess',
    deletingError: 'nodeModulesDeleteError',
  },
  packageLockJson: {
    path: 'package-lock.json',
    deletingTitle: 'packageLockDeletedTitle',
    deletingConfirm: 'packageLockConfirmDelete',
    deletingSuccess: 'packageLockDeleteSuccess',
    deletingError: 'packageLockDeleteError',
  },
};

function getCriticalFileFolderDeletingList() {
  return Object.values(criticalFileFolderDeletingObject);
}

module.exports = {
  criticalFileFolderDeletingObject,
  getCriticalFileFolderDeletingList,
};
