/* eslint-disable */

// Silinecek klasörler
const directoriesToDelete = [
  // 'node_modules',
  'src/pages/introduction',
  'src/router/helper/introductionRouter',
  'src/i18n/locales/en/introduction',
  'src/i18n/locales/tr/introduction',
  'src/redux/slices/introductionSlices',
  'src/redux/slices/services/introduction',
  'src/utils/enums/introduction',
  'src/assets/other',
];

// Silinecek dosyalar
const filesToDelete = ['package-lock.json'];

// Düzenlenecek dosyalar
const filesToEdit = [
  '.env',
  'package.json',
  'src/db/users.json',
  'src/router/Router.tsx',
  'src/router/routerConstant.ts',
  'src/redux/store.ts',
  'src/pages/auth/signIn/SignIn.tsx',
  'src/utils/enums/userTypes.ts',
  'src/i18n/i18n.ts',
];

module.exports = {
  directoriesToDelete,
  filesToDelete,
  filesToEdit,
};
