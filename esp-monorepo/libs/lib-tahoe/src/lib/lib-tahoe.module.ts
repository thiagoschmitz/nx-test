import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { TahoeComponent } from './tahoe/tahoe.component';

export const libTahoeRoutes: Route[] = [
  {
    path: 'lib-tahoe',
    component: TahoeComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(libTahoeRoutes)],
  declarations: [TahoeComponent],
  exports: [RouterModule],
})
export class LibTahoeModule {}
