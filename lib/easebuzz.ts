import crypto from 'crypto';

export interface EasebuzzPaymentData {
  txnid: string;
  amount: string;
  productinfo: string;
  firstname: string;
  email: string;
  phone: string;
  surl: string;
  furl: string;
  udf1?: string;
  udf2?: string;
  udf3?: string;
  udf4?: string;
  udf5?: string;
}

export const generateEasebuzzHash = (data: EasebuzzPaymentData): string => {
  const key = process.env.EASEBUZZ_KEY!;
  const salt = process.env.EASEBUZZ_SALT!;
  
  const hashString = `${key}|${data.txnid}|${data.amount}|${data.productinfo}|${data.firstname}|${data.email}|${data.udf1 || ''}|${data.udf2 || ''}|${data.udf3 || ''}|${data.udf4 || ''}|${data.udf5 || ''}||||||${salt}`;
  
  return crypto.createHash('sha512').update(hashString).digest('hex');
};

export const createEasebuzzPayment = (
  registrationId: string,
  amount: number,
  email: string,
  phone: string,
  name: string,
  registrationType: 'team' | 'individual'
): EasebuzzPaymentData => {
  const txnid = `SPL_${registrationId}_${Date.now()}`;
  
  const paymentData: EasebuzzPaymentData = {
    txnid,
    amount: amount.toString(),
    productinfo: `SPL ${registrationType} Registration`,
    firstname: name || 'SPL User',
    email: email || 'test@spl.com',
    phone: phone || '9999999999',
    surl: `${process.env.NEXTAUTH_URL}/payment/success`,
    furl: `${process.env.NEXTAUTH_URL}/payment/failed`,
    udf1: registrationId,
    udf2: registrationType,
  };

  return paymentData;
};