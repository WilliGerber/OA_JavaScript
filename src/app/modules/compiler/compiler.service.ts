import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {

  constructor() { }

  executeCode(code: string): any {
    let logs: string[] = [];

    // Redefinir a função console.log para capturar os logs
    const originalConsoleLog = console.log;
    console.log = (...args: any[]) => {
      logs.push(args.join(' '));
      originalConsoleLog(...args);
    };

    try {
      // Executar o código
      eval(code);

      // Retornar os logs capturados
      return logs;
    } catch (error) {
      return error;
    } finally {
      // Restaurar a função console.log original
      console.log = originalConsoleLog;
    }
  }
}
