import './css/Certificate.css';


const logo = require('./img/certinal.png');
interface info{
  name:string;
  evaluate:string;
  date:string;
}

function Certificate(prop:info) {
  return (
    <div className='content-wrapper' id='main'>
        <div id='printable'>
        <span className='nameInput'>{prop.name}</span>
        <span className='evaluateInput'>{prop.evaluate}</span>
        <span className='dateInput'>{prop.date}</span>

        <img src={logo} alt="" className='backG' />
        </div>
    </div>
  )
}

export default Certificate;
