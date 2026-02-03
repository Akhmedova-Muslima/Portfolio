import React, { useEffect, useState } from 'react'
import bg from '../assets/img/bg.svg'


export default function Projects() {


  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/Akhmedova-Muslima/repos')
      .then(res => res.json())
      .then(data => {setRepos(data)})
      .catch(err => console.log(err))
  }, [])



  return (
    <div className='projects container'>

      <h1 className="projects_title open">My projects on GitHub</h1>
      <img src={bg} alt="" className='projects_bg' />

      <div className="projects_box">

        {repos.map(repo => (
          <a
            key={repo.id}
            href={repo.html_url}
            className="projects_box_self"
          >
            <img
              src={`https://raw.githubusercontent.com/Akhmedova-Muslima/${repo.name}/master/preview.png`}
              className="projects_box_self_img"
              onError={(e) => (e.target.style.display = 'none')}
            />
            <p className="projects_box_self_title">Project name: {repo.name}</p>
            <p className="projects_box_self_about">{repo.description || 'No description'}</p>
          </a>
        ))}


      </div>

    </div>
  )
}
