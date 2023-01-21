import React,{useState, useEffect, useRef} from 'react'
import '../styles/location.scss'
import '../styles/home.scss'

const Locations = () => {
  return (
    <div id='location'>
      <section>
        {/* <article> */}
          <div>
            <img src='/assets/locations/desktop/image-map-canada.png ' alt='location of the canada office' />
          </div>

          <div>
            <span className='heading'>Canada</span>
             <div>
              <p><span>designo central office</span>
              3886 Wellington Street Toronto, Ontario M9C 3J5</p>

              <p><span>contact</span>
                    P : +1 253-863-8967
                    M : contact@designo.co</p>
            </div>
          </div>
        {/* </article> */}
      </section>
      <section>
        {/* <article> */}
          <div>
            <img src='/assets/locations/desktop/image-map-australia.png' alt='' />
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
        {/* </article> */}
      </section>
      <section>
        {/* <article> */}
          <div>
            <img src='/assets/locations/desktop/image-map-united-kingdom.png' alt='' />
          </div>
         
          <div>
            <span className='heading'>united kingdom</span>
            <div>
            <p><span>designo UK office</span>
              13  Colorado Way Rhyd-y-fro SA8 9GA</p>
              <p><span>contact</span>
              P : 078 3115 1400
              M : contact@designo.uk</p>
              </div>
          </div>
        {/* </article> */}
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

export default Locations
