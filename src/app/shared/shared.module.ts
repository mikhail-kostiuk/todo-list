import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, LogoComponent],
  declarations: [HeaderComponent, LogoComponent],
  providers: [],
})
export class SharedModule {}
