import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralCrudInterface } from '../interfaces/GeneralCrudInterface';
import { Tipo } from '../models/dto/Tipo.dto';
import { Response } from '../models/public/Response.dto';

@Injectable({
  providedIn: 'root'
})
export class TipoServiceService implements GeneralCrudInterface<Tipo>{

  baseURL: string = "http://localhost:8084/api/v1";
  controladorURL: string = "/tipos";

  constructor(private httpClient: HttpClient) { }

  obtenerTodos(): Observable<Response<Tipo[]>> {
    return this.httpClient.get<Response<Tipo[]>>(`${this.baseURL}${this.controladorURL}/tipos`);
  }
  obtenerPorId(id: number): Observable<Response<Tipo>> {
    throw new Error('Method not implemented.');
  }
  crear(entidad: Tipo): Observable<Response<Tipo>> {
    return this.httpClient.post<Response<Tipo>>(`${this.baseURL}${this.controladorURL}/tipos/crear`, entidad);
  }
  eliminarPorId(id: number): Observable<Response<Tipo>> {
    throw new Error('Method not implemented.');
  }
  actualizar(entidad: Tipo, id: number): Observable<Response<Tipo>> {
    throw new Error('Method not implemented.');
  }
}
