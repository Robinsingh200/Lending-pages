import { FaGithub } from 'react-icons/fa';
import './GitCard.css'

const GithubCard = ()=>{
     return(
          <>
           <section className='Git_card'>
                   <div> 
                     <h1>Join 10,95,564 people building portfolio-worthy projects</h1>
                   </div>

                   <div>
                       <p>Our highly supportive, positive community is here to help you improve your skills. We all try to help each other out wherever possible. We’d love to welcome you to our community!</p>
                   </div>

                   <button>LOG IN WITH GITHUB <FaGithub/> </button>
           </section>
          </>
     )
}

export default GithubCard;