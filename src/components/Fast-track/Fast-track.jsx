import './FastTrack.css'
import { BiMessage, BiShoppingBag } from 'react-icons/bi';
import { HiCodeBracket } from 'react-icons/hi2';


export const FastTrack = () => {
    return (
        <section className='fastTrack'>
            <div className='fast_div'>
                <h1 className='fast_h1'>Fast-track your developer career with<span>PRO</span></h1>

                <p>Get AI-powered feedback on every solution, build portfolio-worthy projects, and master professional workflows with complete Figma files—everything you need to level up faster.</p>
            </div>


            <nav className='fast_box'>
                <div className='Box'>
                    <div className='inside_s'>
                         <nav className='font_size'>
                        <BiMessage />
                        </nav>
                    </div>
                    <h1>Level up faster with AI-powered feedback</h1>
                    <p>Our AI-enhanced reports spot up to 3x more improvement opportunities on every submission, giving you personalized insights that help you level up faster.</p>
                </div>

                <div className='Box'>
                    <div className='inside_s'>
                        <nav className='font_size'>
                        <HiCodeBracket />
                        </nav>
                    </div>
                    <h1>Level up faster with AI-powered feedback</h1>
                    <p>Our AI-enhanced reports spot up to 3x more improvement opportunities on every submission, giving you personalized insights that help you level up faster.</p>

                </div>

                <div className='Box'>
                    
                    <div className='inside_s'>
                         <nav className='font_size'>
                        <BiShoppingBag />
                        </nav>
                    </div>
                    <h1>Level up faster with AI-powered feedback</h1>
                    <p>Our AI-enhanced reports spot up to 3x more improvement opportunities on every submission, giving you personalized insights that help you level up faster.</p>
                </div>


            </nav>

        </section>
    )
}

