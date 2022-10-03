import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AfterBanksService } from "./services/after-banks-service.service";
import { HttpClientService } from "./services/httpclient.service";
import { HttpModule } from "@angular/http";
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import {
  MatAutocompleteModule, MatOptionModule, MatFormFieldModule, MatInputModule,
  MatProgressSpinnerModule, MatProgressBarModule, MatDialogModule
} from "@angular/material";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AckFxModule} from "ack-angular-fx";
import { LoginDialogComponent } from './dialog/login-dialog/login-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    AckFxModule
  ],
  providers: [
    HttpClientService,
    AfterBanksService
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponent]
})
export class AppModule { }
