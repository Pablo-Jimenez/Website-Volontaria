import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import GlobalService from "./globalService";
import {AuthenticationService} from "./authentication.service";


@Injectable()
export class EventService extends GlobalService{

  constructor(public http:HttpClient,
              private authenticationService:AuthenticationService) {
    super();
  }

  getEvents(): Observable<any> {
    let headers = this.getHeaders();
    return this.http.get<any>(
      'http://127.0.0.1:8000/volunteer/events',
      {headers: headers}
    );
  }

  getEvent(id:number): Observable<any> {
    let headers = this.getHeaders();
    return this.http.get<any>(
      'http://127.0.0.1:8000/volunteer/events/' + id,
      {headers: headers}
    );
  }

  getEventWhereVolunteer(): Observable<any> {
    let headers = this.getHeaders();
    let userId = this.authenticationService.getProfile().id;
    let params = new HttpParams().set('volunteers', userId);

    return this.http.get<any>(
      'http://127.0.0.1:8000/volunteer/events',
      {headers: headers, params:params}
    );
  }

  getEventWhereOnHold(): Observable<any> {
    let headers = this.getHeaders();
    let userId = this.authenticationService.getProfile().id;
    let params = new HttpParams().set('volunteers_standby', userId);

    return this.http.get<any>(
      'http://127.0.0.1:8000/volunteer/events',
      {headers: headers, params:params}
    );
  }
}