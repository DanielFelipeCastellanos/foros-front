import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralLayoutComponent } from './Ukyo-common/layout/general-layout/general-layout.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'foros',
        pathMatch: 'full',
      },
      {
        path: 'foros',
        loadChildren: () =>
          import('./foros/foros.module').then(
            (m) => m.ForosModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
