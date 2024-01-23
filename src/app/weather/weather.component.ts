import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherSService } from '../weather-s.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  userName: string;
  inputVal: string;
  cityName: string;
  countryName: string;
  temperature:number;
  humidity:number;
  status:boolean= false;
  city: string;

  constructor(public weather: WeatherSService, public eleRef: ElementRef) { 

  }

  cityDetails(city:any){
    
    this.weather.doGetWeather(city).subscribe({
      next: (data:any)=>{
        console.log(data)
        this.cityName = data.name;
        this.countryName = data.sys.country;
        this.temperature = data.main.temp;
        this.humidity= data.main.humidity;
        this.status = false;
        this.city = ''
       
      }, error: (error:any)=>{
        console.log(error)
        if(error.status == 404){
          this.status = true;
          

        }
        
      }
    })

    
    
  }

  ngOnInit(): void {
    this.userName = localStorage.getItem("loggedUser")
  }

}
