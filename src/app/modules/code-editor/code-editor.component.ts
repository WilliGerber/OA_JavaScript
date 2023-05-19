import { Component } from '@angular/core';
import { CompilerService } from '../compiler/compiler.service';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.sass']
})
export class CodeEditorComponent {
  code: string;
  result: any;
  error: any;

  constructor(private compilerService: CompilerService) {
    this.code = '';
    this.result = null;
    this.error = null;
  }

  executeCode(): void {
    this.result = null;
    this.error = null;
    
    try {
      this.result = this.compilerService.executeCode(this.code);
    } catch (error) {
      this.error = error;
    }
  }

  updateCode(event: any): void {
    this.code = event.target.value;
  }
}
