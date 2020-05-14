import React , { useState , useEffect} from 'react';

export default () => {
    const [countries , setCountryList] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            const response = await fetch('https://restcountries.eu/rest/v2/all');
            const countries = await response.json();
            return countries;
        };
        getCountries().then(d => setCountryList(d));
    },[]);

    return (
        <div>
            {
                <React.Fragment>
                    <label for="countries">Choose a Country:</label>
                    <select id="countries" onChange={(evt) => {
                        const value = evt.target.value;
                        setTimeout(() => {
                            alert(`You Selected ${value}`)
                        },0);
                    }}>
                        {
                            countries.map(
                                country => <option value={country.name}>{country.name}</option>)
                        }
                    </select>
                </React.Fragment>
            }
        </div>
    )
}
