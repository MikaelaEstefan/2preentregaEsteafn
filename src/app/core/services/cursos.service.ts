import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private cursos: Curso[] = [];

  getCursos(): Curso[] {
    return this.cursos;
  }

  addCurso(curso: Curso): void {
    this.cursos.push(curso);
  }

  updateCurso(id: number, updatedCurso: Curso): void {
    const index = this.cursos.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.cursos[index] = updatedCurso;
    }
  }

  deleteCurso(id: number): void {
    this.cursos = this.cursos.filter((c) => c.id !== id);
  }
}
