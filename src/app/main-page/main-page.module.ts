import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [MainPageComponent, TopMenuComponent, FooterComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainPageModule { }
