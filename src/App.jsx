import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Herder from './components/Header'
import ReviewCard from './components/Cards/ReviewsCard'
import Weblinks from './components/Website Links/Web_card.jsx'
import GithubCard from './components/Github Card/GighubCard.jsx'
import { ComunityCard } from './components/comunity Card/ComunityCard.jsx'
import HowIT from './components/how it Works/howItWork.jsx'
import { DevloperChoose } from './components/DevloperChoose/Devloper_Choose.jsx'
import { FastTrack } from './components/Fast-track/Fast-track.jsx'
import { Pay_method } from './components/Pay method/Pay_method.jsx'
import { CompmiesHire } from './components/For companies/companies_hire.jsx'
import { useRef } from 'react'


function App() {

  const FoorterUseRef = useRef('')  ///     Usae Ref for scrolling 
  const BottomToTop= useRef('')

  return (
    <>

      <Navbar footerRef={FoorterUseRef} 
       topp={BottomToTop}/>
      <Herder />
      <ReviewCard />
      <Weblinks />
      <HowIT />
      <DevloperChoose />
      <FastTrack />
      <Pay_method />
      <CompmiesHire />
      <ComunityCard />
      <GithubCard />
      <Footer ref={FoorterUseRef} 
       bottoms={BottomToTop} />
    </>

  )
}

export default App
