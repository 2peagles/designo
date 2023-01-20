import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Webdesign.scss'
import '../styles/home.scss'
export const Appdesign = () => {
  return (
    <div id='appdesign'>
          <article className='app_hero'>
              <h1> app design</h1>
              <p> Our mobile designs bring intuitive digital solutions to your customer right at their fingertips.</p>
          </article>
          <article className='appdesign_container'>
              <div className='grid_content'>
                  <img src='/assets/app-design/desktop/image-airfilter.jpg' alt=' project one express' />
                  <span className='grid-content'>
                      <h2>airfilter </h2>
                      <p>Solving the problem of poort indoor ait quality by filtering the air</p>
                  </span>
              </div>
              <div className='grid_content'>
                  <img src='/assets/app-design/desktop/image-eyecam.jpg' alt=' project one express' />
                  <span className='grid-content'>
                      <h2> eyecam </h2>
                      <p> Product that lets you edit your favorite photos and videos at any time</p>
                  </span>
              </div>
              <div className='grid_content'>
                  <img src='/assets/app-design/desktop/image-faceit.jpg' alt=' project one express' />
                  <span className='grid-content'>
                      <h2>facefit </h2>
                      <p> Get to meet your favorite internet superstar with the faceit app</p>
                  </span>
              </div>
              <div className='grid_content'>
                  <img src='/assets/app-design/desktop/image-todo.jpg' alt=' project one express' />
                  <span className='grid-content'>
                      <h2>todo</h2>
                      <p> A todo app that features cloud sync  with flight and dark mode</p>
                  </span>
              </div>
              <div className='grid_content'>
                  <img src='/assets/app-design/desktop/image-loopstudios.jpg' alt=' project one express' />
                  <span className='grid-content'>
                      <h2>loopstudios</h2>
                      <p> A VR experience app made for Loopstudios</p>
                  </span>
              </div>
          </article>
          <article className='webcard_section'>
              <div className='webcard webcardone'>
                  <h3> web design</h3>
                  <Link to='/webdesign'> view projects <span><img src='/assets/shared/desktop/icon-right-arrow.svg' alt=' link arrow' /></span></Link>
              </div>
              <div className='webcard graphiccard'>
                  <h3> graphic design</h3>
                  <Link to='/graphicdesign'>view projects <span><img src='/assets/shared/desktop/icon-right-arrow.svg' alt=' link arrow' /></span></Link>
              </div>
          </article>
          
          <article className='home_contact_section'>
              <div className='home_contact_content'>
                  <h3> Let's talk about your project</h3>
                  <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your
                      business grow.
                  </p>
                  <button className='darkbtn'> get in touch</button>
              </div>
          </article>
    </div>
  )
}
