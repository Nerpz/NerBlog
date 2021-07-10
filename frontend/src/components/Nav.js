import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {changePage} from '../actions/actions'


const NavButton = (props) => {
  const {mainColor} = props;
  const [hover, setHover] = useState(false);
  const inactiveButtonStyle = {
    zIndex: '5',
    backgroundColor: `${mainColor}`,
    height: '80px',
    width: '80px',
    position: 'fixed',
    bottom: '15px',
    right: '15px',
    padding: '0.5rem',
    borderRadius: '10px',
    border: '5px solid black',
    // boxShadow: '5px 3px 10px 0px rgba(0,0,0,0.75)',
    backgroundImage: 'url("/images/Hamburger.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '95%',
    backgroundPosition: '4px 4px',
    transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94) .5s',
    
  };
  const inactiveHoverStyle = {
    zIndex: '5',
    backgroundColor: `${mainColor}`,
    height: '80px',
    width: '80px',
    position: 'fixed',
    bottom: '15px',
    right: '15px',
    padding: '0.5rem',
    borderRadius: '10px',
    border: '5px solid black',
    backgroundImage: 'url("/images/Hamburger.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '95%',
    backgroundPosition: '4px 4px',
    transform: 'rotate(360deg)',
    transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94) .5s',
   
  };

  const activeButtonStyle = {
    zIndex: '5',
    backgroundColor: `${mainColor}`,
    height: '80px',
    width: '80px',
    position: 'fixed',
    bottom: '15px',
    right: '240px',
    padding: '0.5rem',
    border: '10px solid black',
    borderRadius: '40px',
    backgroundImage: 'url("/images/HamburgerClose.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '75%',
    backgroundPosition: '8px 8px',
    transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94) .5s',
    
  };
  const activeHoverStyle = {
    zIndex: '5',
    backgroundColor: `${mainColor}`,
    height: '80px',
    width: '80px',
    position: 'fixed',
    bottom: '15px',
    right: '240px',
    padding: '0.5rem',
    border: '10px solid black',
    borderRadius: '40px',
    backgroundImage: 'url("/images/HamburgerClose.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '75%',
    backgroundPosition: '8px 8px',

    transform: 'rotate(360deg)',
    transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94) .5s',
    
  };
  return (
    <button
      onMouseEnter={(e) => {
        setHover(true);
      }}
      onMouseLeave={(e) => {
        setHover(false);
      }}
      onClick={props.onClick}
      style={
        !props.showNav
          ? !hover
            ? inactiveButtonStyle
            : inactiveHoverStyle
          : !hover
          ? activeButtonStyle
          : activeHoverStyle
      }
    ></button>
  );
};
const NavMenu = (props) => {
  const { children, showNav, mainColor } = props;
  const activeNavStyle = {
    zIndex: '5',
    height: '93%',
    width: '210px',
    
    position: 'fixed',
    right: '15px',
    bottom: '15px',
    // padding: '0.5rem',
    // paddingRight: '0.75rem',
    // border: '5px solid #000',
    // borderRadius: '10px',

    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94) .5s',
    textAlign: 'center',
  };
  const inactiveNavStyle = {
    zIndex: '5',
    height: '93%',
    width: '200px',
    backgroundColor: `${mainColor}`,
    position: 'fixed',
    right: '-220px',
    bottom: '15px',
    padding: '0.5rem',
    
    // border: '5px solid #000',
    // borderRadius: '10px',

    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94) .5s',
    textAlign: 'center',
  };

  return (
    <nav style={showNav ? activeNavStyle : inactiveNavStyle}>{children}</nav>
  );
};

const NavTitle = (props) => {
  const {mainColor, onClick} = props;
  const titleStyle = {
    width: '100%',
    height: '100%',
    marginBottom: '5rem',
    alignText: 'center',
    marginBottom: '0rem',
    fontSize: '3rem',
    fontWeight: 'bold',
    textShadow: '5px 5px rgba(0,0,0,0.25)',
    color: '#000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    justifySelf: 'stretch',
  };
  const imgStyle = {
    height: 'auto',
    width: '210px',
    
    
    padding: '0rem',
  };
  return (
    <h1 style={titleStyle}>
      <Link onClick={onClick} to='/'><img style={imgStyle} src='/images/logo.png' alt='logo' />
      
      </Link>
    </h1>
  );
};
const NavLink = (props) => {
  const {mainColor, href, children, onClick} = props;
  
  const [hover, setHover] = useState(false);
  const linkStyle = {
    textDecoration: 'none',
    width: '95%',
    minHeight: '36px',
    color: `${mainColor}`,
    backgroundColor: 'black',
    fontSize: '2rem',
    fontWeight: 'bold',
    border: '3px solid black',
    borderRadius: '1rem',
    marginBottom: '0.5rem',
    marginTop: '0.5rem',
    paddingBottom: '0.6rem',
    transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94) .5s',

  };
  const linkStyleHover = {
    textDecoration: 'none',
    width: '95%',
    minHeight: '36px',
    color: 'black',
    backgroundColor: `${mainColor}`,
    fontSize: '2rem',
    fontWeight: 'bold',
    border: '3px solid black',
    borderRadius: '1rem',
    marginBottom: '0.5rem',
    marginTop: '0.5rem',
    paddingBottom: '0.6rem',
    transition: 'cubic-bezier(0.25, 0.46, 0.45, 0.94) .5s',
    
  };
  return (
    <Link
      style={hover ? linkStyleHover : linkStyle}
      to={href}
      onMouseEnter={(e) => {
        setHover(true);
      }}
      onMouseLeave={(e) => {
        setHover(false);
      }}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

const Nav = (props) => {

  const {mainColor} = props;

  const [showNav, setShowNav] = useState(false);

  const dispatch = useDispatch()

  const pages = useSelector((state) => state.pages);
  const {book} = pages;


  const pageClicked = (pageNumber) => {
    let newPage = pageNumber;
    let oldPage;
      if(book && book.activePage) {
          oldPage = book.activePage
      } else {
         oldPage = 0;
      }

     dispatch(changePage(newPage, oldPage))  
  }


  return (
    <>
      <NavButton onClick={(e) => setShowNav(!showNav)} showNav={showNav} mainColor={mainColor} />
      <NavMenu showNav={showNav} mainColor={mainColor}>
        <NavLink mainColor={mainColor}
          onClick={() => {
            setShowNav(false);
          }}
          href={'/portfolio'}
        >
          Portfolio
        </NavLink>
        <button onClick={(e)=>{pageClicked(1)}}>Page 1</button>
        {/* <NavLink mainColor={mainColor}
          onClick={() => {
            setShowNav(false);
          }}
          href={'/about'}
        >
          About
        </NavLink>
        <NavLink mainColor={mainColor}
          onClick={() => {
            setShowNav(false);
          }}
          href={'/gallery'}
        >
          Photos
        </NavLink>
        <NavLink mainColor={mainColor}
          onClick={() => {
            setShowNav(false);
          }}
          href={'/blog'}
        >
          Blog
        </NavLink> */}
        
        <NavTitle mainColor={mainColor} onClick={() => {
            setShowNav(false);
          }}></NavTitle>
      </NavMenu>
    </>
  );
};
export default Nav;