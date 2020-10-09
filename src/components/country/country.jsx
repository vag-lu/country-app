import React from 'react'
import './country.scss'

class Country extends React.Component {
   
    redirectToDetails(alpha3Code) {
        window.location.href = "/detalhes/" + alpha3Code
    }

    render() {
        const {
            country
        } = this.props

        return (
            <div className="country-card" onClick={() => this.redirectToDetails(country.alpha3Code)}>
                <span style={{ textDecoration: 'none' }}> {country.name}</span>
            </div>
        )
    }
}

export default Country