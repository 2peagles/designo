import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Webdesign.scss'
import '../styles/home.scss'
export const Webdesign = () => {
  return (
    <div id='webdesign'>
        <article className='web_hero'>
            <h1> web design</h1>
            <p> We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
        </article>

          <article className='design_container'>
            <div className='grid_content'>
                <img src='/assets/web-design/desktop/image-express.jpg' alt=' project one express'/>
                <span className='grid-content'>
                      <h2>express </h2>
                      <p> A multi-carrier shipping website for ecommerce businesses</p>
                </span>
            </div>
              <div className='grid_content'>
                  <img src='/assets/web-design/desktop/image-transfer.jpg' alt='' />
                  <span className='grid-content'>
                      <h2>transfer</h2>
                      <p> A multi-carrier shipping website for ecommerce businesses</p>
                  </span>
              </div>
              <div className='grid_content'>
                  <img src='/assets/web-design/desktop/image-photon.jpg' alt='' />
                  <span className='grid-content'>
                      <h2>photon </h2>
                      <p> A multi-carrier shipping website for ecommerce businesses</p>
                  </span>
              </div>
              <div className='grid_content'>
                  <img src='/assets/web-design/desktop/image-builder.jpg' alt='' />
                  <span className='grid-content'>
                      <h2>builder </h2>
                      <p> A multi-carrier shipping website for ecommerce businesses</p>
                  </span>
              </div>
              <div className='grid_content'>
                  <img src='/assets/web-design/desktop/image-blogr.jpg' alt='' />
                  <span className='grid-content'>
                      <h2>blogr</h2>
                      <p> A multi-carrier shipping website for ecommerce businesses</p>
                  </span>
              </div>
              <div className='grid_content'>
                  <img src='/assets/web-design/desktop/image-camp.jpg' alt='' />
                  <span className='grid-content'>
                      <h2>camp </h2>
                      <p> A multi-carrier shipping website for ecommerce businesses</p>
                  </span>
              </div>
          </article>

          <article className='webcard_section'>
              <div  className='webcard appcard'>
                  <h3> app design</h3>
                  <Link to='appdesign'> view projects <span><img src='/assets/shared/desktop/icon-right-arrow.svg' alt=' link arrow' /></span></Link>
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
