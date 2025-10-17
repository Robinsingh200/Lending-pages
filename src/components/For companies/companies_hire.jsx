import './ForCompnies.css'

export const CompmiesHire = () => {
    return (

        <section className='dev_parents'>

            <div className='why_dev'>
                <h1>For companies</h1>
            </div>

            <main className="Devloper_home">

                <div className='photos_dev_1'>
                    <span><h1>Train junior developers with real projects</h1>
                        <p>Skip theoretical tutorials. Give your junior developers 100+ real-world challenges that build practical skills faster than traditional training programs.</p>
                        <div className='btn_for'> 
                        <button className='btn_devl'>EXPLORE TEAM</button>

                        </div>
                    </span>


                    <div>
                        <img src="./public/company-1.webp" alt="" width={600} height={460} />
                    </div>
                </div>


                <div className='photos_dev_2'>
                    <img src="./public/company-2.webp" alt="" width={600} height={460} />

                    <span><h1>Discover junior talent through skills, not resumes</h1>
                        <p>See real code and live projects upfront, then connect directly with developers who've demonstrated the skills and passion you need.rs tell us these portfolio pieces consistently "wow" them in interviews by demonstrating real-world capabilities.</p>
                         <div className='btn_div'>

                        <button className='btn_devl'>EXPLORE HIRE</button>
                         </div>

                    </span>
                </div>


            </main>

        </section>
    )
}

