import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsSService {

  constructor(public http: HttpClient) { }

  doSendCountryCodeAll(country: string){
    var queryParams = new HttpParams();
    queryParams = queryParams.append("country", country);
    queryParams = queryParams.append("apiKey", "408b4153b994422d8638da72f2d3ac5b")
    return this.http.get<any>("https://newsapi.org/v2/top-headlines",{params: queryParams})
  }

  doSendCountryCode(country: string, category: string){
    var queryParams = new HttpParams();
    queryParams = queryParams.append("country", country);
    queryParams = queryParams.append("category", category);
    queryParams = queryParams.append("apiKey", "408b4153b994422d8638da72f2d3ac5b")
    return this.http.get<any>("https://newsapi.org/v2/top-headlines",{params: queryParams})
  }
}
