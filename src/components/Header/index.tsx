import * as Constant from 'constant'
import React, { useEffect, useState } from 'react'

export const PITCH_DECK_V1_URL =
  'https://algobet-docs.s3.ap-southeast-1.amazonaws.com/Algobet-Pitch-Desk-v1.1_compressed.pdf'

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [state, setState] = useState(false)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 700) {
        setScreenWidth(window.innerWidth)
      }
    }
    // window.addEventListener('resize', handleResize)

    const header = document.getElementById('header')
    const backToTop = document.getElementById('back-to-top')
    let sticky: number
    if (header) {
      sticky = header.offsetTop
    }

    function onScroll() {
      if (window.pageYOffset > sticky) {
        if (header && backToTop) {
          header.classList.add('bg-header')
          backToTop.style.display = 'flex'
        }
      } else if (header && backToTop) {
        header.classList.remove('bg-header')
        backToTop.style.display = 'none'
      }
    }
    window.addEventListener('scroll', onScroll)

    if (window.pageYOffset > 0) {
      if (header && backToTop) {
        header.classList.add('bg-header')
        backToTop.style.display = 'flex'
      }
    }
  }, [])
  const handelShow = () => {
    setState(!state)
  }
  // useEffect(() => {
  //   if (!state) return
  //   function handleClick() {
  //     if (mobile.current) {
  //       setState(false)
  //     }
  //   }
  //   window.addEventListener('click', handleClick)
  //   return () => window.removeEventListener('click', handleClick)
  // }, [state])
  return (
    <div id="header" className="header">
      <a href="./" className="header-logo">
        <img className="" src="/images/logo.svg" alt="logo" />
        <img className="logo-text" src="/images/ALGOBET.svg" alt="logo" />
      </a>
      <div className="nav desktop">
        <a href="/#home" className="nav-item">
          Home
        </a>
        <a href="/#what-is-algobet" className="nav-item">
          What is Algobet
        </a>
        <a href="/#features" className="nav-item">
          Features
        </a>
        <a href="/#token" className="nav-item">
          Token
        </a>
        <a href="/#roadmap" className="nav-item">
          Roadmap
        </a>
        <a href="/#partner" className="nav-item">
          Partner
        </a>
        <div className="nav-item">
          <div className="dropdown-nav">
            Docs
            <img className="arrow-down" src="/images/arrow-down.svg" alt="arrow-down" />
            <div className="dropdown-comp">
              <div className="dropdown">
                <div className="dropdown-main">
                  <div className="dd-item">
                    <a target="_blank" href={Constant.DOCS_URL} className="dd-item" rel="noreferrer">
                      white paper
                    </a>
                  </div>
                  <div className="dd-item">
                    <a target="_blank" href={Constant.PITCH_DECK_V1_URL} className="dd-item" rel="noreferrer">
                      PitchDeck
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn btn--close" role="presentation" onClick={() => handelShow()}>
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 10H42" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 24H42" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 38H42" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <ul className={state ? 'mobile active' : 'mobile '}>
        <li>
          <a href="/#home" className="nav-item">
            Home
          </a>
        </li>
        <li>
          <a href="/#what-is-algobet" className="nav-item">
            What is Algobet
          </a>
        </li>
        <li>
          <a href="/#features" className="nav-item">
            Features
          </a>
        </li>
        <li>
          <a href="/#token" className="nav-item">
            Token
          </a>
        </li>
        <li>
          <a href="/#roadmap" className="nav-item">
            Roadmap
          </a>
        </li>

        <li>
          <a href="/#partner" className="nav-item">
            Partner
          </a>
        </li>
      </ul>
    </div>
  )
}
