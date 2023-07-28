import { useState } from 'react';
import './SelectVehicle.css';
import { FaExclamationCircle } from 'react-icons/fa';

export const SelectVehicle = ({checked, handleRadioChange})=> {
    
    return (
        <section className='select-vehicle'>
            <h2 className='select-vehicle__heading'>Select your car type</h2>

            <div className='car-type-container'>
                <div className={checked === 'Sedan' ? 'car-type-selected' : 'car-type'}>
                    <input 
                        name='selectedCar'
                        value='Sedan'
                        checked={checked === 'Sedan'}
                        onChange={handleRadioChange}
                        type='radio' 
                        className='radio-input' 
                    />
                    <img src='../images/sedan.svg' alt='Sedan Car' className='' />
                    <p>Sedan</p>
                </div>

                <div className={checked === 'SUV/Van' ? 'car-type-selected' : 'car-type'}>
                    <input 
                        name='selectedCar'
                        value='SUV/Van'
                        checked={checked === 'SUV/Van'}
                        onChange={handleRadioChange}
                        type='radio' 
                        className='radio-input' 
                    />
                    <img src='../images/suv-van.svg' alt='SUV Car' className='' />
                    <p>SUV/Van</p>
                </div>

                <div className={checked === 'Semi Luxury' ? 'car-type-selected' : 'car-type'}>
                    <input
                        name='selectedCar'
                        value='Semi Luxury'
                        checked={checked === 'Semi Luxury'}
                        onChange={handleRadioChange}
                        type='radio' 
                        className='radio-input' 
                    />
                    <img src='../images/semi-luxury.svg' alt='Semi Luxury Car' className='' />
                    <p>Semi Luxury</p>
                </div>

                <div className={checked === 'Luxury Car' ? 'car-type-selected' : 'car-type'}>
                    <input
                        name='selectedCar'
                        value='Luxury Car'
                        checked={checked === 'Luxury Car'}
                        onChange={handleRadioChange}
                        type='radio' 
                        className='radio-input' 
                    />
                    <img src='../images/luxury.svg' alt='Luxury Car' className='' />
                    <p>Luxury Car</p>
                </div>
            </div>
            <div className='error-message'><FaExclamationCircle /> Select a vehicle type</div>
        </section>
    )
}