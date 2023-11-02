import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  private alumnos: Alumno[] = [];

  getAlumnos(): Alumno[] {
    return this.alumnos;
  }

  addAlumno(alumno: Alumno): void {
    this.alumnos.push(alumno);
  }

  updateAlumno(id: number, updatedAlumno: Alumno): void {
    const index = this.alumnos.findIndex((a) => a.id === id);
    if (index !== -1) {
      this.alumnos[index] = updatedAlumno;
    }
  }

  deleteAlumno(id: number): void {
    this.alumnos = this.alumnos.filter((a) => a.id !== id);
  }
}
