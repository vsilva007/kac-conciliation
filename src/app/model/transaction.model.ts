export class Transaction {
  constructor(
    public date: string,
    public date2: string,
    public amount: number,
    public balance: number,
    public description: string,
    public categoryId: number,
    public transactionId: string
  ){}
}
