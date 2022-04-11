import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '@skooltrak-project/data/models';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  constructor(private http: HttpClient) {}

  public getAll = () => this.http.get<Subject[]>('/api/subjects');

  public get = (id: string) => this.http.get<Subject>(`/api/subjects/${id}`);

  public post = (subject: Subject) =>
    this.http.post<Subject>('/api/subjects', subject);

  public update = (id: string, subject: Subject) =>
    this.http.patch(`/api/subjects/${id}`, subject);

  public delete = (id: string) => this.http.delete(`/api/subjects/${id}`);
}
