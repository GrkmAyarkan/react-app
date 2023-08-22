
import { useState } from 'react';
import Button from './Button';
import Input from './Input/Input';

const Arayuz = () => {
  const [text, setText] = useState("test");

    const tiklandi = () => {
      console.log("Tıklandı")
    }
  const [girdi, setGirdi] = useState(null)
  return (
    <div>
      <div className='inputName' style={{marginBottom:"10px"}}>
        <Input onChange={(e) => setGirdi(e.target.value)}/>
      </div>
      <div className='buttonName'>
        <Button onClick={() => setText(girdi)} title = "yazdır"></Button>
      </div>
      <h1>{text}</h1>
    </div>
  )
}
export default Arayuz;