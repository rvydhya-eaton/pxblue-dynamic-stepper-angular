import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatIconModule,
  MatRadioModule,
  MatStepperModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import {AppComponent} from './app.component';


@NgModule({
  exports: [
    // Material
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatStepperModule,
    MatToolbarModule,
    MatTooltipModule
  ]
})
export class MaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}