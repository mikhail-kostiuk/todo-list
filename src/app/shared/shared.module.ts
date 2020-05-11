import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { PlusIconComponent } from './icons/plus/plus-icon.component';
import { MinusIconComponent } from './icons/minus/minus-icon.component';
import { CrossIconComponent } from './icons/cross/cross-icon.component';
import { EditIconComponent } from './icons/edit/edit-icon.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    LogoComponent,
    PlusIconComponent,
    MinusIconComponent,
    CrossIconComponent,
    EditIconComponent,
  ],
  declarations: [
    HeaderComponent,
    LogoComponent,
    PlusIconComponent,
    MinusIconComponent,
    CrossIconComponent,
    EditIconComponent,
  ],
  providers: [],
})
export class SharedModule {}
