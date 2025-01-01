export enum OrderStatuTypes {
  received = 'received', // Order Received
  preparing = 'preparing', // Preparing
  readyForDelivery = 'readyForDelivery', // Ready for Delivery
  delivered = 'delivered', // Delivered
}

export type OrderStatuType = keyof typeof OrderStatuTypes;

//*************************************************************** */

export enum PaymentStatuTypes {
  notPaid = 'notPaid', // Not Paid
  partiallyPaid = 'partiallyPaid', // Partially Paid
  paid = 'paid', // Paid
}

export type PaymentStatuType = keyof typeof PaymentStatuTypes;
