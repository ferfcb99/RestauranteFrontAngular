import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralCrudInterface } from '../interfaces/GeneralCrudInterface';
import { Platillo } from '../models/dto/Platillo.dto';
import { Response } from '../models/public/Response.dto';

@Injectable({
  providedIn: 'root'
})
export class PlatilloServiceService implements GeneralCrudInterface<Platillo>{

  constructor(private httpClient: HttpClient) { }

  baseURL: string = "http://localhost:8084/api/v1";
  controladorURL: string = "/platillos";
  
  // http://localhost:8084/api/v1/platillos
  obtenerTodos(): Observable<Response<Platillo[]>> {
    return this.httpClient.get<Response<Platillo[]>>(`${this.baseURL}${this.controladorURL}/platillos`);
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
