import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Header({text,bgcolor,textcolor}) {
    const headerstyle= {
        backgroundColor: bgcolor ,color:textcolor
    }
    return(
        <header style={headerstyle}>
            <div className='container'>
               <NavLink to='/' className='active'> <h2>{text}</h2>
               </NavLink>
            </div>
        </header>
    );
  }
 
  Header.defaultProps={
      text:'feedback UI',
      bgcolor:'rgba(0,0,0,0.4)',
      textcolor:'#ff6a95',
  }
  Header.prototype={
      text:PropTypes.string,
      bgcolor:PropTypes.string,
      textcolor:PropTypes.string,
  }

export default Header;

