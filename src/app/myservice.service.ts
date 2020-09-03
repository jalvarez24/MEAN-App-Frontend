import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private _http: HttpClient) { }

  submitRegister(body: any) {
    return this._http.post('http://localhost:3001/register', body,{
      observe: 'body'
    })
  }

  login(body:any){
    return this._http.post('http://localhost:3001/login', body,{
      observe:'body'
    });
  }

  getUserName() {
    console.log("getUserName called")
    return this._http.get('http://localhost:3001/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

  getRole() {
    console.log("getRole called")
    return this._http.get('http://localhost:3001/role', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

  getAllPosts() {
    return this._http.get('http://localhost:3001/allPosts');
  }

  getUserPosts() {
    return this._http.get('http://localhost:3001/userPosts', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }
  
  addPost(body: any) {
    console.log({body})
    return this._http.post('http://localhost:3001/add-post', body,{
      observe: 'body'
    })
  }

  deletePost(id) {
    console.log(id)
    return this._http.post('http://localhost:3001/delete-post', id, {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    })
  }
}
