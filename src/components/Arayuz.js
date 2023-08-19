
import { useState } from 'react';
import Button from './Button';

const Arayuz = () => {
  const [text, setText] = useState("test");

    const tiklandi = () => {
      console.log("Tıklandı")
    }
  const [girdi, setGirdi] = useState(null)
  return (
    <div>
      <input onChange={(e) => setGirdi(e.target.value)}/>
      <button onClick={() => alert('tıklandı')}>Tıkla</button>
      <Button onClick={() => alert('tıklandı')} title = "yazdır"></Button>
      <button onClick={() => setText(girdi)}>Yazdır</button>
      <h1>{text}</h1>
    </div>
  )
}
export default Arayuz;