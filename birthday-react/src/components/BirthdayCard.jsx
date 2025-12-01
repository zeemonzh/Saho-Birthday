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
            <h3>To Saho!</h3>
            <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam distinctio veritatis tempore pariatur omnis modi provident dolores, quibusdam officia nulla inventore. Eum aliquid repellendus officiis numquam. Odio, possimus non.
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

