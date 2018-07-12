import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo';
import { ActivatedRoute } from '@angular/router';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    return this.http
            .get<Photo[]>(`${API}/${userName}/photos`);
  }
}
