import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';

export const libSettingsRoutes: Route[] = [
  {
    path: 'lib-settings',
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(libSettingsRoutes)],
  declarations: [SettingsComponent, SettingsComponent],
  exports: [RouterModule],
})
export class LibSettingsModule {}
