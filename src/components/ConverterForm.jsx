import { useState } from "react"

const ConverterForm = function() {
  const [color, setColor] = useState('rgb(255, 255, 255)');
  const [message, setMessage] = useState('Код не распознан');

  function handleChangeColor(e) {
    const { value } = e.target;

    if (!value.startsWith('#') || /[^a-fA-F0-9#]/.test(value) || /(#).*\1/.test(value)) {
      setColor('rgb(250, 128, 114)');
      setMessage('Ошибка!');
    } else if(value.length === 7) {
      let hex = value.slice(1).match(/..?/g);
      let rgb = [...hex].map(x => parseInt(x, 16)).join();
      setColor(`rgb(${rgb})`);
      setMessage(`rgb(${rgb})`);
    } else {
      setColor('rgb(255, 255, 255)');
      setMessage('Код не распознан');
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