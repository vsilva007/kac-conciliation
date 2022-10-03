import {Transaction} from "./transaction.model";
export class Service {
  constructor(
    public product: string,
    public type: string,
    public balance: number,
    public countable_balance: number,
    public balance_value: number,
    public arranged_balance: number,
    public balance_credit_granted: number,
    public currency: string,
    public description: string,
    public transactions: Transaction[]
  ){}
}
