import './Weblinks.css'
import { FaStackOverflow } from 'react-icons/fa';
const Weblinks = () => {
    const arr = ['Css Ticks', 'Stack overflow ', 'GeeksforGeeks']

    return (
        <section className='weblinks_par'>
            <div className='weblinks_h1'>
                <h2>As featured on...</h2>
            </div>

            <ul className="liks_web">
                {arr.map((item, index) => (
                    <li className="weblinks"
                        key={index}>
                        <div className='text_item'><FaStackOverflow className='stack'/>{item}</div>

                    </li>
                ))}


            </ul>


        </section>
    )
}
export default Weblinks