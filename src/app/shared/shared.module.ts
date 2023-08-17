import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  providers: [],
  exports: [
    CommonModule,
    MatTooltipModule
  ]
})
export class SharedModule { }
