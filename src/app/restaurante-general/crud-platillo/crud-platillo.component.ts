import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Platillo } from 'src/app/models/dto/Platillo.dto';
import { Restaurante } from 'src/app/models/dto/Restaurante.dto';
import { Tipo } from 'src/app/models/dto/Tipo.dto';
import { PlatilloServiceService } from 'src/app/services/platillo-service.service';
import { RestauranteServiceService } from 'src/app/services/restaurante-service.service';
import { TipoServiceService } from 'src/app/services/tipo-service.service';

@Component({
  selector: 'app-crud-platillo',
  templateUrl: './crud-platillo.component.html',
  styleUrls: ['./crud-platillo.component.scss']
})
export class CrudPlatilloComponent implements OnInit {


  platillo: Platillo = new Platillo("","",0,new Restaurante(), new Tipo());

  tipos: Tipo[];
  restaurantes: Restaurante[];

  constructor(private restauranteService: RestauranteServiceService, 
    private tipoService: TipoServiceService,
    private platilloService: PlatilloServiceService) { }

  ngOnInit(): void {
    this.listarTipos()
    this.listarRestaurantes()



    //this.platillo.id = 0;
    //this.platillo.nombre = "Platillo";
    //console.log(JSON.stringify(this.platillo))
  }



  listarTipos(): void{
    this.tipoService.obtenerTodos().subscribe(respuesta =>{
      this.tipos = respuesta.body;
    })
  }

  listarRestaurantes(): void{
    this.restauranteService.obtenerTodos().subscribe(respuesta =>{
      this.restaurantes = respuesta.body;
      console.log(this.restaurantes)
    })
  }

  enviar(): void{
    console.log(JSON.stringify(this.platillo))
  }

}
