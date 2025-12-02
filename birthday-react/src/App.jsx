import { useState, useEffect, useRef } from 'react'
import './App.css'
import BirthdayCard from './components/BirthdayCard'

function App() {
  const [showCard, setShowCard] = useState(false)
  const [dateText, setDateText] = useState('')
  const [showDateStars, setShowDateStars] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef(null)

  const datetxt = "3 December"

  useEffect(() => {
    // Animate the date text after 6 seconds
    let interval
    const timeout = setTimeout(() => {
      let currentIndex = 0
      interval = setInterval(() => {
        currentIndex++
        if (currentIndex > datetxt.length) {
          setShowDateStars(true)
          clearInterval(interval)
        } else {
          setDateText(datetxt.substring(0, currentIndex))
        }
      }, 80)
    }, 6000)

    // Auto-play music on load
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true)
        setHasInteracted(true)
      }).catch((error) => {
        console.log('Auto-play prevented by browser. Will play on first interaction:', error)
      })
    }

    return () => {
      clearTimeout(timeout)
      if (interval) clearInterval(interval)
    }
  }, [])

  const handleOpenCard = () => {
    setShowCard(true)
  }

  const handleCloseCard = () => {
    setShowCard(false)
  }

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleFirstInteraction = () => {
    if (!hasInteracted && audioRef.current && !isPlaying) {
      setHasInteracted(true)
      audioRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch(() => {})
    }
  }

  return (
    <div id="wrapper" onClick={handleFirstInteraction}>
      <div className="flag__birthday">
        <img src="/images/1.png" alt="" width="350" className="flag__left" />
        <img src="/images/1.png" alt="" width="350" className="flag__right" />
      </div>

      <div className="content">
        <div className="left">
          <div className="title">
            <h1 className="happy">
              <span style={{ '--t': '2.5s' }}>H</span>
              <span style={{ '--t': '2.7s' }}>a</span>
              <span style={{ '--t': '2.9s' }}>p</span>
              <span style={{ '--t': '3.1s' }}>p</span>
              <span style={{ '--t': '3.3s' }}>y</span>
            </h1>
            <h1 className="birthday">
              <span style={{ '--t': '3.5s' }}>B</span>
              <span style={{ '--t': '3.7s' }}>i</span>
              <span style={{ '--t': '3.9s' }}>r</span>
              <span style={{ '--t': '4.1s' }}>t</span>
              <span style={{ '--t': '4.3s' }}>h</span>
              <span style={{ '--t': '4.5s' }}>d</span>
              <span style={{ '--t': '4.7s' }}>a</span>
              <span style={{ '--t': '4.9s' }}>y</span>
            </h1>
            <div className="hat">
              <img src="/images/hat.png" alt="" width="130" />
            </div>
          </div>

          <div className="date__of__birth">
            {showDateStars && <i className="fa-solid fa-star"></i>}
            <span>{dateText}</span>
            {showDateStars && <i className="fa-solid fa-star"></i>}
          </div>

          <div className="btn">
            <button id="btn__letter" onClick={handleOpenCard}>
              <div className="mail">
                Click Here Saho
                <i className="fa-regular fa-envelope"></i>
              </div>
            </button>
          </div>
        </div>

        <div className="right">
          <div className="box__account">
            <div className="image">
              <img src="/images/unnamed.png" alt="" />
            </div>
            <div className="name">
              <i className="fa-solid fa-heart"></i>
              <span>Dear Saho</span>
              <i className="fa-solid fa-heart"></i>
            </div>
            <div className="balloon_one">
              <img width="100px" src="/images/balloon1.png" alt="" />
            </div>
            <div className="balloon_two">
              <img width="100px" src="/images/balloon2.png" alt="" />
            </div>
          </div>

          <div className="cricle" onClick={toggleMusic} style={{ cursor: 'pointer' }}>
            <div className="text__cricle">
              {['h', 'a', 'p', 'p', 'y', '-', 'b', 'i', 'r', 't', 'h', 'd', 'a', 'y', '-'].map((char, index) => (
                <span key={index} style={{ '--i': index + 1 }}>{char}</span>
              ))}
            </div>
            <i className="fa-solid fa-heart"></i>
          </div>
        </div>
      </div>

      {/* Decorative stars */}
      <div className="decorate_star star1" style={{ '--t': '9.3s' }}></div>
      <div className="decorate_star star2" style={{ '--t': '9.4s' }}></div>
      <div className="decorate_star star3" style={{ '--t': '9.5s' }}></div>
      <div className="decorate_star star4" style={{ '--t': '9.6s' }}></div>
      <div className="decorate_star star5" style={{ '--t': '9.7s' }}></div>

      {/* Decorative flowers */}
      <div className="decorate_flower--one" style={{ '--t': '9.3s' }}>
        <img width="20" src="/images/decorate_flower.png" alt="" />
      </div>
      <div className="decorate_flower--two" style={{ '--t': '9.5s' }}>
        <img width="20" src="/images/decorate_flower.png" alt="" />
      </div>
      <div className="decorate_flower--three" style={{ '--t': '9.7s' }}>
        <img width="20" src="/images/decorate_flower.png" alt="" />
      </div>
      <div className="decorate_bottom">
        <img src="/images/decorate.png" alt="" width="100" />
      </div>

      <div className="smiley__icon">
        <img src="/images/smiley_icon.png" alt="" width="100" />
      </div>

      {/* Birthday Card Modal */}
      <BirthdayCard isOpen={showCard} onClose={handleCloseCard} />

      {/* Background Music */}
      <audio ref={audioRef} loop autoPlay>
        <source src="/music/flawed-mangoes.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default App
