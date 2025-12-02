import { useState, useEffect } from 'react'

function BirthdayCard({ isOpen, onClose }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`boxMail ${isOpen ? 'active' : ''}`}>
      <i className="fa-solid fa-xmark" onClick={onClose}></i>
      <div 
        className="boxMail-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="card1">
          <div className="userImg">
            <img src="/images/unnamed.png" alt="" />
          </div>
          <h4 className="username">
            To: Saho 💖<span className="underline"></span>
          </h4>
          <h3>Happy Birthday</h3>
          <div className="imageCute">
            {/* <img src="cute1.png" alt="" /> */}
          </div>
        </div>
        <div className="card2">
          <div className="card2-content">
            <h3 style={{ fontSize: '2rem', marginTop: '1rem', marginBottom: '1.5rem' }}>To Saho!</h3>
            <h2 style={{ textAlign: 'left', textIndent: '0' }}>
              Happy Birthday! 🎂 You are such a special person and I hope you have the most amazing day celebrating! I wish you all the best for the future and for your time back in Japan 🇯🇵 I truly appreciate all the time we've been able to spend together so far - it's been so much fun! I really hope we can meet again soon after our time in Australia. Until then, enjoy your special day! 🎉💖
              <br /><br />
              Much love, Simon 💕
            </h2>
            <div className="imageCute2">
              {/* <img src="cute2.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BirthdayCard

