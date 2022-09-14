import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForoRoutingModule } from './foro-routing.module';
import { ForoComponent } from './foro.component';
import { ForoHeaderComponent } from './components/foro-header/foro-header.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    ForoComponent,
    ForoHeaderComponent
  ],
  imports: [
    CommonModule,
    ForoRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class ForoModule { }
