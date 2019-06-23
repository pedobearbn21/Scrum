import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  getProjectDeatil() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/getAll' )
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  addProject(datavalue) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/addProject', datavalue, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  updateData(datavalue, id) {
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/updateData/' + id, datavalue, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  deleteData(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/deleteData/' + id, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  getID(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/getID/' + id, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }


  getEmployeetDetail() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/getEmployeeAll' )
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  addEmployee(datavalue) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/addEmployee', datavalue, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  updateEmployeeData(datavalue, id) {
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/updateEmployee/' + id, datavalue, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  deleteEmployeeData(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/deleteEmployeeData/' + id, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }



  getworkcatedetail() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/getworkcatedetail' )
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  addworkcate(datavalue) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/addworkcate', datavalue, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  updateworkcateData(datavalue, id) {
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/updateworkcateData/' + id, datavalue, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  deleteworkcateData(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/deleteworkcateData/' + id, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }


  getStatusDetail() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/getStatusDetail' )
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  addStatus(datavalue) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/addStatus', datavalue, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  updateStatusData(datavalue, id) {
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/updateStatusData/' + id, datavalue, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  deleteStatusData(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/deleteStatusData/' + id, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }





}
