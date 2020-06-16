import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibTahoeModule } from '@esp-monorepo/lib-tahoe';
import { LibSettingsModule } from '@esp-monorepo/lib-settings';
import { HeaderModule } from '@esp-monorepo/header';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LibTahoeModule, LibSettingsModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
