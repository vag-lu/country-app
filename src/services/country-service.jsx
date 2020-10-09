import axios from 'axios'

const ENDPOINT = "https://restcountries.eu/rest/v2/"
const ALL = "all"


export async function getAllCountries(){
    const response = await axios.get(ENDPOINT+ALL)
    return response.data
}

export async function getCountry(alphaCode){
    const response = await axios.get(ENDPOINT+"alpha/"+alphaCode)
    return response.data
}