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

//! ****************************************************************/

export interface OrderType {
  orderId: string;
  orderNo: string;

  customerName: string;
  customerSurname: string;
  customerPhone: string;

  orderDate: string;
  deliveryDate: string;

  amountDelivered: number;
  unitAmount: number;
  operations: OperationType[];
  paidAmount: number;
  remainingAmount: number;
  totalAmount: number;

  paymentStatus: PaymentStatuType;
  orderStatus: OrderStatuType;
  notes?: string;
}

//! ****************************************************************/

export const generateRandomUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    const random = (Math.random() * 16) | 0;
    const value = char === 'x' ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
};
