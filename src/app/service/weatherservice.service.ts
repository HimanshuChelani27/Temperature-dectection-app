import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../model/weather.model';
import { Enviroment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private http : HttpClient) { }

  getWeatherData(cityName:string):Observable<any>{
    // return this.http.get<WeatherData>(Enviroment.weatherApiBaseUrl+'/city/'+cityName, {
    //   headers: new HttpHeaders()
    //   .set(Enviroment.XRapidAPIHostHeaderName , Enviroment.XRapidAPIHostHeaderValue)
    //   .set(Enviroment.XRapidAPIKeyHeaderName,Enviroment.XRapidAPIKeyHeaderValue),
      // params: new HttpParams()
      // .set('q', cityName)
      // .set('units', 'metric')
      // .set('mode', 'json')
    //}
    //)

    return this.http.get("https://open-weather13.p.rapidapi.com/city/"+ cityName, {
     headers: new HttpHeaders()
  .set("X-RapidAPI-Host" , "open-weather13.p.rapidapi.com")
     .set("X-RapidAPI-Key","279fdd1c97msh0019ecada1a6ab6p123016jsnb7da512d0fd3"),
    })
   }


  
  }

