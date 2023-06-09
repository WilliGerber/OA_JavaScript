import { Component } from '@angular/core';
import { CompilerService } from '../compiler/compiler.service';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent {
  code: string;
  resposta: any;
  error: any;
  lines: number[];

  constructor(
    private compilerService: CompilerService
    ) {
    this.code = '';
    this.resposta = null;
    this.error = null;
    this.lines = [];
  }

  adjustTextareaHeight(textarea: HTMLTextAreaElement): void {
    console.log(textarea)
    textarea.style.minHeight = 'auto';
    textarea.style.minHeight = `${Math.max(textarea.scrollHeight, 30 * window.innerHeight / 100)}px`;;
    this.updateLineNumbers(textarea.value);
  }
  
  updateLineNumbers(value: string): void {
    const lineCount = value.split('\n').length;
    this.lines = Array.from({ length: lineCount }, (_, index) => index + 1);
  }

  async executeCode(compilerInputText: string): Promise<void> {
    this.code = compilerInputText;
    this.resposta = null;
    this.error = null;

    try {
      this.resposta = await this.compilerService.executeCode(this.code);
      console.log(this.resposta);
    } catch (error) {
      // Lidar com erros
    }
  }
}