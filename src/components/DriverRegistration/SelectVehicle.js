import './SelectVehicle.css';
import { FaExclamationCircle } from 'react-icons/fa';

export const SelectVehicle = ()=> {
    return (
        <section className='select-vehicle'>
            <h2 className='select-vehicle__heading'>Select your car type</h2>
            <div className='car-type-container'>
                <div className='car-type'>
                    <img src='../images/sedan.svg' alt='Sedan Car' className='' />
                    <p>Sedan</p>
                </div>

                <div className='car-type'>
                    <img src='../images/suv-van.svg' alt='SUV Car' className='' />
                    <p>SUV/Van</p>
                </div>

                <div className='car-type'>
                    <img src='../images/semi-luxury.svg' alt='Semi Luxury Car' className='' />
                    <p>Semi Luxury</p>
                </div>

                <div className='car-type'>
                    <img src='../images/luxury.svg' alt='Luxury Car' className='' />
                    <p>Luxury Car</p>
                </div>
            </div>
            <div className='error-message'><FaExclamationCircle /> Select a vehicle type</div>
        </section>
    )
}