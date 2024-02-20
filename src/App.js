import logo from './logo.svg';
import './App.css';
import ConfirmButton from './ConfirmButton';
import { useState } from 'react';

function MyButton(props)
{
  const btns = [1, 2, 3, 4];
  const handleEvent = (event) =>
  {
    console.log(event.target.innerHTML);
  };
  return (
    <div>
      <div>
        {
          btns.map((btn) => {
            return (
              <button onClick={handleEvent}>{btn}</button>
            )
          })
        }
      </div>
    </div>
  );
}

const Toggle = (props) =>
{
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleClick = (e) =>
  {
    setIsToggleOn(!isToggleOn);
  }

  return (<button onClick={(e) => {
    props.a("내가 했던 것");
  }}>
    {isToggleOn ? '켜짐' : '꺼짐'}
  </button>
  );
}
function App() {
  const handleClick2 = (action) => {
    alert(action);
  }
  return (
     <div className="App">
      <Toggle a={handleClick2} />
      <MyButton />
      <ConfirmButton />
     </div>
  );
}

export default App;
