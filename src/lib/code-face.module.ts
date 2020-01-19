import { NgModule } from '@angular/core';
import { CodeFaceComponent } from './code-face.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';
import { CodeFaceService } from './code-face.service';

@NgModule({
  declarations: [CodeFaceComponent],
  imports: [
    CodemirrorModule,
    FormsModule,
  ],
  providers: [CodeFaceService],
  exports: [CodeFaceComponent]
})
export class CodeFaceModule { }
