import React, { Component } from 'react';
import Header from './Header';
import Formulary from './Formulary';
import Error from './Error';
import Weather from './Weather';




class App extends Component {

  state = {
    error:'',
    dataWeather:{},
    result:{}
  }

  componentDidMount(){
    this.setState({
      error:false
    })
  }

  //When there are changes on my state
  componentDidUpdate(prevProps, prevState){
    
    //Este if es para revisar si el state ya cambio, si es asi mandamos a llamar a la API
    //Si no ponemos esta condicion componentDidUpdate siempre se esta actualizando (ciclo) no importa si realmente
    //cambia el state...
    if(prevState.dataWeather != this.state.dataWeather){
      this.checkAPI();
    }    
  }

  checkAPI=()=>{

    
    const {city, country} = this.state.dataWeather;
    
    //Read the URL and add the ApI Key
    const appID = 'e5556cfcfe952fb14cc15760342c5eaf';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${appID}`;

    if(!city || !country) return null;

    //Query with fetch API

    //Working with promises and fetch
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          result : data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  checkWeather = response => {

    if(response.city === '' || response.country === '') {
      this.setState({
        error: true
      })
    } else {
      this.setState({
        dataWeather:response,
        error : false
      })
    }
  }
  
  render() {

    const error = this.state.error;
    let result;

    if(error){
      result=<Error mesage="Required fields" />
    }
    else{
      result=<Weather res = {this.state.result}/>
    }

    return (
      <div className="app">
        <Header titulo='Weather API'
        />
        <Formulary
          checkWeather = {this.checkWeather}
        />
        {result}
      </div>
    );
  }
}

export default App;
