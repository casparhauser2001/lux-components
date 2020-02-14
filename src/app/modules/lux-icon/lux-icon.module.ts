import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { LuxIconComponent } from './lux-icon/lux-icon.component';
import { LuxImageComponent } from './lux-image/lux-image.component';
import { LuxComponentsConfigModule } from '../lux-components-config/lux-components-config.module';

@NgModule({
  imports: [CommonModule, MatIconModule, FlexLayoutModule, LuxComponentsConfigModule],
  declarations: [LuxIconComponent, LuxImageComponent],
  exports: [LuxIconComponent, LuxImageComponent]
})
export class LuxIconModule {}
