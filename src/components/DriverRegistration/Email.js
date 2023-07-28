import { FaExclamationCircle } from 'react-icons/fa';

export const Email = ({email, handleInputChange, emailError})=> {
    return (
        <>
            <div className='driver-form_input '>
                <input 
                    type='email'
                    name='lastName'
                    value={email}
                    onChange={handleInputChange}
                    placeholder='Last Name'
                    className='form-input lastName-input' 
                />
                {
                    emailError &&
                    <div className='error-message'><FaExclamationCircle /> Invalid Last Name</div>
                }
            </div>
        </>
    )
}