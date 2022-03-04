import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralCrudInterface } from '../interfaces/GeneralCrudInterface';
import { Restaurante } from '../models/dto/Restaurante.dto';
import { Response } from '../models/public/Response.dto';

@Injectable({
  providedIn: 'root'
})
export class RestauranteServiceService implements GeneralCrudInterface<Restaurante>{

  constructor(private httpClient: HttpClient) { }

  baseURL: string = "http://localhost:8084/api/v1";
  controladorURL: string = "/restaurantes";

  obtenerTodos(): Observable<Response<Restaurante[]>> {
    return this.httpClient.get<Response<Restaurante[]>>(`${this.baseURL}${this.controladorURL}/restaurantes`);
  }
  obtenerPorId(id: number): Observable<Response<Restaurante>> {
    throw new Error('Method not implemented.');
  }
  crear(entidad: Restaurante): Observable<Response<Restaurante>> {
    throw new Error('Method not implemented.');
  }
  eliminarPorId(id: number): Observable<Response<Restaurante>> {
    throw new Error('Method not implemented.');
  }
  actualizar(entidad: Restaurante, id: number): Observable<Response<Restaurante>> {
    throw new Error('Method not implemented.');
  }
}
