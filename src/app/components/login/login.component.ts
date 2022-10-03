import "reflect-metadata"
import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {AfterBanksService} from "../../services/after-banks-service.service";
import {Bank} from "../../model/bank.model";
import {Subscription} from "rxjs/Subscription";
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
//ack-angular-fx related imports
import { fxArray } from "ack-angular-fx";
import { supportDocument } from "ack-angular-fx/web-animations.min"
import {MatDialog, MatDialogConfig} from "@angular/material";
import {LoginDialogComponent} from "../../dialog/login-dialog/login-dialog.component";

supportDocument( document )//cross browser fx support

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  animations: [
    fxArray
  ]
})
export class LoginComponent implements OnInit {

  subscription: Subscription;

  state: string;
  bankControl: FormControl = new FormControl();
  bankList: Array<Bank>;
  filteredBanks: Observable<Bank[]>;
  countries: Array<String> = ["España", "Chile", "México"];

  constructor(private afterBanksService: AfterBanksService,
              private dialog: MatDialog) {
    this.state = "loading";
  }

  ngOnInit() {
    this.subscription = this.afterBanksService.getBankList().subscribe(
      banks => {
        this.bankList = banks.map(bank => {
          return {
            display_name: bank.display_name,
            country_code: bank.country_code,
            service: bank.service,
            swift: bank.swift,
            fullname: bank.fullname,
            business: bank.business,
            documenttype: bank.documenttype,
            user: bank.user,
            pass: bank.pass,
            pass2: bank.pass2,
            userdesc: bank.userdesc,
            passdesc: bank.passdesc,
            pass2desc: bank.pass2desc,
            usertype: bank.usertype,
            passtype: bank.passtype,
            pass2type: bank.pass2type,
            image: bank.image,
            color: bank.color
          }
        });
        this.state = "full";
      }
    );

    this.filteredBanks = this.bankControl.valueChanges.pipe(
      map(val => this.filter(val))
    );
  }

  filter(val: String): Bank[] {
    if (!this.bankList) return;
    this.state = "filter"
    return this.bankList.filter(bank => bank.fullname.toLowerCase().indexOf(val.toLowerCase()) >= 0);
  }

  trackByBank(index: number, bank: any): string {
    return bank.fullname;
  }

  getColor(color: string): string {
    return "#" + color;
  }

  openDialog(bank: Bank) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.data = {
      bank: bank
    }

    this.dialog.open(LoginDialogComponent, dialogConfig);
  }
}


