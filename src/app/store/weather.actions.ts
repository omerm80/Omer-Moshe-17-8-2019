import { Action } from '@ngrx/store';
import { weatherItem } from '../weather-item';

export  const UPDATE_WEATHER="UPDATE_WEATHER";
export  const ADD_DAY_TO_WEEK="ADD_DAY_TO_WEEK";
export  const UPDATE_LAT="UPDATE_LAT";
export  const UPDATE_LNG="UPDATE_LNG";

export class updateWeather implements Action
{
    readonly type=UPDATE_WEATHER;
    constructor(payload:weatherItem){

    }
}

export class addDayToWeek implements Action{
    readonly type=ADD_DAY_TO_WEEK;
    constructor(payload:weatherItem[]){
    }


}
export class updateLat implements Action
{
    readonly type=UPDATE_LAT;
    constructor(payload:any)
    {

    }
}
export class updateLng implements Action
{
    readonly type=UPDATE_LNG;
    constructor(payload:any)
    {

    }
}