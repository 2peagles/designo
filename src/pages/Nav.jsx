import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.scss'
export const Nav = () => {
  const[menu, setMenu]=useState(false);
  const handleClick = () =>setMenu(!menu);
  return (
   <header>
        <nav>
          <ol>
            <li className='menu'><Link to='/'><img src='/assets/shared/desktop/logo-dark.png' alt='designo logo'/></Link></li>
             <li className='menu mobile' >
              <button onClick={handleClick} className=''>
                  {!menu ? <img src='/assets/shared/mobile/icon-hamburger.svg' alt='open main menu' /> : <img src='assets/shared/mobile/icon-close.svg' alt='close main menu' />}
               </button>
              </li>
              {/* <li className={!menu ? 'hidden' : 'visible'}><Link to='/'>home</Link></li> */}
              <li className={!menu ? 'hidden' : 'visible'}><Link to='/ourcompany'>our company</Link></li>
              <li className={!menu ? 'hidden' : 'visible'}><Link to='/locations'>locations</Link></li>
              <li className={!menu ? 'hidden' : 'visible'}><Link to='/contact'>contact</Link></li>     
            </ol>
        </nav>
   </header>
  )
}
