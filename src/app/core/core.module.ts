import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    // Those are modules to be aggregated and exported as a single unit
    CommonModule,
    FormsModule,
  ]
})
export class CoreModule { }
