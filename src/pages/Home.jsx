import React from 'react'
import '../styles/home.scss'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div id='home'>  
       <section className='hero'>
        <div className='home_hero_content'>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p> With over 10 years in the industry, we are experienced in creating fully responsive websites, app designs, and engaging brand experiences. Find out more about our services.</p>
          <button className='darkbtn'> learn more</button>
        </div> 
      </section>

      <section className='card_section'>
        <div className='cards'>
        <article className='card card_one'>
          <h2> web design</h2>
          <Link to='webdesign'> view projects <span><img src='/assets/shared/desktop/icon-right-arrow.svg' alt=' link arrow'/></span></Link>
        </article>
        <article className='card card_two'>
          <h2> app design</h2>
            <Link to='appdesign'> view projects <span><img src='/assets/shared/desktop/icon-right-arrow.svg' alt=' link arrow' /></span></Link>
        </article>
        <article className='card card_three'>
          <h2> graphic design</h2>
            <Link to='/graphicdesign'>view projects <span><img src='/assets/shared/desktop/icon-right-arrow.svg' alt=' link arrow' /></span></Link>
        </article>
        </div>
      </section>

      <section className='section_two_cards '>
        <div className='center'>
        <article className='section_two_card'>
          <img src='/assets/home/desktop/illustration-passionate.svg' alt=''/>
          <h2> passionate</h2>
          <p> Each project starts with an in-depth brand research to snure we only create producst that 
            serve a purpose. We merge art, design, and technology into exciting new solutions.
          </p>
        </article>
        <article className='section_two_card'>
            <img src='/assets/home/desktop/illustration-resourceful.svg' alt='' />
          <h2> resourceful</h2>
          <p> Everything that we do has a strategic purpose. We use an agile approach in all our projects
            and value customer collaboration. It guarantees superior results that fulfill our clients' needs.
          </p>
        </article>
        <article className='section_two_card'>
            <img src='/assets/home/desktop/illustration-friendly.svg' alt='' />
          <h2> friendly</h2>
          <p> We are gorup of enthusiastic folks who know how to put people first.Our success depends on 
            our customers, and we strive to give them the best experience a company can provide.
          </p>
        </article>
        </div>
      </section>

      <section className='home_contact_section'>
        <article className='home_contact_content'>
          <h3> Let's talk about your project</h3>
          <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your
            business grow.
          </p>
          <button className='darkbtn'> get in touch</button>
        </article>
      </section>

    </div>
  )
}

export default Home
