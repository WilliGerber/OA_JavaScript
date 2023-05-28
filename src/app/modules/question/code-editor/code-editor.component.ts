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

  constructor(
    private compilerService: CompilerService
    ) {
    this.code = '';
    this.resposta = null;
    this.error = null;
  }

  async executeCode(compilerInputText: string): Promise<void> {
    this.code = compilerInputText;
    this.resposta = null;
    this.error = null;

    try {
      this.resposta = await this.compilerService.executeCode(this.code);
      console.log(this.resposta['error']);
    } catch (error) {
      // Lidar com erros
    }
  }
}