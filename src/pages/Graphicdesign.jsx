import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Webdesign.scss'
import '../styles/home.scss'
export const Graphicdesign = () => {
  return (
    <div id='graphicdesign'>
          <article className='graphic_hero'>
              <h1> graphic design</h1>
              <p> We deliver eye-catching branding materials that we tailored to meet your business objectives</p>
          </article>
          <article className='graphicdesign_container'>
              <div className='grid_content'>
                  <img src='/assets/graphic-design/desktop/image-change.jpg' alt=' project one express' />
                  <span className='grid-content'>
                      <h2>tim brown</h2>
                      <p> A book cover designed for Tim Brown's new release, 'Change'</p>
                  </span>
              </div>
              <div className='grid_content'>
                  <img src='/assets/graphic-design/desktop/image-boxed-water.jpg' alt=' project one express' />
                  <span className='grid-content'>
                      <h2>boxed water</h2>
                      <p> A simple packing concept made for Boxed Water</p>
                  </span>
              </div>
              <div className='grid_content'>
                  <img src='/assets/graphic-design/desktop/image-science.jpg' alt=' project one express' />
                  <span className='grid-content'>
                      <h2>science !</h2>
                      <p> Aposter made in collaboration with the Federal Art Project</p>
                  </span>
              </div>
          </article>

          <article className='webcard_section'>
              <div className='webcard appcard'>
                  <h3> app design</h3>
                  <Link to='appdesign'> view projects <span><img src='/assets/shared/desktop/icon-right-arrow.svg' alt=' link arrow' /></span></Link>
              </div>
              <div className='webcard webcardone'>
                  <h3> web design</h3>
                  <Link to='/webdesign'>view projects <span><img src='/assets/shared/desktop/icon-right-arrow.svg' alt=' link arrow' /></span></Link>
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
