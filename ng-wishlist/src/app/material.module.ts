import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
    imports:[
        MatButtonModule,
        MatIconModule,
        MatDividerModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatDividerModule
    ]
})
export class MaterialModule {}