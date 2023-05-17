import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/background/background.component';
import { BioComponent } from './components/bio/bio.component';



@NgModule({
  declarations: [
    LandingComponent,
    BioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
