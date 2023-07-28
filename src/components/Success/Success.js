import './Success.css';

export const Success = ({showSuccess})=> {
    return (
        <>
            <section style={{display: showSuccess ? 'block' : 'none'}} className='success-page'>
                <div className='success-image-container'>
                    <img src='../images/success-image.svg' alt='Success Image' className='' />
                </div>

                <h2>Welcome, Driver.</h2>

            </section>
        </>
    )
}