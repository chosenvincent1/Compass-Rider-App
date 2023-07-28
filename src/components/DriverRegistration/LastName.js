import { FaExclamationCircle } from 'react-icons/fa';

export const LastName = ({lastName, handleInputChange, lastNameError})=> {
    return (
        <>
            <div className='driver-form_input '>
                <input 
                    type='text'
                    name='lastName'
                    value={lastName}
                    onChange={handleInputChange}
                    placeholder='Last Name'
                    className='form-input lastName-input' 
                />
                {
                    lastNameError &&
                    <div className='error-message'><FaExclamationCircle /> Invalid Last Name</div>
                }
            </div>
        </>
    )
}