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
        redirectTo: 'comunidades/:comunidad/foros/:foro',
        pathMatch: 'full',
      },
      {
        path: 'comunidades/:comunidad/foros/:foro',
        loadChildren: () =>
          import('./foro/foro.module').then(m => m.ForoModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
