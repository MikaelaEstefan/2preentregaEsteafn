import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/core/services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {
  alumnos: Alumno[] = [];

  constructor(private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.alumnos = this.alumnosService.getAlumnos();
  }

  
}
