import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  private dataSubject = new Subject<any>();
  private cerrarModalSubject = new Subject<any>();

  sendData(data: any) {
    this.dataSubject.next(data);
  }
  getData(): Observable<any> {
    return this.dataSubject.asObservable();
  }


  sendCerrarModal(data: any) {
    this.cerrarModalSubject.next(data);
  }
  getCerrarModal(): Observable<any> {
    return this.cerrarModalSubject.asObservable();
  }

}
