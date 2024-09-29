import { LocalStorageKey } from '../enums/localStorageKeys';

export const localStorageSetItem = (key: LocalStorageKey, value: unknown): void => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error('Error saving to localStorage', error);
  }
};

export const localStorageGetItem = <T>(key: LocalStorageKey): T | null => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) return null;
    return JSON.parse(serializedValue) as T;
  } catch (error) {
    console.error('Error reading from localStorage', error);
    return null;
  }
};

export const localStorageRemoveItem = (key: LocalStorageKey): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage', error);
  }
};
