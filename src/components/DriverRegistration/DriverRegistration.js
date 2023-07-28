import './DriverRegistration.css';
import { FaExclamationCircle } from 'react-icons/fa';
import { SelectVehicle } from './SelectVehicle';
import { useState } from 'react';
import jsonData from '../../utils/countries.json';


const codeRegex = /^[A-Za-z]{3}-[0-9]{3}$/;

const DriverRegistration = ()=> {
    const [driverData, setDriverData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        city: '',
        referralCode: '',
        selectedCar: ''
    })
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [referralCodeError, setReferralCodeError] = useState(false)

    const countries = Object.keys(jsonData);
    const cities = driverData.country ? jsonData[driverData.country] : [];

    const handleInputChange = (event)=> {
        const {name, value} = event.target
        setDriverData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })

        const regex = /^[A-Za-z]+$/;
        const emailRegex = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}$/;

        // Check FirstName and LastName format
        if(name === 'firstName') {
            if(!regex.test(driverData.firstName)){
                setFirstNameError(true)
            } else {
                setFirstNameError(false);
            }
        }
        if(name === 'lastName') {
            if(!regex.test(driverData.lastName)) {
                setLastNameError(true)
            } else {
                setLastNameError(false);
            }
        }

        // Check Email Format
        if(!emailRegex.test(driverData.email)){
            setEmailError(true)
        } else {
            setEmailError(false);
        }
    }

    const handleSelectCountryChange = (event)=> {
        setDriverData(prevData=> {
            return {
                ...prevData,
                country: event.target.value
            }
        })  
    }
    const handleSelectCityChange = (event)=> {
        setDriverData(prevData=> {
            return {
                ...prevData,
                city: event.target.value
            }
        })  
    }

    const handleRadioChange = (event) => {
        setDriverData({ ...driverData, selectedCar: event.target.value });
    };

    console.log(cities)
    // console.log(driverData)

    return (
        <section className='driver-registration'>
            <div className='image_text-container'>
                <img src='../images/driver-car-image.svg' alt='' />
                <div className='text-container'>
                    <h2>Drive with myRide</h2>
                    <p>Register as a driver using the form below. Our team will assess and get back to you within 48 hours.</p>
                </div>
            </div>

            <form className='driver-form'>
                <div className='firstName_lastName_container'>
                    <div className='driver-form_input'>
                        <input 
                            type='text' 
                            name='firstName'
                            value={driverData.firstName}
                            onChange={handleInputChange}
                            placeholder='First Name'
                            className='form-input firstName-input' 
                        />
                        {
                            firstNameError &&
                            <div className='error-message'><FaExclamationCircle /> Invalid name</div>
                        }
                    </div>

                    <div className='driver-form_input '>
                        <input 
                            type='text'
                            name='lastName'
                            value={driverData.lastName}
                            onChange={handleInputChange}
                            placeholder='Last Name'
                            className='form-input lastName-input' 
                        />
                        {
                            lastNameError &&
                            <div className='error-message'><FaExclamationCircle /> Invalid Last Name</div>
                        }
                    </div>
                </div>

                <div className='driver-form_input '>
                    <input 
                        type='email'
                        name='email'
                        value={driverData.email} 
                        onChange={handleInputChange}
                        placeholder='Email Address'
                        className='form-input email-input' 
                    />
                    {
                        emailError &&
                        <div className='error-message'><FaExclamationCircle /> Invalid email</div>
                    }
                </div>

                <div className='driver-form_input '>
                    <select 
                        name='country'
                        value={driverData.country}
                        onChange={handleSelectCountryChange} 
                        className='select-country'
                    >
                        {countries.map((country, index)=> {
                            return (
                                <option key={index} value={country}>{country}</option>
                            )
                        })} 
                    </select>
                    <div className='error-message'><FaExclamationCircle /> Invalid country</div>
                </div>

                <div className='driver-form_input '>
                    <select
                        name='city'
                        value={driverData.city}
                        onChange={handleSelectCityChange}
                        className='select-city'
                    >
                        {cities.map((city, index)=> {
                            return (
                                <option key={index} value={city}>{city}</option>
                            )
                        })}
                    </select>
                    <div className='error-message'><FaExclamationCircle /> Invalid city</div>
                </div>

                <div className='driver-form_input '>
                    <input 
                        type='text'
                        name='referralCode'
                        value={driverData.referralCode}
                        onChange={handleInputChange}
                        onBlur={()=>{
                            // const codeRegex = /^[A-Za-z]{3}-[0-9]{3}$/;
                            if(!codeRegex.test(driverData.referralCode)){
                            setReferralCodeError(true)
                            } else {
                            setReferralCodeError(false);
                        }}}
                        onFocus={()=> {
                            setReferralCodeError(false)
                        }}
                        placeholder='Referral Code'
                        className='form-input referral-input' 
                    />
                    {
                        referralCodeError &&
                        <div className='error-message'><FaExclamationCircle /> Invalid code</div>
                    }
                </div>

                <div className='personal-car'>
                    <p>I drive my own car</p>
                </div>
                
                <SelectVehicle checked={driverData.selectedCar}  handleRadioChange={handleRadioChange}  />

                <button className='submit-button'>Submit</button>
            </form>
        </section>
    )
}

export default DriverRegistration;