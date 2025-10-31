import './Devloper.css'

export const DevloperChoose = () => {
    return (

        <section className='dev_parents'>

            <div className='why_dev'>
                <h1>Why developers choose Frontend Mentor</h1>
            </div>

            <main className="Devloper_home">

                <div className='photos_dev_1'>
                    <span><h1>Move beyond passive learning</h1>
                        <p>Stop watching and start creating. Build professional-quality projects that develop genuine coding skills through hands-on practice.</p></span>

                    <div>
                        <img src="./public/home-why-1.webp" alt="" width={600} height={460}/>
                    </div>
                </div>


                <div className='photos_dev_2'>
                    <img src="./public/home-why-2.webp" alt="" width={600} height={460} />

                    <span><h1>Create a portfolio that gets you hired</h1>
                        <p>Build impressive projects with professional designs. Recruiters tell us these portfolio pieces consistently "wow" them in interviews by demonstrating real-world capabilities.</p></span>
                </div>

                <div className='photos_dev_3'>
                    <span><h1>Master AI-powered development workflows</h1>
                        <p>Practice with AI tools that 76% of developers use daily. Learn to work effectively with Cursor, GitHub Copilot, ChatGPT, and other assistants while maintaining code quality and problem-solving skills..</p></span>

                    <img src="./public/home-why-3.webp" alt="" width={600} height={460} />
                </div>


                <div className='photos_dev_4'>


                    <img src="./public/home-why-4.webp" alt="" width={600} height={460} />

                    <span>
                        <h1>Join a supportive developer community</h1>
                        <p>Connect with peers for code reviews, career advice, and friendship. Beat imposter syndrome alongside developers who understand your journey, guided by mentors who've walked this path.</p></span>
                </div>

            </main>

        </section>
    )
}

