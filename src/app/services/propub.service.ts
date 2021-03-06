import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PropubService {
apiRoot: string = "https://api.propublica.org/congress";
computerRoot: string = "C:/Users/zalexander/Desktop"

  constructor(private http:Http) { }

  getPropublica() {
      let url = `${this.apiRoot}/v1/115/senate/members.json`;
      let headers = new Headers();
      headers.set('X-API-Key', '5buFoSrpgu70owCTEcp7Z3mjThGka24f5SW8EyJA');
      return this.http.get(url, { headers: headers })
          .map(res => res.json());
  }

}
