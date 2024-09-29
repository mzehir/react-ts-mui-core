export enum LocalStorageKeys {
  activeLanguage = 'activeLanguage',
  activeTheme = 'activeTheme',
  accessToken = 'accessToken',
  userFields = 'userFields',
}

export type LocalStorageKey = keyof typeof LocalStorageKeys;
