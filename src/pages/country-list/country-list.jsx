import React from 'react'
import Country from '../../components/country/country'
import { getAllCountries } from '../../services/country-service'
import '../../util.scss'
import './country-list.scss'

class CountryList extends React.Component {

    constructor() {
        super()
        this.state = {
            countriesList: null,
            filtredCountriesList: null,
            continent: "none"
        }
    }

    componentDidMount() {
        getAllCountries().then(response => this.setState({ countriesList: response, filtredCountriesList: response }))
    }

    onContinentChange = (event) => {
        const {
            value
        } = event.target
        this.setState({ continent: value })
        if (value !== "none") {
            const newCountriesList = this.state.countriesList.filter((country) => country.region === value)
            this.setState({ filtredCountriesList: newCountriesList })
        } else {
            this.setState({ filtredCountriesList: this.state.countriesList })
        }

    }

    render() {
        const {
            filtredCountriesList,
            continent
        } = this.state

        return (
            <div className="container">
                <div>
                    <select value={continent} onChange={this.onContinentChange}>
                        <option value="none">--Select Continent--</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                    {filtredCountriesList &&
                        filtredCountriesList.map((country) => (
                            <Country key={country.alpha3Code} country={country}></Country>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default CountryList