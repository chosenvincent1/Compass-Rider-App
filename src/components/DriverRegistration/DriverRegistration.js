import './DriverRegistration.css';
import { FaExclamationCircle } from 'react-icons/fa';
import { SelectVehicle } from './SelectVehicle';

const DriverRegistration = ()=> {
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
                            placeholder='First Name'
                            className='form-input firstName-input' 
                        />
                        <div className='error-message'><FaExclamationCircle /> Invalid name</div>
                    </div>

                    <div className='driver-form_input '>
                        <input 
                            type='text' 
                            placeholder='Last Name'
                            className='form-input lastName-input' 
                        />
                        <div className='error-message'><FaExclamationCircle /> Invalid Last Name</div>
                    </div>
                </div>

                <div className='driver-form_input '>
                    <input 
                        type='email' 
                        placeholder='Email Address'
                        className='form-input email-input' 
                    />
                    <div className='error-message'><FaExclamationCircle /> Invalid email</div>
                </div>

                <div className='driver-form_input '>
                    <select className='select-country'>
                        <option>Country</option>
                        <option>Brazil</option>
                        <option>Nigeria</option>
                    </select>
                    <div className='error-message'><FaExclamationCircle /> Invalid country</div>
                </div>

                <div className='driver-form_input '>
                    <select className='select-city'>
                        <option>City</option>
                        <option>Port Harcourt</option>
                        <option>Lagos</option>
                    </select>
                    <div className='error-message'><FaExclamationCircle /> Invalid city</div>
                </div>

                <div className='driver-form_input '>
                    <input 
                        type='number' 
                        placeholder='Referral Code'
                        className='form-input referral-input' 
                    />
                    <div className='error-message'><FaExclamationCircle /> Invalid code</div>
                </div>

                <div className='personal-car'>
                    <p>I drive my own car</p>
                </div>
                
                <SelectVehicle />

                <button className='submit-button'>Submit</button>
            </form>
        </section>
    )
}

export default DriverRegistration;