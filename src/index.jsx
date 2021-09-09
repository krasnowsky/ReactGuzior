import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Canvas extends React.Component {
    render() {
        return(
            <Button />
        )
    }
}

 

class Button extends React.Component {
    render() {
      return (
        <div>
            <button className='center button' onClick={() => this.handleClick()}>Feeling bored?</button>
        </div>
      );
    }

    handleClick() {
        console.log("click");
    }
  }

  ReactDOM.render(
    <Canvas />,
    document.getElementById('root')
  );