import React from 'react'
import '../styles/contact.scss'
const Contact = () => {
  return (
    <section id='contact'>
      <article>
        <div>
          <h1> contact us</h1>
          <p>Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your busines grow.If you are looking for unique digital experiences that's relatable to your users, drop us a line.</p>
        </div>
        <form>
          <input placeholder='name' required type='name'/>
          <hr></hr>
          <input placeholder=' email address' required type='email'/>
          <hr></hr>
          <input placeholder='phone' required type='number'/>
          <hr></hr>
          <input placeholder='message' required/>
          <hr></hr>
          <button className='darkbtn'> submit </button>
        </form>
      </article>
      <article className='locations'>
          <div>
            <img src='assets/shared/desktop/illustration-canada.svg' alt=''/>
            <h2> canada</h2>
            <button className='lightbtn'> see location</button>
          </div>
        <div>
          <img src='/assets/shared/desktop/illustration-australia.svg' alt='' />
          <h2> australia</h2>
          <button className='lightbtn'> see location</button>
        </div>
        <div>
          <img src='assets/shared/desktop/illustration-united-kingdom.svg' alt='' />
          <h2> united kindom</h2>
          <button className='lightbtn'> see location</button>
        </div>
      </article>
    </section>
  )
}

export default Contact
