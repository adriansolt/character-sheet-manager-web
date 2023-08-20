import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  exports: [
    CommonModule,
    MatTooltipModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class SharedModule { }
