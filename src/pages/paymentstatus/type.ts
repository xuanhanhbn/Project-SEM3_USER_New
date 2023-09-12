export interface requestCheckPayment {
  donationId: string;
}
export interface responseCheckPayment<T> {
  status: number;
  data: T[];
}

export interface dataCheckPayment {
  amount: number;
  createdAt: string;
  createdById: string;
  createdByName: null;
  donationId: string;
  method: string;
  paypalOrderId: string;
  reason: string;
  remark: string;
  status: string;
}
