import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/background/background.component';
import { BioComponent } from './components/bio/bio.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SliderComponent } from './components/slider/slider.component';



@NgModule({
  declarations: [
    LandingComponent,
    BioComponent,
    AboutMeComponent,
    SliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
