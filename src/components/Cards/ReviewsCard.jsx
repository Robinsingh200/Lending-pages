import './ReviewCards.css'

const ReviewCard = () => {
    return (
        <>
            <main className='ReviewName'>

                <section className='card_sec'>
                    <div >
                        <p>"I highly recommend Frontend Mentor. Skip the search for project ideas and dive into ready-made challenges that help you level up as a developer."</p>
                    </div>

                    <span className='profile'>

                        <img className='rounded' src="./public/human.webp" alt="" width={50} height={40} />
                        <h3>Kevin Powell</h3>
                    </span>

                    <p className='p_3'>Web Devlpoper & You Tuber </p>
                </section>

                <section className='card_sec'>
                    <div>
                        <p>"Frontend Mentor is a win-win. You can sharpen your skills building websites and add finished projects to your portfolio to help land a job!"</p>
                    </div>

                    <span className='profile'>

                        <img className='rounded' src="./public/human.webp" alt="" width={50} height={40} />
                        <h3>Kelvin petrson</h3>
                    </span>
                    <p className='p_3'>Web Devlpoper & You Tuber </p>

                </section>

            </main>

        </>
    )
}

export default ReviewCard 