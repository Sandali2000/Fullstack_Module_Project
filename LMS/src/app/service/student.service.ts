import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, skipWhile, tap} from 'rxjs/operators'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
  }

  addStudent(student: any) {
    return this.http.post('http://localhost:8080/student/add-student', student);
  }

  listStudent() {
    return this.http.get('http://localhost:8080/student/');
  }

  deleteStudent(id: any) {
    return this.http.delete('http://localhost:8080/student/del-student/' + id);
  }

  singleStudent(id: any) {
    return this.http.get('http://localhost:8080/student/student/' + id);
  }

  updateStudent(id: any, student: any) {

    return this.http.put('http://localhost:8080/student/update-student/' + id, student);
  }

  login(id: any) {
    return this.http.get('http://localhost:8080/student/studentLogin/' + id)
  }
  countStudent(){
    return this.http.get('http://localhost:8080/student/count-student/')
  }



}
