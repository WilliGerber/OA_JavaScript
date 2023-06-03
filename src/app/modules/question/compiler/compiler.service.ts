import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {
  public result: any = null;
  public error: any = null;
  public logs: string[] = [];
  constructor() { }

  // executeCode(code: string): any {

  //   this.result = null;
  //   this.error = null;
  //   this.logs = [];

  //   // Redefinir a função console.log para capturar os logs
  //   const originalConsoleLog = console.log;
  //   console.log = (...args: any[]) => {
  //     this.logs.push(args.join(' '));
  //     originalConsoleLog(...args);
  //   };
    
  //   try {
  //     // Executar o código
  //     this.result = eval(code);
  //     // Retornar os logs capturados
  //   } catch (error:any) {
  //     this.error =  error.message;
  //   } finally {
  //     // Restaurar a função console.log original
  //     console.log = originalConsoleLog;
  //   }
  //   return { result: this.result, logs: this.logs, error: this.error};
  // }
  executeCode(code: string): any {
    this.result = null;
    this.error = null;
    this.logs = [];
  
    // Redefinir a função console.log para capturar os logs
    const originalConsoleLog = console.log;
    console.log = (...args: any[]) => {
      this.logs.push(args.join(' '));
      originalConsoleLog(...args);
    };
  
    try {
      // Criar uma função anônima usando o código fornecido
      const codeFn = new Function('console', `
        const functionLogs = [];
        const originalConsoleLog = console.log;
        console.log = (...args) => {
          functionLogs.push(args.join(' '));
          originalConsoleLog(...args);
        };
  
        ${code}
  
        return functionLogs;
      `);
      // Executar a função criada passando a função console.log como argumento
      const result = codeFn(console);
  
      // Retornar os logs capturados
      return { result: null, logs: this.logs, error: null };
    } catch (error: any) {
      this.error = error.message;
  
      // Retornar os logs e o erro capturado
      return { result: null, logs: this.logs, error: this.error };
    } finally {
      // Restaurar a função console.log original
      console.log = originalConsoleLog;
    }
  }
  
  
  
  
}