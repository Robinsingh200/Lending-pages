import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';
import './comunityCard.css'
export const ComunityCard = () => {

    const arr = ['Tom Hardy', 'Henry Kalvien', 'Williomson classic']
    return (
        <>
            <section className='coumunity_card'>
                <div className='Top_head'>
                    <h1>A little ❤️ from our community</h1>
                    <span className='arrow_lr'>
                        <div >
                            < FaArrowCircleLeft />

                        </div>
                        <div>
                              <FaArrowCircleRight/>
                        </div>
                    </span>
                </div>

                <main className='main_comunity'>
                    {arr.map((post, ind) => {
                        return <div className='Card_comunity'>
                            <p>This platform provides everything developers need to improve their skills. The community is great, and the challenges keep me motivated, instill accountability through regular submissions, and allow me to build a professional portfolio by showcasing diverse projects.</p>
                            <div className='profile_com'>
                            <img  src="./public/human.webp" alt="photos"/>
                            <li key={ind}>{post}</li>
                            </div>
                           
                        </div>

                    })}
                </main>


            </section>
        </>
    )
}