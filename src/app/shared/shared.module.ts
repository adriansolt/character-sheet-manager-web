import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [],
  exports: [
    CommonModule,
    MatTooltipModule,
    MatTableModule,
    MatInputModule
  ]
})
export class SharedModule { }
