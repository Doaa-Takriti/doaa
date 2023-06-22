import React,{useContext} from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import { Context } from "../Context";

const Footer = () => {
  const { darkMode1,language } = useContext(Context);


  return (
    <div
    className={darkMode1 ? "HeaderNewsdark footer" : "footer"}>
        
<Row style={{paddingLeft:'100px'}}>
  <Col lg={2}>
    <h1>news</h1>
 
  </Col>
  <Col lg={2}>
    <ul>
      <li>
        {language === "en" ? 'about' : 'حول'}
        </li>
      <li>  {language === "en" ? 'contact' : 'تواصل'}</li>
      <li>  {language === "en" ? 'help' : 'مساعدة'}</li>
      <li>  {language === "en" ? 'careers' : 'المهن'}</li>
      <li>  {language === "en" ? 'cookies notice' : 'ملاحطات'}</li>

    </ul>
    <p>&copy; 2022   {language === "en" ? 'news' : 'اخبار'}</p>
  </Col>

  <Col lg={3}>
  <ul>
      <li>  {language === "en" ? 'privacy police' : 'سياسة الخصوصية'}</li>
      <li>  {language === "en" ? 'ca notice' : 'ملاحظة'}</li>
      <li>  {language === "en" ? 'term of service' : 'خدمات'}</li>
      <li>  {language === "en" ? 'news sitmap' : 'حول'}</li>
      <li>  {language === "en" ? 'advertise' : 'نصائح'}</li>

    </ul>
  </Col>

  <Col lg={5} >
    <div 
    className='subscribe'>
      <div>
      <h3>
      {language === "en" ? 'subscribe to be the first to  know the news' : 'قم بالمتابعة لتصلك اخر الاخبار'}
         </h3>
      <div>
      <input type="text" placeholder='E-mail' />
      <i className="fa fa-paper-plane" aria-hidden="true"></i>
      </div>
      <p> By submitting your E-mail,your agree to our <span>Terms</span> and <span> Privacy Policy.</span>
      
        <br/>
        you can opt-out at ant time.
      </p>
    </div>
    </div>
  </Col>

</Row>
        
        </div>
  )
}

export default Footer