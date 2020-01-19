import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';
import 'codemirror/mode/clike/clike';
import { Doc, TextMarker } from 'codemirror';
import { CodeFaceService } from './code-face.service';
import { LANGUAGE, THEME } from './constant';

@Component({
  selector: 'code-face',
  templateUrl: './code-face.component.html',
  styleUrls: ['./code-face.component.sass'],
})
export class CodeFaceComponent implements OnInit {
  
  @ViewChild('codeEditor', { static: false }) codeEditor: CodemirrorComponent;
  
  @Input('language') language: string;
  @Input('theme') theme: string;

  private _value: string;
  private _theme: string;
  private _language: string;
  private _sourceCode: string;
  
  constructor( private codeFaceService: CodeFaceService) {
    this._theme = this.theme || THEME.DEFAULT;
    this._language = this.language || LANGUAGE.C_PLUS;
    this._sourceCode = codeFaceService.initialSourceCode(this._language);
  }

  readonly codemirrorOptions = {
    lineNumbers: true,
    theme: this.theme || THEME.DEFAULT,
    mode: this.codeFaceService.getMode(this.language || LANGUAGE.C_PLUS),
  };

  ngOnInit() {
    setTimeout(() => {
      this._value = this.codeEditor.codeMirror.getValue() || '';
    })
  };

  get sourceCode() {
    return this._sourceCode;
  }

  set sourceCode(value: string) {
    if (value !== this._sourceCode) {
      this._sourceCode = value;
    }
  }

  get value() {
    return this._value;
  }

  set value(_value: string) {
    if (_value !== this._value) {
      this._value = _value;
    }
  }

  get doc() {
    return (this.codeEditor.codeMirror as any) as Doc;
  }

  public getValue = () => {
    this._value = this.codeEditor.codeMirror.getValue();
    return this._value;
  }

  public getLanguage = () => {
    return this._language;
  }

  public getTheme = () => {
    return this._theme;
  }
}
