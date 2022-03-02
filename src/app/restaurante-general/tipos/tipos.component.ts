import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tipo } from 'src/app/models/dto/Tipo.dto';
import { TipoServiceService } from 'src/app/services/tipo-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.scss']
})
export class TiposComponent implements OnInit{

  constructor(private tipoService: TipoServiceService,
    private formBuilder: FormBuilder) { }

  tipos: Tipo[];

  tipo: Tipo = new Tipo();

  // formulario reactivo
  tipoForm: FormGroup;

  ngOnInit(): void {
    this.tipoForm = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(1)]]
    });
    this.listarTipos();
  }

  validaTipoParaActualizar(): boolean{
    return !(this.tipo.id > 0 && this.tipo.nombre.length > 0);
  }

  actualizar(): void{
    this.tipoService.actualizar(this.tipo, this.tipo.id).subscribe(respuesta =>{
      this.listarTipos();
      Swal.fire(
        "Actualizado",
        "Actualizado exitosamente",
        "success"
      );
    }, error =>{
      Swal.fire("Error", `No Actualizado ${error}`, "error");
    })
  }

  obtenerPorId(id: number): void{

    this.tipoService.obtenerPorId(id).subscribe(respuesta =>{
      this.tipo = respuesta.body;
    })

  }

  registrar(): void{
    this.tipoService.crear(this.tipoForm.value).subscribe(respuesta =>{
      this.listarTipos();
      Swal.fire(
        "Creado",
        "Creado exitosamente",
        "success"
      );
    }, error =>{
      console.log(error)
    })
  }

  eliminar(id: number): void{
    this.tipoService.eliminarPorId(id).subscribe(respuesta =>{
      this.listarTipos();
      Swal.fire("Eliminado", "Eliminado de forma exitosa", "info");
    }, error =>{
      Swal.fire("Error", `No eliminado ${error}`, "error");
      console.log(error);
    });
  }

  listarTipos(): void{
    this.tipoService.obtenerTodos().subscribe(respuesta =>{
      this.tipos = respuesta.body;
    }, error => {
      console.log(error);
    });
  }

}
