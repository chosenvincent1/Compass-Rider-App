import './DriverRegistration.css';
import { FaExclamationCircle } from 'react-icons/fa';
import { FirstName } from './FirstName';
import { LastName } from './LastName';
import { Email } from './Email';
import { SelectVehicle } from './SelectVehicle';
import { SelectCountry } from './SelectCountry';
import { SelectCity } from './SelectCity';
import { ReferralCode } from './ReferalCode';
import { Switch } from './Switch/Switch';
import { useState } from 'react';
import { nameRegex, emailRegex, codeRegex } from '../../utils/regex';
import jsonData from '../../utils/countries.json';

const DriverRegistration = ({showSuccess, setShowSuccess})=> {
    const [driverData, setDriverData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        city: '',
        referralCode: '',
        haveOwnCar: false,
        selectedCar: ''
    })
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [countryError, setCountryError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [selectCarError, setSelectCarError] = useState(false);
    const [referralCodeError, setReferralCodeError] = useState(false);

    // Store the jsonData keys in the countries variable.
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

        // Check FirstName and LastName format
        if(name === 'firstName') {
            if(!nameRegex.test(driverData.firstName)){
                setFirstNameError(true)
            } else {
                setFirstNameError(false);
            }
        }
        if(name === 'lastName') {
            if(!nameRegex.test(driverData.lastName)) {
                setLastNameError(true)
            } else {
                setLastNameError(false);
            }
        }

        // Check Email Format
        if(name === 'email'){
            if(!emailRegex.test(driverData.email)){
                setEmailError(true)
            } else {
                setEmailError(false);
            }
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
    const handleSwitchChange = ()=> {
        setDriverData(prevData => {
            return {
                ...prevData,
                haveOwnCar: !prevData.haveOwnCar,
            }
        })
    }
    const handleInputBlur = ()=> {
        if(!codeRegex.test(driverData.referralCode)){
            setReferralCodeError(true)
        } else {
            setReferralCodeError(false);
        }
    }
    const handleInputFocus = ()=> {
        setReferralCodeError(false);
    }

    const handleFormSubmit = (event)=> {
        event.preventDefault();

        if(!driverData.firstName){
            setFirstNameError(true)
        }
        if(!driverData.lastName){
            setLastNameError(true)
        }
        if(!driverData.email){
            setEmailError(true)
        }
        if(!driverData.country) {
            setCountryError(true);
        }else {
            setCountryError(false)
        }
        if(!driverData.city){
            setCityError(true);
        }else {
            setCityError(false);
        }
        if(!driverData.referralCode && !codeRegex.test(driverData.referralCode)){
            setReferralCodeError(true)
        }

        if(
            driverData.selectedCar !== 'Sedan' ||
            driverData.selectedCar !== 'SUV/Van' ||
            driverData.selectedCar !== 'Semi Luxury' ||
            driverData.selectedCar !== 'Luxury Car'
        ) {
            setSelectCarError(true);
        }else {
            setSelectCarError(false);
        }

        if(
            driverData.firstName &&
            driverData.lastName &&
            driverData.email &&
            driverData.country && 
            driverData.city && 
            driverData.referralCode &&
            (driverData.selectedCar === 'Sedan' ||
            driverData.selectedCar === 'SUV/Van' ||
            driverData.selectedCar === 'Semi Luxury' ||
            driverData.selectedCar === 'Luxury Car') 
        ){
            setShowSuccess(true);
        } 
    }

    console.log(driverData)

    return (
        <section style={{display: !showSuccess ? 'block' : 'none'}} className='driver-registration'>
            <div className='image_text-container'>
                <img src='../images/driver-car-image.svg' alt='' />
                <div className='text-container'>
                    <h2>Drive with myRide</h2>
                    <p>Register as a driver using the form below. Our team will assess and get back to you within 48 hours.</p>
                </div>
            </div>

            <form onSubmit={handleFormSubmit} className='driver-form'>
                <div className='firstName_lastName_container'>
                    <FirstName 
                        firstName={driverData.firstName}
                        handleInputChange={handleInputChange}
                        firstNameError={firstNameError}
                    />

                    <LastName 
                        lastName={driverData.lastName}
                        handleInputChange={handleInputChange}
                        lastNameError={lastNameError}
                    />
                </div>

                <Email 
                    email={driverData.email}
                    handleInputChange={handleInputChange}
                    emailError={emailError}
                />

                <SelectCountry 
                    country={driverData.country} 
                    handleSelectCountryChange={handleSelectCountryChange} 
                    countryList={countries} 
                    countryError={countryError}
                />

                <SelectCity
                    city={driverData.city}
                    handleSelectCityChange={handleSelectCityChange}
                    cityList={cities}
                    cityError={cityError}
                />

                <ReferralCode 
                    referralCode={driverData.referralCode}
                    handleInputChange={handleInputChange}
                    handleInputBlur={handleInputBlur}
                    handleInputFocus={handleInputFocus}
                    referralCodeError={referralCodeError}
                />

                <div className='personal-car'>
                    <p>I drive my own car</p>

                    <Switch 
                        checked={driverData.haveOwnCar}
                        handleSwitchChange={handleSwitchChange}
                    />
                    
                    {/* <div>
                        <label className='switch'>
                            <input 
                                type='checkbox' 
                                className='checkbox-input'
                                checked={driverData.haveOwnCar}
                                onChange={handleSwitchChange}
                            />
                            <span className='slider'></span>
                        </label>
                    </div> */}
                </div>
                
                <SelectVehicle 
                    checked={driverData.selectedCar}  
                    handleRadioChange={handleRadioChange} 
                    selectCarError={selectCarError}  
                />

                <button type='submit' className='submit-button'>Submit</button>
            </form>
        </section>
    )
}

export default DriverRegistration;