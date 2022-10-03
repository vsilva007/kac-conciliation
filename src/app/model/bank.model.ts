export class Bank {
  constructor(
    public display_name: string,
    public country_code: string,
    public service: string,
    public swift: string,
    public fullname: string,
    public business: boolean,
    public documenttype: string,
    public user: string,
    public pass: string,
    public pass2: string,
    public userdesc: string,
    public passdesc: string,
    public pass2desc: string,
    public usertype: string,
    public passtype: string,
    public pass2type: string,
    public image: string,
    public color: string
  ){}
}
