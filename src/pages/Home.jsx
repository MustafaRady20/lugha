import React from 'react'
import bannerLogo from "../Images/lo8a-png-white.png"
import bannerPoem from "../Images/lo8a-poem-white.png"
import "./home.css"
import Search from '../components/Search/Search'
import LangHistory from '../components/LangHistory/LangHistory'

export default function Home() {
  return (
    <>
      <div className='home'>
        <div className="overlay" />

        <div className="container">
          <div className="homeLogo">
            <img src={bannerPoem} alt="bannerPome" className='pome' />
            <img src={bannerLogo} alt={bannerLogo} />
          </div>
          <div className="homeSearch">
            <Search />
          </div>
        </div>

      </div>
      <LangHistory />

    </>
  )
}
