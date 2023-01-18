import React from 'react'
import '../styles/ourcompany.scss'
import '../styles/home.scss'
// import '../styles/contact.scss'
const OurCompany = () => {
  return (
    <section id='about'>
      {/* <h1>our company</h1> */}
      <article>
          <img src='/assets/about/desktop/image-about-hero.jpg' alt='' />
          <div className='about_hero'>
          <h1>About Us</h1>
          <p>Founded in 2010, we are a creative agency that produces lasting results for our clients.
            We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that
            make real impact. We’re always looking forward to creating brands, products, and digital
            experiences that connect with our clients’ audiences.</p>
        </div>
      </article>
      <article>
        <img src='/assets/about/desktop/image-world-class-talent.jpg' alt='' />
        <div>
        <h2> World-class talent</h2>
        <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully 
          crafted from concept to launch, ensuring success in its given market. We are constantly updating 
          our skills in a myriad of platforms.   </p>
        <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning 
          are just as important. We give great importance to craftsmanship, service, and prompt delivery. 
          Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s
           story and mission.</p>
          </div>
      </article>
      <article className='locations'>
        <div>
          <img src='assets/shared/desktop/illustration-canada.svg' alt='' />
          <h3> canada</h3>
          <button className='lightbtn'> see location</button>
        </div>
        <div>
          <img src='/assets/shared/desktop/illustration-australia.svg' alt='' />
          <h3> australia</h3>
          <button className='lightbtn'> see location</button>
        </div>
        <div>
          <img src='assets/shared/desktop/illustration-united-kingdom.svg' alt='' />
          <h3> united kindom</h3>
          <button className='lightbtn'> see location</button>
        </div>
      </article>
      <article>
        <img src='/assets/about/desktop/image-real-deal.jpg 'alt=''/>
        <div>
        <h2> The real deal</h2>
        <p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our 
          own. Solving real problems require empathy and collaboration, and we strive to bring a fresh 
          perspective to every opportunity. We make design and technology more accessible and give you
           tools to measure success.</p>
        <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing
           strategies, we inspire audiences to take action and drive real results.</p>
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
    </section>
  )
}

export default OurCompany
