import './topbar.scss'
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className="left">
                    <a href="#intro" className='logo'>cameron.</a>
                    <div className='itemContainer'>
                        <Person className='icon' />
                        <span><a style={{textDecoration: 'none', color: 'inherit'}} href='https://www.linkedin.com/in/cameron-mcdowell-72aa59190/' target='_blank;'>LinkedIn</a></span>
                    </div>
                    <div className='itemContainer'>
                        <Mail className='icon' />
                        <span>cameronleemcd@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
