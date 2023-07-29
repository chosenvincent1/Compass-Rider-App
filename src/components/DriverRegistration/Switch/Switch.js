import './Switch.css'
export const Switch = ({checked, handleSwitchChange})=> {
    return (
        <div>
            <label className='switch'>
                <input 
                    type='checkbox' 
                    className='checkbox-input'
                    checked={checked}
                    onChange={handleSwitchChange}
                />
                <span className='slider'></span>
            </label>
        </div>
    )
}