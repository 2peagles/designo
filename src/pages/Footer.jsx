import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.scss'
export const Footer = () => {
  return (
    <div id='footer'>
        <section>
            <nav>
                <ol>
                      <li><img src='/assets/shared/desktop/logo-light.png' alt='designo logo' /></li>
                      <li> <Link to='/ourcompany'>our company</Link></li>
                      <li><Link to='/locations'>locations</Link></li>
                      <li><Link to='/contact'>contact</Link></li>
                </ol>
            </nav>
        </section>
        <hr></hr>

        <section className='office'>
            <article>
                <h4>Designo Central Office</h4>
                <p>3886 Wellington Street Toronto,Ontario M9C 3j5</p>
            </article>
              <article>
                  <h4>Designo Central Office</h4>
                  <p>3886 Wellington Street Toronto,Ontario M9C 3j5</p>
              </article>
              <article>
                  <ol>
                      <li><img src='/assets/shared/desktop/icon-facebook.svg' alt='facebook icon' /></li>
                      <li><img src='/assets/shared/desktop/icon-youtube.svg' alt='youtube icon' /></li>
                      <li><img src='/assets/shared/desktop/icon-twitter.svg' alt='twitter icon' /></li>
                      <li><img src='/assets/shared/desktop/icon-pinterest.svg' alt='pinterest icon' /></li>
                      <li><img src='/assets/shared/desktop/icon-instagram.svg' alt='instagram icon' /></li>
                  </ol>
              </article>
        </section>
    </div>
  )
}
