import { FaExclamationCircle } from 'react-icons/fa';

export const ReferralCode = ({referralCode, handleInputChange, handleInputBlur, handleInputFocus, referralCodeError})=> {
    return (
        <>
            <div className='driver-form_input '>
                <input 
                    type='text'
                    name='referralCode'
                    value={referralCode}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    placeholder='Referral Code'
                    className='form-input referral-input' 
                />
                {
                    referralCodeError &&
                    <div className='error-message'><FaExclamationCircle /> Invalid code</div>
                }
            </div>
        </>
    )
}