import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderComponent,FooterComponent // Add HeaderComponent to the imports array
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class SharedModule { }
