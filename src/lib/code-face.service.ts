import { Injectable } from '@angular/core';
import { LANGUAGE } from './constant';
@Injectable({
  providedIn: 'root'
})
export class CodeFaceService {

  constructor() { }
  initialSourceCode = language => {
    let sourceCode = '';
    switch (language) {
      case LANGUAGE.C: {
        sourceCode = '#include <stdio.h>\n\nint main()\n{\n    printf("Hello World");\n\n    return 0;\n}'
      } break;
      case LANGUAGE.C_PLUS: {
        sourceCode = '#include <stdio.h>\n\nint main()\n{\n    printf("Hello World");\n\n    return 0;\n}'
      } break;
      case LANGUAGE.JAVA: {
        sourceCode = 'public class Main\n{\n	public static void main(String[] args) {\n		System.out.println("Hello World");\n	}\n}'
      } break;
    }
    return sourceCode;
  }

  getMode = language => {
    let mode = '';
    switch (language) {
      case LANGUAGE.C: {
        mode = 'text/x-csrc'
      } break;
      case LANGUAGE.C_PLUS: {
        mode = 'text/x-c++src'
      } break;
      case LANGUAGE.JAVA: {
        mode = 'text/x-java'
      } break;
    }
    return mode;
  }
}
