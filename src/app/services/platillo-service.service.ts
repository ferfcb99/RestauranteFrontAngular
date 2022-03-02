import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralCrudInterface } from '../interfaces/GeneralCrudInterface';
import { Platillo } from '../models/dto/Platillo.dto';
import { Response } from '../models/public/Response.dto';

@Injectable({
  providedIn: 'root'
})
export class PlatilloServiceService implements GeneralCrudInterface<Platillo>{

  constructor() { }

  
  obtenerTodos(): Observable<Response<Platillo[]>> {
    return this.httpClient.get<Response<Platillo[]>>("url");
  }
  obtenerPorId(id: number): Observable<Response<Platillo>> {
    throw new Error('Method not implemented.');
  }
  crear(entidad: Platillo): Observable<Response<Platillo>> {
    throw new Error('Method not implemented.');
  }
  eliminarPorId(id: number): Observable<Response<Platillo>> {
    throw new Error('Method not implemented.');
  }
  actualizar(entidad: Platillo, id: number): Observable<Response<Platillo>> {
    throw new Error('Method not implemented.');
  }
}
