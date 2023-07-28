import './LandingPage.css';
import { FaTimes, FaSearch, FaExclamationCircle } from 'react-icons/fa';
import { useState } from 'react';

export const LandingPage = ()=> {
    const [pickupError, setPickupError] = useState(false);
    const [locationError, setLocationError] = useState(false);
    const [bookingData, setBookingData] = useState({
        pickup: '',
        location: ''
    });

    const clearPickupInfo = ()=> {
        setBookingData(prevData => {
            return {...prevData, pickup: ''}
        })
    }
    const clearLocationInfo = ()=> {
        setBookingData(prevData => {
            return {...prevData, location: ''}
        })
    }

    const handleDataChange = (event)=> {
        setBookingData((prevData)=>{
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleFormSubmit = (event)=> {
        event.preventDefault();
        if(bookingData.pickup === ''){
            setPickupError(true)
        }
        else if(bookingData.location === ''){
            setLocationError(true)
        }else {
            console.log(bookingData)
            setPickupError(false);
            setLocationError(false);
            setBookingData({
                pickup: '',
                location: ''
            })
        }

        if(bookingData.pickup.length > 0) {
            setPickupError(false)
        }else if(bookingData.location.length > 0) {
            setLocationError(false)
        }
    }

    

    return (
        <section className='landing-page'>
            <div className='landing-page__image-container'>
                <img src='../images/landing-page-image.svg' alt='Moving Car' className='' />
            </div>

            <div className='text-container_form'>
                <div className='landing-page__text-container'>
                    <p className='small-text'>Need a ride?</p>
                    <p className='big-text'>Book with <span className='yellow-text'><i>my</i>Ride</span> now!</p>
                </div>
                <form onSubmit={handleFormSubmit} className='landing-page__form'>
                    <h2>Find a ride now</h2>

                    <div>
                        <div className='input-container location-input'>
                            <label>Your pickup</label>
                            <input 
                                type='text'
                                name='pickup'
                                value={bookingData.pickup}
                                onChange={handleDataChange}
                            />
                            <FaTimes onClick={clearPickupInfo} className='cancel-icon' />
                        </div>
                        {
                            pickupError &&
                            <div className='landing-page__error-message'><FaExclamationCircle /> This field is required</div>
                        }
                    </div>

                    <div>
                        <div className='input-container destination-input'>
                            <label>Your Location</label>
                            <input 
                                type='text'
                                name='location'
                                value={bookingData.location} 
                                onChange={handleDataChange}
                            />
                            <FaTimes onClick={clearLocationInfo} className='cancel-icon' />
                        </div>
                        {
                            locationError &&
                            <div className='landing-page__error-message'><FaExclamationCircle /> This field is required</div>
                        }
                    </div>

                    <div className='form-button-container'>
                        <button type='submit'><FaSearch /> Find Driver</button>
                        <p>More Options</p>
                    </div>
                </form>
            </div>
        </section>
    )
}