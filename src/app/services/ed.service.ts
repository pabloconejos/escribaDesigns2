import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Designs} from "../common/degings";

@Injectable({
  providedIn: 'root'
})
export class EdService {

  private URI = 'https://escriba-designs-back.vercel.app/ed-designs';
  constructor(private http: HttpClient) { }

  getDesigns(): Observable<Designs>{
    return this.http.get<Designs>(this.URI);
  }

}
