import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForosRoutingModule } from './foros-routing.module';
import { ForosComponent } from './foros.component';


@NgModule({
  declarations: [
    ForosComponent
  ],
  imports: [
    CommonModule,
    ForosRoutingModule
  ]
})
export class ForosModule { }
