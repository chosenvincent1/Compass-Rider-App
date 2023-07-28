
export const SelectCity = ({city, handleSelectCityChange, cityList})=> {
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
            </div>
        </>
    )
}