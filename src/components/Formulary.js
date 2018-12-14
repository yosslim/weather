import React, { Component } from 'react';

class Formulary extends Component {

    //Creating the refs

    cityRef = React.createRef();
    countryRef = React.createRef();

    searchWeather = (e) => {
        
        e.preventDefault();


        //Read the refs and create the object

        const response = {
            city: this.cityRef.current.value,
            country: this.countryRef.current.value
        }


        //send by props

        this.props.checkWeather(response);

        //Optional, reset the formulary


    }

    render(){
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.searchWeather}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input ref={this.cityRef} id="city" type="text"/>
                                <label htmlFor="city">City:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.countryRef}>
                                    <option value="" defaultValue>Choose a Country</option>
                                    <option value="CA" defaultValue>Canada</option>
                                    <option value="CO" defaultValue>Colombia</option>
                                    <option value="CR" defaultValue>Costa Rica</option>
                                    <option value="ES" defaultValue>Espain</option>
                                    <option value="US" defaultValue>United States</option>
                                    <option value="MX" defaultValue>Mexico</option>
                                    <option value="PE" defaultValue>Perù</option>
                                </select>
                                <label htmlFor="country">Country:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2 buscador">
                                <input type="submit" className="waves-effect waves-light btn-large yellow accent-4" value="Search..."/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default Formulary;