import './Header.css'
import { FaGithub } from 'react-icons/fa';
const Herder = () => {
    return (

        <main className="hearder_main">

            <div>
                <p>For LEARNERS</p>
            </div>


            <div className="flex_header">

                <p><h1>Front-end and full-stack coding challenges that build real skills and help get you hired</h1>
                    <span>Frontend Mentor provides professional design-to-code challenges that mirror real-world development work. Join <span className='number_1'>10,95,833</span> developers building portfolio projects that impress employers.

                        <div className="btn-b">
                            <button
                                className='Btn_browser'> START BUILDING FREE < FaGithub className='githublogo' /></button>

                            <button className='Btn_browser_2'>BROWSER CHALLENGE</button>

                        </div>

                    </span>
                </p>

                <div>
                    <img src="./public/fist-page.webp" alt="" width={540} height={579} />

                </div>
            </div>




            <section className="feedback-banner">
                
                <div className="feedback-text">
                    <h2>Get AI-powered feedback on every solution submission</h2>
                    <p>
                        Join thousands of developers getting personalized insights with every submission
                        to level up faster.
                    </p>
                </div>

                <button className="learn-btn">LEARN ABOUT PRO</button>
            </section>



        </main>
    )
}

export default Herder