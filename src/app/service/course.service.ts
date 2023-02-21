import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Course} from "../model/course.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>('http://localhost:8080/api/courses');
  }
}
