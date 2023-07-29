import { FaExclamationCircle } from 'react-icons/fa';

export const Email = ({email, handleInputChange, emailError})=> {
    return (
        <>
            <div className='driver-form_input '>
                <input 
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleInputChange}
                    placeholder='Email'
                    className='form-input lastName-input' 
                />
                {
                    emailError &&
                    <div className='error-message'><FaExclamationCircle /> Invalid Email</div>
                }
            </div>
        </>
    )
}