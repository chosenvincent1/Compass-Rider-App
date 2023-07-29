import {FaExclamationCircle} from 'react-icons/fa';

export const SelectCity = ({city, handleSelectCityChange, cityList, cityError})=> {
    return (
        <>
            <div className='driver-form_input '>
                <select
                    name='city'
                    value={city}
                    onChange={handleSelectCityChange}
                    className='select-city'
                >
                    {cityList.map((city, index)=> {
                        return (
                            <option key={index} value={city}>{city}</option>
                        )
                    })}
                </select>
                {
                    cityError &&
                    <div className='error-message'><FaExclamationCircle /> Select city</div>
                }
            </div>
        </>
    )
}