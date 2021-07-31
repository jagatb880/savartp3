import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GuidelineHeaderComponent } from './guideline-header.component';

@NgModule({
  imports: [ CommonModule, IonicModule ],
  declarations: [GuidelineHeaderComponent],
  exports: [GuidelineHeaderComponent]
})
export class GuidelineHeaderComponentModule {}
