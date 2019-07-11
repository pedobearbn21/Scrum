import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { resolve, reject } from 'q';
import { ChartComponent } from '../view/chart/chart.component';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( private http: HttpClient ) { }
  showissuechart(datavalue) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/showissuechart', datavalue, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  getprojectyear() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/getchart')
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  getchart() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/getchart')
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  getdaily() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/getdaily' )
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  SaveDaily(datavalue) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/savedaily', datavalue, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
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



  getissueDetail() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/getissueDetail' )
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  addissue(datavalue) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/addissue', datavalue, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  updateissueData(datavalue, id) {
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/updateissueData/' + id, datavalue, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
  deleteissueData(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost/Project/Scrum/Back/Lumen_api/public/api/v1/deleteissueData/' + id, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }





}
