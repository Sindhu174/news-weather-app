import { Component, OnInit } from '@angular/core';
import { NewsSService } from '../news-s.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  userName: string;
  country:string;
  msg:string;
  newsgroup:any[]
  

  constructor(public newsSer: NewsSService) { }

  doCheck(countryCode: string){
    
    if(!countryCode){
      
      this.msg = "Enter country code!"
    }
    else{
      this.msg = ""
    }
  }
  
  doCatSelect(country: string, category: any){

    if(category.target.value=="all"){
      this.newsSer.doSendCountryCodeAll(country).subscribe({
      
        next: (data:any)=>{
          this.newsgroup = data.articles;
          }
      })
    }
    else{
      
        this.newsSer.doSendCountryCode(country, category.target.value).subscribe({
        next: (data:any)=>{
            this.newsgroup = data.articles;                  
          }
        })
      }
    }
  ngOnInit(): void {
    this.userName = localStorage.getItem("loggedUser")
  }

}
