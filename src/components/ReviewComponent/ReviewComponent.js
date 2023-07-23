import './ReviewComponent.css';

const ReviewComponent = ()=> {
    const reviews = [
        {
            img: '../images/card-image-1.svg',
            title: 'Basic',
            description: 'The best balance of price and comfort. You will not go wrong with our basic rides.'
        },
        {
            img: '../images/card-image-2.svg',
            title: 'Comfort',
            description: 'If comfort is your priority, this is the ride for you. It’s spacious and packed with features.'
        },
        {
            img: '../images/card-image-3.svg',
            title: 'Business',
            description: 'Do you want to travel around the city in style? Make sure to select or business class rides.'
        },
        {
            img: '../images/card-image-4.svg',
            title: 'Deluxe',
            description: 'The best ride for luxury and comfort. No compromises here. You’ll surely get what you pay for.'
        },
    ]

    return (
        <section className='review-component'>
            <div className='heading-text-container'>
                <h2>Why should you ride with us?</h2>
                <p>Best in class rides</p>
            </div>

            <div className='card-container'>
                {
                    reviews.map((review, index)=> {
                        return (
                            <div key={index} className='card'>
                                <div className='card__image-container'>
                                    <img src={review.img} alt='Card Image' />
                                </div>

                                <div className='card__text-container'>
                                    <h2>{review.title}</h2>
                                    <h3>{review.description}</h3>
                                    <p>Learn More</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ReviewComponent;