import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],exports:[
    FormsModule,
    ReactiveFormsModule,
    
    MatFormFieldModule,
    MatInputModule,
     
     ]
})
export class MaterialModule { }
