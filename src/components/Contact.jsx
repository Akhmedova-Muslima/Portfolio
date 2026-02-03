import React from 'react'
import bg from '../assets/img/bg.svg'
import me from '../assets/img/my.jpg'
import figma from '../assets/img/figma.svg'
import linked from '../assets/img/linkedin.svg'
import git from '../assets/img/github.svg'

export default function Contact() {
  return (
    <div className='contact'>

      <h2 className="open">Contact</h2>
      <img src={bg} alt="" className='contact_bg' />

      <div className="contact_box">

        <div className="contact_box_text">
          <div className="contact_box_text_top">
            <img src={me} alt="" className="header_img" />
            <p className="contact_box_text_top_text">Available for work</p>
          </div>

          <div className="contact_box_text_down">
            <h4 className='contact_box_text_down_title'>
            Say hi👋 or drop a message 💬
            </h4>
            <p className='contact_box_text_down_text'>
              As a beginner frontend developer, I'm constantly learning and experimenting with new tools.
              I'd love to connect with other developers or teams to grow and collaborate ✨
            </p>
          </div>
        </div>

        <div className="contact_box_icons">

          <div className="contact_box_icons_row">
            <a href="https://figma.com" >
              <img src={figma} alt="Figma" className="contact_box_icons_img" />
            </a>
            <a href="https://www.linkedin.com/in/muslima-akhmedova/" >
              <img src={linked} alt="LinkedIn" className="contact_box_icons_img" />
            </a>
            <a href="https://github.com/Akhmedova-Muslima" >
              <img src={git} alt="GitHub" className="contact_box_icons_img" />
            </a>
          </div>

          <button className="contact_box_icons_btn">
          <a href="https://www.linkedin.com/in/muslima-akhmedova/" className="contact_box_icons_btn">
            Let's create magic together ✨
          </a>

          </button>

        </div>

      </div>

    </div>
  )
}
