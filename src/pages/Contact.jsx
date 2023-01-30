import React from 'react'
import '../styles/contact.scss'


function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const phone = form.elements.phone.value;
  const message = form.elements.message.value;
  
  console.log({ name, email, phone, message });

  // Perform your desired actions here, such as sending the data to a server.
}
// This function listens for the form's submit event, prevents the default form submission, and extracts the values from the form elements. 
// It then logs the extracted values to the console for demonstration purposes. You would replace the console.log statement with your desired 
// actions, such as sending the data to a server using fetch or XMLHttpRequest.
const Contact = () => {
  return (
    <div id='contact'>
      <article>
        <div>
          <h1> contact us</h1>
          <p>Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your busines grow.
                  If you are looking for unique digital experiences that's relatable to your users, drop us a line.</p>
        </div>
        <form>
          <input placeholder='name' required type='name' />
          <hr></hr>
          <input placeholder='email address' required type='email ' name='email' />
          <hr></hr>
          <input placeholder='phone' required type='tel-number' name='phone' maxlength='12'/>
          <hr></hr>
          <textarea placeholder='message' required type='text' maxlength="100" />
          <hr></hr>
          <button className='darkbtn' onSubmit={handleSubmit}> submit </button>
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
    </div>
  )
}

export default Contact
