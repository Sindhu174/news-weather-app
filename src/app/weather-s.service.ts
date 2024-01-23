import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherSService {
  
  

  constructor(public http: HttpClient) { 
    
  }
  

  doGetWeather(city:any){
  var queryParams = new HttpParams();
  queryParams = queryParams.append("q", city);
  queryParams = queryParams.append("appid", "3a3eb62e70b9745f96cb7c04245a9cb8")
  return this.http.get<any>("http://api.openweathermap.org/data/2.5/weather", 
   {params: queryParams
    })
  
  
  

  
}}
