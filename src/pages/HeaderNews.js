import React, { useState,useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SwitchToggle from "../components/SwitchToggle"
import { Context } from "../Context";
import {Link} from "react-router-dom"
import Offcanvasbody from '../components/Offcanvasbody ';

const HeaderNews = () => {
     const [hide,setHide] =useState(true)
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow2 = () => setShow(true);
     const { search, setSearch,darkMode1 ,togglelanguagedheader,languagedheader,setLanguageheader} = useContext(Context);
     console.log("search",search)
     console.log("languagedheader",languagedheader)


     function handleShow(){
          setHide(!hide)
     }
  return (
    <>
          <Offcanvasbody show={show} onHide={handleClose} />
    <Navbar className={darkMode1 ? "HeaderNewsdark headernews" : "headernews"}>
    <Container   >
     <div className="icons">
<ul>
    <li onClick={handleShow2}><i className="fa fa-bars" aria-hidden="true"></i></li>
 
    <li style={{cursor:'pointer'}} onClick={handleShow}><i className="fa fa-search" aria-hidden="true"></i>
    </li>
    <li>
    {hide && <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder='serach' style={{marginLeft:'10px'}} />}

    </li>

    <li><SwitchToggle /></li>


</ul>
     </div>
     <div className="news">
<h2 className={darkMode1 ? "newdark" : ""}>

     <Link to="/">
     News

     </Link> </h2>
     </div>
     <div className="watch">

     <p className='ml-4' onClick={togglelanguagedheader}>
          {languagedheader === "english" && <span>english</span>}
          {languagedheader === "arabic" &&<span>عربي</span>}

     </p>

<span></span>   {languagedheader === "english" && <span>watch now</span>}
          {languagedheader === "arabic" &&<span>المشاهدة الأن</span>}
<a href="# " className={darkMode1 ? "buttondark" : ""} >
{languagedheader === "english" && <span>SIGN UP</span>}
          {languagedheader === "arabic" &&<span>التسجيل</span>}
</a>

     </div>
    </Container>
  </Navbar>
  </>
  )
}

export default HeaderNews