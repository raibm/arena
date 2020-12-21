import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { TopMenuComponent } from './top-menu/top-menu.component';



@NgModule({
  declarations: [MainPageComponent, TopMenuComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule
  ]
})
export class MainPageModule { }
