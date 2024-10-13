export const nameValidation = {
  minCharacter: 2,
  maxCharacter: 100,
};

export const surnameValidation = {
  minCharacter: 2,
  maxCharacter: 100,
};

export const passwordValidation = {
  minCharacter: 8,
  maxCharacter: 15,
  isValid: new RegExp(`^(?=.*\\d)(?=.*\\W+)(?=.*[a-z])(?=.*[A-Z]).{${8},${15}}$`),
};

export const phoneNumberValidation = {
  nonZeroFirstDigit: true,
};

export const numericString = /^\d+$/;

// export const isPhoneNumber = /^(?!0)\d{10}$/;
// export const isFacebookURL = /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9(\.\?)?\/]*$/;
// export const isInstagramURL = /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9._]*\/?$/;
