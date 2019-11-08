import { weatherItem } from "../weather-item";
import * as weatherDataActions from './weather.actions'
    
export interface AppState{
weatherData:State
}
export interface State{
    currentWeather:weatherItem;
    weatherOfWeek:weatherItem[];
    lng:number;
    lat:number;
    favoriteWeather:weatherItem[];

}
const initialState={
currentWeather:new weatherItem("2", "2","2",false),
weatherOfWeek:[],
lng:null,
lat:null,
favoriteWeather:[]

} 
export function weatherDataReducer(state:State=initialState,
    action)
    {
        switch(action.type)
        {
            case weatherDataActions.UPDATE_WEATHER:
            return {
                ...state, currentWeather:action.payload
            }
            case weatherDataActions.ADD_DAY_TO_WEEK:
             return{
                ...state, weatherOfWeek:action.payload
               }

               case weatherDataActions.UPDATE_LAT:
                    return{
                       ...state, lat:action.payload
                      }
       
                       
                   
                   case weatherDataActions.UPDATE_LNG:
                        return{
                           ...state, lng:action.payload
                          }
           
                           
                       }
                       
            }


            
            export const getWeatherData = (state: AppState) => {
                return state.weatherData.currentWeather;
            }
            export const getWeatherWeek = (state: State) => {
                return state.weatherOfWeek;
            }
            
            
        
            export const getLat = (state: AppState) => {
                return state.weatherData.lat;
            }
            export const getLng = (state: AppState) => {
                return state.weatherData.lng;
            }
       
    
    


