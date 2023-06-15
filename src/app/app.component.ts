import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from './service/weatherservice.service';
import { HttpClient } from '@angular/common/http';

import { WeatherData } from './model/weather.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private WeatherserviceService: WeatherserviceService, private http: HttpClient){

  }

  cityName : string="Nagpur";
 
  weatherData?: WeatherData;
 
  ngOnInit(): void {

    this.getWeatherData(this.cityName);


  }

  onSubmit(){

    this.getWeatherData(this.cityName);
    this.cityName="";

  }

  private getWeatherData(cityName: string){
    
console.log(this.http.get(" https://open-weather13.p.rapidapi.com/city/"+cityName))
console.log("yaha aaya hai");
this.WeatherserviceService.getWeatherData(cityName)
 .subscribe(
  //{
//   next:(response)=>{
//     console.log(response);
//     console.log("Yaha aaya hai");
//   }
// }



res =>{
  return res;


}




 )
  }
  title = 'temperature-detection';
}
