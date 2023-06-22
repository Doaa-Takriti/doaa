import Form from 'react-bootstrap/Form';
import{useContext } from 'react'

import { Context } from "../Context";


const SwitchToggle = () => {
  const { darkMode1,toggleMode, setdarkMode1 } =  useContext(Context);
console.log("darkMode1",darkMode1)
  return (
    <Form>
    <Form.Check // prettier-ignore
      type="switch"
      id="custom-switch"
      onClick={toggleMode}
      
    />
 
  </Form>
  )
}

export default SwitchToggle