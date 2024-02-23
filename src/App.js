import logo from './logo.svg';
import './App.css';
import { Component, useState } from "react";
import ConfirmButton from './ConfirmButton';
// class Toggle extends Component
// {
//   constructor(props)
//   {
//     super(props);
//     this.state = { isToggleOn: true };
//     // this.handleClick = this.handleClick.bind(this);
//   }

//   render()
//   {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? '켜짐' : '꺼짐'}
//       </button>
//     );
//   }
// }

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
          btns.map((btn) =>
          {
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

  return (<button onClick={(e) =>
  { //handleClick(e); 
    props.a("내가 했던 것");
  }}>
    {isToggleOn ? '켜짐' : '꺼짐'}
  </button>
    // <button onClick={handleClick}>
    // {isToggleOn ? '켜짐' : '꺼짐'}
    // </button>
  );
}
function App()
{
  const handleClick2 = (action) =>
  {
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
