import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopularPageRoutingModule } from './popular-routing.module';

import { PopularPage } from './popular.page';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopularPageRoutingModule,
  ],
  declarations: [PopularPage, MovieCardComponent]
})
export class PopularPageModule {}
