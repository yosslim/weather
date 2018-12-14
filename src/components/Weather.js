import React, { Component } from 'react';

class Weather extends Component{

    showResult = () => {
        //Get data from the query
        const {name, weather, main} = this.props.res;

        if(!name || !weather || !main) return null;

        //we need to change kelvin degres to celcius
        const kelvin = 273.15;

        //Icons, we can find in the documentation 
        const urlIcono = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
        const alt = `clima de ${name}`;

        return(
            <div className="row">
                    <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                         <div className="card-panel light-blue align-center">
                              <span className="white-text">
                                   <h2>Weather Result for: {name}</h2>
                                   <p className="temperatura">
                                       Current: { (main.temp - kelvin).toFixed(2) } &deg;C
                                        <img src={urlIcono} alt={alt} />
                                   </p>
                                   <p> Max. {main.temp_max - kelvin} &deg;C</p>
                                   <p> Min. {main.temp_min - kelvin} &deg;C</p>
                                   
                              </span>
                         </div>    
                    </div>
               </div>
        )

    }
   
    render(){
        return(
            <div className="container">
               {this.showResult()}
            </div>           
        )
    }
}

export default Weather;