import React from 'react'
import insta from '../assets/img/insta.svg'
import wa from '../assets/img/whatsapp.svg'
import tg from '../assets/img/telegram.svg'




export default function Footer() {
  return (
    <div className='footer'>

        <nav className="footer_nav">

          <div className="footer_nav_texts">
            <a href='tel:+998909001977' className="footer_nav_texts_text">Tel: +998909001977</a>
            <a href='mailto:mavis.lancaster04@gmail.com' className="footer_nav_texts_text">Mail: mavis.lancaster04@gmail.com </a>
          </div>

          <div className="footer_nav_icons">
            <a href='https://www.instagram.com/_akhmedova1._/' > <img className='footer_nav_icons_img' src={insta} alt="" /> </a>
            <a href='https://wa.me/998909001977' > <img className='footer_nav_icons_img' src={wa} alt="" /> </a>
            <a href='https://t.me/l220282' > <img className='footer_nav_icons_img' src={tg} alt="" /> </a>
          </div>


        </nav>

    </div>
  )
}
