import { CommonModule, NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

const modules = [
  CommonModule,
  MatTooltipModule,
  MatTableModule,
  MatInputModule,
  MatSelectModule,
  FormsModule,
  ReactiveFormsModule,
  MatStepperModule,
  MatSliderModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatListModule,
  MatIconModule,
  MatDialogModule,
  MatRadioModule
]

@NgModule({
  imports: modules,
  providers: [],
  exports: modules
})
export class SharedModule { }
