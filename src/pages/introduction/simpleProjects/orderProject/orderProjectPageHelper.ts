export enum OperationTypes {
  cracking = 'cracking', // Kırma
  roasting = 'roasting', // Kavurma
  vacuuming = 'vacuuming', // Vakumlama
  butter = 'butter', // Ezme
}
export type OperationType = keyof typeof OperationTypes;

//! ****************************************************************/

export enum OrderStatuTypes {
  received = 'received', // Teslim Alındı
  readyForDelivery = 'readyForDelivery', // Teslim Edilmeye Hazır
  delivered = 'delivered', // Teslim Edildi
}
export type OrderStatuType = keyof typeof OrderStatuTypes;

//! ****************************************************************/

export enum PaymentStatuTypes {
  notPaid = 'notPaid', // Ödenmedi
  partiallyPaid = 'partiallyPaid', // Kısmen Ödendi
  paid = 'paid', // Ödendi
}
export type PaymentStatuType = keyof typeof PaymentStatuTypes;
