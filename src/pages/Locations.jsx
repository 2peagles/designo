import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/location.scss'
import '../styles/home.scss'


const Locations = () => {
  return (
    <div id='location'>
      <section>
          <div>
            {/* <img sclrc='/assets/locations/desktop/image-map-canada.png ' alt='location of the canada office' /> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.199558643563!2d-79.39673344841297!3d43.644016279019105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d9a0737d9f%3A0xbc1ae74f23fabf4e!2sWellington%20St%20W%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1675395138394!5m2!1sen!2sus" width="100%" height="500px" style={{border:0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div>
            <span className='heading'>Canada</span>
             <div>
              <p>
                <span>designo central office</span>
              3886 Wellington Street Toronto, Ontario M9C 3J5
              </p>

              <p>
                <span>contact</span>
                    P : +1 253-863-8967
                    M : contact@designo.co
                </p>
            </div>
          </div>
      </section>
      <section>
          <div>
            {/* <img src='/assets/locations/desktop/image-map-australia.png' alt='' /> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.758074763613!2d149.78604585130918!3d-30.32939848169006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ba73450a680702d%3A0x44a309bd6607346e!2s19%20Balonne%20St%2C%20Narrabri%20NSW%202390%2C%20Australia!5e0!3m2!1sen!2sus!4v1675395494313!5m2!1sen!2sus" width="600" height="450" style={{border:0}}  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
      
          <div>
            <span className='heading'> australia</span>
            <div>
            <p><span>designo  AU office</span>
              19 Balonne Street New South Wales 2443</p>

            <p><span>contact</span>
              P : (02) 6720 9092
              M : contact@designo.au</p>
              </div>
          </div>
      </section>
      <section>
          <div>
            {/* <img src='/assets/locations/desktop/image-map-united-kingdom.png' alt='' /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d9883.808552972447!2d-3.8552017762628368!3d51.73391076124521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s13%20Colorado%20Way%20Rhyd-y-fro%20SA8%209GA!5e0!3m2!1sen!2sus!4v1675395728298!5m2!1sen!2sus" width="600" height="450" style={{border:0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
         
          <div>
            <span className='heading' >united kingdom</span>
            <div>
            <p><span>designo UK office</span>
              13  Colorado Way Rhyd-y-fro SA8 9GA</p>
              <p><span>contact</span>
              P : 078 3115 1400
              M : contact@designo.uk</p>
              </div>
          </div>
      </section>
      <section className='home_contact_section'>
        <article className='home_contact_content'>
          <h3> Let's talk about your project</h3>
          <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your
            business grow.
          </p>
          <Link to='/contact'><button className='darkbtn' > get in touch</button></Link>
        </article>
      </section>
    </div>
  )
}

export default Locations
