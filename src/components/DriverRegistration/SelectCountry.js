import {FaExclamationCircle} from 'react-icons/fa';

export const SelectCountry = ({country, handleSelectCountryChange, countryList, countryError})=> {
    return (
        <>
            <div className='driver-form_input '>
                <select 
                    name='country'
                    value={country}
                    onChange={handleSelectCountryChange} 
                    className='select-country'
                >
                    <option value=''>country</option>
                    {countryList.map((country, index)=> {
                        return (
                            <option key={index} value={country}>{country}</option>
                        )
                    })} 
                </select>
                {
                    countryError && 
                    <div className='error-message'><FaExclamationCircle /> Select country</div>
                }
            </div>
        </>
    )
}