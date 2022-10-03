import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Formio, FormioModule ,FormioAppConfig } from '@formio/angular';
import { PdfComponent } from './pdf/pdf.component';
import { AppConfig } from './config';
import { BuilderComponent } from './builder/builder.component';

(Formio as any).icons = 'fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PdfComponent,
    BuilderComponent
  ],
  imports: [
    BrowserModule,
    FormioModule
  ],
  providers: [    {provide: FormioAppConfig, useValue: AppConfig},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }