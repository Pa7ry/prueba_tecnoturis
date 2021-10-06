import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelOffersService {

  urlV1: string = 'https://test.api.amadeus.com/v1';
  urlV3: string = 'https://test.api.amadeus.com/v3';
  

  constructor(private http: HttpClient) { }

  getToken() {
    let body = new HttpParams()
      .append('grant_type', 'client_credentials')
      .append('client_id', 'AyDoF7AyOBozGAnz1WKA88QBJPyGics3')
      .append('client_secret', 'peHjlfFYGqRNGL3O');

    const headers = new HttpHeaders()
      .append('Content-type', 'application/x-www-form-urlencoded')

    return this.http.post(this.urlV1 + '/security/oauth2/token', body, { headers: headers })
  }

  getHotelName(params: any, token: string) {
    let headers: HttpHeaders;
    headers = new HttpHeaders().set('Authorization', `Bearer ${ token }`);
    return this.http.get(this.urlV1 + '/reference-data/locations/hotel', { headers: headers, params: params });
  }

  getHotelOffers(params: any, token: string) {
    let headers: HttpHeaders;
      headers = new HttpHeaders().set('Authorization', `Bearer ${ token }`);
    return this.http.get(this.urlV3 + '/shopping/hotel-offers', { headers: headers, params: params });
  }
}
