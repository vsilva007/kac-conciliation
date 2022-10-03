import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Bank} from "../../model/bank.model";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  bank: Bank;
  form: FormGroup;
  user: any;
  pass: any;
  pass2: any;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<LoginDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) {

    this.bank = data.bank;
  }

  ngOnInit() {
    this.form = this.fb.group({
      user: [this.user, []],
      pass: [this.pass, []],
      pass2: [this.pass2, []]
    });
  }

  getColor(color: string): string {
    return "#" + color;
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
