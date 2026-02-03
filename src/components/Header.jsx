import React from 'react'
import me from '../assets/img/my.jpg'
import bg from '../assets/img/bg.svg'


export default function Header() {
  return (
    <div className='header'>
        <h2 className='open'>Hello, I'm Muslima</h2>

        <img src={me} alt="" className="header_img" />
        <img src={bg} alt="" className='header_bg' />

        <h1 className="header_title">Beginner Frontend Developer</h1>

        <p className="header_text">Passionate frontend developer, building modern and user-friendly web interfaces</p>
        <p className="header_second_text">Bringing creative designs to life with modern web technologies.</p>

    </div>
  )
}
