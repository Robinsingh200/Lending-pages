import './HowIT.css'

const HowIT = () => {
    return (
        <section className='how_it_p'>
            <p className='work_h1'>How It Works</p>

            <main className="HowIT">


            <div className='box_parents'>

                <div className='box_1'>
                    <h2><span></span>Choose your challenge</h2>
                    <p>Pick from 100+ professionally designed projects across five skill levels—from HTML/CSS basics to full-stack applications.</p>
                </div>


                  <div className='box_1'>
                      <h2>Code the design</h2>
                </div>

                  <div className='box_1'>
                      <h2>Submit and improve</h2>

                </div>

                   <div className='box_4'>
                      <h2>Help others grow</h2>

                </div>
            </div>

            <div>

            </div>

               <div className='Images_work'>
                   <img src="./public/home-how-it-works-4.webp" alt=""  width={600} height={460}/>
               </div>

            </main>

        </section>
    )
}

export default HowIT;