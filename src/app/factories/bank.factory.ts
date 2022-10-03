import {Bank} from "../model/bank.model";
export class BankFactory {
  public static createFromArray(array: any[]): Bank[] {
    var objects: Bank[] = [];
    array.forEach(function(object){
      objects.push(BankFactory.createFromObject(object));
    });
    return objects;
  }

  public static createFromObject(object: any): Bank {
    let displayName : string;
    displayName = object.fullname;
    if (object.business === '1')
      displayName = displayName.concat(" empresas")
    return new Bank(
      displayName,
      object.country_code,
      object.service,
      object.swift,
      object.fullname,
      object.business,
      object.documenttype,
      object.user,
      object.pass,
      object.pass2,
      object.userdesc,
      object.passdesc,
      object.pass2desc,
      object.usertype,
      object.passtype,
      object.pass2type,
      object.image,
      object.color
    );
  }
}
