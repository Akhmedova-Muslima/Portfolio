import React from 'react'
import bg from '../assets/img/bg.svg'
import jdu from  '../assets/img/JDU logo.png'
import tsushin from  '../assets/img/tsushin.png'


export default function Study() {
  return (
    <div className='study'>

        <h1 className="open">Education</h1>
        <p className='study_text'>Learning is a big part of who I am — here you can explore my studies, courses, and achievements.</p>

        <img src={bg} alt="" className='study_bg' />

        <div className="study_universitys">

            <div className="study_universitys_box">
                <img src={jdu} alt="" className='study_universitys_box_img' />
                <h3 className="study_universitys_box_title">Japan Digital University</h3>
                <p className="study_universitys_box_text">Японский цифровой университет — это учебное заведение, 
                    основанное для развития сотрудничества между Узбекистаном и Японией в сфере образования. Здесь 
                    студенты изучают японский язык с опытными преподавателями из Японии и Узбекистана, а также получают 
                    необходимые знания и навыки в быстро развивающейся IT-сфере.
                </p>

                <a href="https://www.jdu.uz/" className="study_universitys_box_bottom">
                    <span className="study_universitys_box_bottom_label">Visit website</span>
                    <span className="study_universitys_box_bottom_arrow">→</span>
                </a>
            </div>

            <div className="study_universitys_box">
                <img src={tsushin} alt="" className='study_universitys_box_img' />
                <h3 className="study_universitys_box_title">東京通信大学</h3>
                <p className="study_universitys_box_text">生成AI、DX人材、福祉の国家資格まで.「IT」「福祉」
                     の2分野を学びやすい学費のオンライン大学で。これからの時代に欠かせない「情報マネジメント」と
                    「人間福祉」の2分野からなる、日本で唯一の通信制大学。今すぐ使える約400の多彩な科目を24時間どこにい
                    ても学べます。
                </p>
                <a href="https://campus.internet.ac.jp/" className="study_universitys_box_bottom">
                    <span className="study_universitys_box_bottom_label">Visit website</span>
                    <span className="study_universitys_box_bottom_arrow">→</span>
                </a>
            </div>

        </div>

        <div className="study_skills">

                <h3 className="study_skills_title">Programming Languages</h3>
                <ul>
                    <li> HTML, CSS, JS </li>
                    <li> React, Typescript </li>
                    <li> Python, Django </li>
                    <li> SQL, OOP, OOD </li>
                    <li> PHP, Laravel </li>
                </ul>

                <h3 className="study_skills_title">Language Skills</h3>
                <ul>
                    <li><strong>Uzbek:</strong> Native</li>
                    <li><strong>Russian:</strong> Advanced</li>
                    <li><strong>English:</strong> Intermediate</li>
                    <li><strong>Japanese:</strong> Advanced, JLPT (N2)</li>
                </ul>

            </div>


    </div>
  )
}
