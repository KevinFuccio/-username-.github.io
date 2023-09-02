import './Footer.scss'

import logo from '../../assets/logo-white.png'

export const Footer = () => {
    return(
        <div  className='footer-container'>
            <img src={logo} alt="" className='logo' />
            <span>{new Date().getFullYear()} - Copyright all reserved</span>
        </div>
    )
}