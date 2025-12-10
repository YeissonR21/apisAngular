import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragonBallApiService {

  private apiUrl = 'https://dragonball-api.com/api/characters';

  constructor(
    private _httpClient: HttpClient
  ) { }
  getAllCharacters(): Observable<any> {
    return this._httpClient.get<any>(this.apiUrl);
  }

  getCharacterById(id: number): Observable<any> {
    return this._httpClient.get<any>(`${this.apiUrl}/${id}`);
  }
}
