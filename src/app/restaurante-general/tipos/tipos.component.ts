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

  get tipo(){
    return this.tipoForm.controls;
  }

  // formulario reactivo
  tipoForm: FormGroup;

  ngOnInit(): void {
    this.tipoForm = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(1)]]
    });


    this.listarTipos();
    
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


  listarTipos(): void{
    this.tipoService.obtenerTodos().subscribe(respuesta =>{
      this.tipos = respuesta.body;
      console.log(this.tipos);
    }, error => {
      console.log(error);
    });
  }

}
