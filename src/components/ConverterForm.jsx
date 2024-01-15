import { useState } from "react"

const ConverterForm = function() {
  const [color, setColor] = useState('rgb(255, 255, 255)');
  const [message, setMessage] = useState('Код не распознан');

  function handleChangeColor(e) {
    const { value } = e.target;
   
    if (value.length < 7 || value.length > 7) return;

    if (!value.startsWith('#')) {
      setColor('rgb(250, 128, 114)');
      setMessage('Ошибка!');
    } else {
      let hex = value.slice(1).match(/..?/g);
      let rgb = [...hex].map(x => parseInt(x, 16)).join();
      setColor(`rgb(${rgb})`);
      setMessage(`rgb(${rgb})`);
    }
  }

  return (
    <div className="converter"style={{backgroundColor: color}}>
      <input type="text" className="converter-input" onChange={handleChangeColor} placeholder="#..." />
      <span className="converter-message">{message}</span>
    </div>
  )
}

export default ConverterForm