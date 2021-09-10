import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  async list(): Promise<any>{
    const clientes = await this.http.get(`${environment.backendUrl}/users`).toPromise();
    return clientes;

  }

  async create(user: User){
    return this.http.post(`${environment.backendUrl}/users`,user).toPromise();
  }

  async read(id: number): Promise<User>{
    const user = await this.http.get<User>(`${environment.backendUrl}/users/${id}`).toPromise();
    return user;
  }

  async update(user: User, id: number) {
    return this.http.put(`${environment.backendUrl}/users/${id}`,user).toPromise();
  }
  async delete(user: User, id: number) {
    return this.http.put(`${environment.backendUrl}/users/${id}`,user).toPromise();
  }
}
