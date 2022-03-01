import { Observable } from "rxjs";
import { Response } from "../models/public/Response.dto";

export interface GeneralCrudInterface<T>{
   
    obtenerTodos(): Observable<Response<T[]>>;

    obtenerPorId(id: number): Observable<Response<T>>;

    crear(entidad: T): Observable<Response<T>>;

    eliminarPorId(id: number): Observable<Response<T>>;

    actualizar(entidad: T, id: number): Observable<Response<T>>;
}