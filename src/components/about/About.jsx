import React from 'react'
import './about.css'
import me from '../../img/me.jpg'
import Award from '../../img/award.png'
const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src={me} alt="board" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem fugiat quo exercitationem rem quasi fugit numquam! Laboriosam, sed. Ratione nobis dolorum quo modi inventore temporibus voluptate quas quibusdam molestias.
        </p>
        <p className="a-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nihil, nesciunt voluptas nobis, molestias quis tempora non incidunt placeat excepturi suscipit sunt esse molestiae est in necessitatibus blanditiis aliquid! Perspiciatis.
        </p>
        <div className="a-award">
            <img src={Award} alt="" className="a-award-img" />
            <div className="a-award-texts">
                <h4 className="a-award-title">Internatiol Design</h4>
                <p className="a-award-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium corrupti sunt inventore minus, sapiente accusamus, autem nemo, non temporibus incidunt ad! Natus doloribus aut quos et dicta aspernatur eveniet?
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
