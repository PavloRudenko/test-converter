import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CurrencyRateComponent } from './currency-rate.component';
import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [CurrencyRateComponent, SelectComponent, InputComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  exports: [CurrencyRateComponent],
})
export class CurrencyRateModule {}
