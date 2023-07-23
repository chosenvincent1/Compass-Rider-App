import './LandingPage.css';
import { FaTimes, FaSearch } from 'react-icons/fa';

export const LandingPage = ()=> {
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
                <form className='landing-page__form'>
                    <h2>Find a ride now</h2>

                    <div className='input-container location-input'>
                        <label>Your pickup</label>
                        <input type='text' />
                        <FaTimes className='cancel-icon' />
                    </div>

                    <div className='input-container destination-input'>
                        <label>Your Location</label>
                        <input type='text' />
                        <FaTimes className='cancel-icon' />
                    </div>

                    <div className='form-button-container'>
                        <button> <FaSearch /> Find Driver</button>
                        <p>More Options</p>
                    </div>
                </form>
            </div>
        </section>
    )
}