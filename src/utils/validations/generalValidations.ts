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
  // En az 8, en fazla 15 karakter uzunluğunda olmalı.
  // En az bir rakam (0-9) içermeli.
  // En az bir özel karakter içermeli (@, #, %, vb.).
  // En az bir küçük harf (a-z) içermeli.
  // En az bir büyük harf (A-Z) içermeli.
};

export const phoneNumberValidation = {
  nonZeroFirstDigit: true,
};

export const numericString = /^\d+$/; // Sadece rakamlardan oluşan string...

// export const isPhoneNumber = /^(?!0)\d{10}$/;
// export const isFacebookURL = /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9(\.\?)?\/]*$/;
// export const isInstagramURL = /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9._]*\/?$/;
