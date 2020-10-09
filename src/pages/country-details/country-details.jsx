import React from 'react'
import Country from '../../components/country/country'
import { getAllCountries, getCountry } from '../../services/country-service'
import '../../util.scss'

class CountryDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            country: null,
            countriesList: null,
        }
    }

    componentDidMount() {
        const { country } = this.props.match.params
        getCountry(country).then(response => this.setState({ country: response }))
        getAllCountries().then(response => this.setState({ countriesList: response }))
    }

    getSameLanguage(iso639_2) {
        let sameLanguageList = this.state.countriesList.filter((country) => (
            country.languages.find((language) => (language.iso639_2 === iso639_2 && country.alpha3Code !== this.state.country.alpha3Code)))
        )
        return sameLanguageList.map((country) => <Country key={country.alpha3Code} country={country}></Country>)
    }

    getSameCurrency(code) {
        let sameCurrencyList = this.state.countriesList.filter((country) => (
            country.currencies.find((currency) => (currency.code === code && country.alpha3Code !== this.state.country.alpha3Code)))
        )
        return sameCurrencyList.map((country) => <Country key={country.alpha3Code} country={country}></Country>)
    }

    render() {
        const {
            country,
            countriesList
        } = this.state
        console.log(country)
        return (
            <div className="container">
                {country && countriesList &&
                    <div>
                        <h1>{country.name}</h1>
                        <hr />
                        <div><b>Languages:</b></div>
                        <ul>
                            {country.languages.map(language =>
                                <li key={language.iso639_2}>
                                    <div><b>{language.name}</b></div>
                                    {this.getSameLanguage(language.iso639_2)}
                                </li>)
                            }
                        </ul>
                        <hr/>
                        <div><b>Currencies:</b></div>
                        <ul>
                            {country.currencies.map(currency =>
                                <li key={currency.code}>
                                    <div><b>{currency.name} - {currency.code} - {currency.symbol}</b></div>
                                    {this.getSameCurrency(currency.code)}
                                </li>)
                            }
                        </ul>
                    </div>
                }
            </div>
        )
    }
}

export default CountryDetails