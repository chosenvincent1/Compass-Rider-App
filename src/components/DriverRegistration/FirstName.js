import { FaExclamationCircle } from 'react-icons/fa';

export const FirstName = ({firstName, handleInputChange, firstNameError})=> {
    return (
        <>
            <div className='driver-form_input'>
                <input 
                    type='text' 
                    name='firstName'
                    value={firstName}
                    onChange={handleInputChange}
                    placeholder='First Name'
                    className='form-input firstName-input' 
                />
                {
                    firstNameError &&
                    <div className='error-message'><FaExclamationCircle /> Invalid name</div>
                }
            </div>
        </>
    )
}