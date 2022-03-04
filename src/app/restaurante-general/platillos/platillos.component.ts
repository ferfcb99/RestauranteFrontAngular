import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Platillo } from 'src/app/models/dto/Platillo.dto';
import { Restaurante } from 'src/app/models/dto/Restaurante.dto';
import { Tipo } from 'src/app/models/dto/Tipo.dto';
import { PlatilloServiceService } from 'src/app/services/platillo-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.scss']
})
export class PlatillosComponent implements OnInit {

  constructor(private platilloService: PlatilloServiceService,
    private router: Router) { }

  platillo: Platillo = new Platillo();

  platillos: Platillo[];

  ngOnInit(): void {

    /*
    this.platillo.id = 1;
    this.platillo.nombre ="Platillo 1";
    this.platillo.precio = 399.99;
    this.platillo.tamano = "Mediano";
    this.platillo.restaurante = new Restaurante();
    this.platillo.restaurante.id = 1;
    this.platillo.restaurante.nombre = "R1";
    this.platillo.restaurante.tipo = "Grasos";
    this.platillo.tipo = new Tipo();
    this.platillo.tipo.id = 1;
    this.platillo.tipo.nombre = "Grasos";
    */

    this.listarPlatillos();
    
  }


  irAFormularioDeAgregar(): void{
    this.router.navigate(['/registrarPlatillo']);
  }


  listarPlatillos(): void {
    this.platilloService.obtenerTodos().subscribe(respuesta => {
      this.platillos = respuesta.body;
      console.log(this.platillos);
    }, error => {
      console.log(error);
    })
  }

}
