import { useState } from 'react';
import './css/App.css';
import './Certificate'
import Certificate from './Certificate';

function App() {
  const print=()=> window.print();
  
  const [name, setName] = useState('');
  const [evaluate, setEvaluate] = useState('');
  const [date, setDate] = useState('');
  const handleName = (e:any) => {
    setName(e.target.value);
  }
  const handleEvaluate = (e:any) => {
    setEvaluate(e.target.value);
  }
  const handleDate = (e:any) => {
    setDate(e.target.value);
  }

  return (
    <div className='root'>
     
        <div className='left-side'>
          <Certificate name={name} evaluate={evaluate} date={date} />
        </div>

        <div className='right-side'>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">Họ và tên của học viên</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Ex: Đặng Danh Dũng" onChange={handleName}/>
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">Nhận xét</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Ex: for the great efforts in training and learning
               " onChange={handleEvaluate} />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput3" className="form-label">Ngày nhận chứng chỉ</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Ex: June 04, 2021" onChange={handleDate}/>
          </div>
          <div className="buttonPrint">
          <button onClick={print} type="button" className="btn btn-success">Print</button>
          </div>
        </div>
    </div>
  )
}

export default App;
