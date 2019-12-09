import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildonePageRoutingModule } from './childone-routing.module';

import { ChildonePage } from './childone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildonePageRoutingModule
  ],
  declarations: [ChildonePage]
})
export class ChildonePageModule {}
