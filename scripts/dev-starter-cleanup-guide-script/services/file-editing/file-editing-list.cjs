/* eslint-disable */

const fileEditingObject = {
  env: { path: '.env', type: 'editing' },
  packageJson: { path: 'package.json', type: 'editing' },
  srcDbUsersJson: { path: 'src/db/users.json', type: 'editing' },
  srcRouterRouterTsx: {
    path: 'src/router/Router.tsx',
    type: 'blockActivatingAndBlockDeleting',
    blocks: [
      { type: 'delete', start: '//! 001DeletedStart', end: '//! 001DeletedFinish' },
      { type: 'delete', start: '//! 002DeletedStart', end: '//! 002DeletedFinish' },
      { type: 'activate', start: '//! 003ActivatedStart', end: '//! 003ActivatedFinish' },
      { type: 'delete', start: '//! 004DeletedStart', end: '//! 004DeletedFinish' },
      { type: 'activate', start: '//! 005ActivatedStart', end: '//! 005ActivatedFinish' },
    ],
    fileUpdateTitle: 'srcRouterRouterTsxUpdateTitle',
    fileUpdateSuccess: 'srcRouterRouterTsxUpdateSuccess',
    fileUpdateError: 'srcRouterRouterTsxUpdateError',
  },
  srcRouterRouterConstantTs: {
    path: 'src/router/routerConstant.ts',
    type: 'blockActivatingAndBlockDeleting',
    blocks: [
      { type: 'delete', start: '//! 001DeletedStart', end: '//! 001DeletedFinish' },
      { type: 'activate', start: '//! 002ActivatedStart', end: '//! 002ActivatedFinish' },
      { type: 'delete', start: '//! 003DeletedStart', end: '//! 003DeletedFinish' },
      { type: 'activate', start: '//! 004ActivatedStart', end: '//! 004ActivatedFinish' },
      { type: 'delete', start: '//! 005DeletedStart', end: '//! 005DeletedFinish' },
      { type: 'activate', start: '//! 006ActivatedStart', end: '//! 006ActivatedFinish' },
    ],
    fileUpdateTitle: 'srcRouterRouterConstantTsUpdateTitle',
    fileUpdateSuccess: 'srcRouterRouterConstantTsUpdateSuccess',
    fileUpdateError: 'srcRouterRouterConstantTsUpdateError',
  },
  srcRouterHelperAccessErrorsRouterTs: {
    path: 'src/router/helper/accessErrorsRouter.ts',
    type: 'blockActivatingAndBlockDeleting',
    blocks: [
      { type: 'delete', start: '//! 001DeletedStart', end: '//! 001DeletedFinish' },
      { type: 'activate', start: '//! 002ActivatedStart', end: '//! 002ActivatedFinish' },
      { type: 'delete', start: '//! 003DeletedStart', end: '//! 003DeletedFinish' },
      { type: 'activate', start: '//! 004ActivatedStart', end: '//! 004ActivatedFinish' },
      { type: 'delete', start: '//! 005DeletedStart', end: '//! 005DeletedFinish' },
      { type: 'activate', start: '//! 006ActivatedStart', end: '//! 006ActivatedFinish' },
    ],
    fileUpdateTitle: 'srcRouterHelperAccessErrorsRouterTsUpdateTitle',
    fileUpdateSuccess: 'srcRouterHelperAccessErrorsRouterTsUpdateSuccess',
    fileUpdateError: 'srcRouterHelperAccessErrorsRouterTsUpdateError',
  },
  srcReduxStoreTs: {
    path: 'src/redux/store.ts',
    type: 'blockActivatingAndBlockDeleting',
    blocks: [
      { type: 'delete', start: '//! 001DeletedStart', end: '//! 001DeletedFinish' },
      { type: 'delete', start: '//! 002DeletedStart', end: '//! 002DeletedFinish' },
      { type: 'delete', start: '//! 003DeletedStart', end: '//! 003DeletedFinish' },
      { type: 'activate', start: '//! 004ActivatedStart', end: '//! 004ActivatedFinish' },
    ],
    fileUpdateTitle: 'srcReduxStoreTsUpdateTitle',
    fileUpdateSuccess: 'srcReduxStoreTsUpdateSuccess',
    fileUpdateError: 'srcReduxStoreTsUpdateError',
  },
  srcPagesAuthSignInSignInTsx: {
    path: 'src/pages/auth/signIn/SignIn.tsx',
    type: 'blockActivatingAndBlockDeleting',
    blocks: [
      { type: 'delete', start: '//! 001DeletedStart', end: '//! 001DeletedFinish' },
      { type: 'delete', start: '{/* //! 002DeletedStart */}', end: '{/* //! 002DeletedFinish */}' },
      { type: 'delete', start: '//! 003DeletedStart', end: '//! 003DeletedFinish' },
    ],
    fileUpdateTitle: 'srcPagesAuthSignInSignInTsxUpdateTitle',
    fileUpdateSuccess: 'srcPagesAuthSignInSignInTsxUpdateSuccess',
    fileUpdateError: 'srcPagesAuthSignInSignInTsxUpdateError',
  },
  srcUtilsEnumsUserTypesTs: {
    path: 'src/utils/enums/userTypes.ts',
    type: 'blockActivatingAndBlockDeleting',
    blocks: [{ type: 'delete', start: '//! 001DeletedStart', end: '//! 001DeletedFinish' }],
    fileUpdateTitle: 'srcUtilsEnumsUserTypesTsUpdateTitle',
    fileUpdateSuccess: 'srcUtilsEnumsUserTypesTsUpdateSuccess',
    fileUpdateError: 'srcUtilsEnumsUserTypesTsUpdateError',
  },
  srcI18nI18nTs: {
    path: 'src/i18n/i18n.ts',
    type: 'blockActivatingAndBlockDeleting',
    blocks: [
      { type: 'delete', start: '//! 001DeletedStart', end: '//! 001DeletedFinish' },
      { type: 'delete', start: '//! 002DeletedStart', end: '//! 002DeletedFinish' },
      { type: 'delete', start: '//! 003DeletedStart', end: '//! 003DeletedFinish' },
      { type: 'delete', start: '//! 004DeletedStart', end: '//! 004DeletedFinish' },
    ],
    fileUpdateTitle: 'srcI18nI18nTsUpdateTitle',
    fileUpdateSuccess: 'srcI18nI18nTsUpdateSuccess',
    fileUpdateError: 'srcI18nI18nTsUpdateError',
  },
};

function getFileEditingList() {
  return Object.values(fileEditingObject);
}

module.exports = {
  fileEditingObject,
  getFileEditingList,
};
