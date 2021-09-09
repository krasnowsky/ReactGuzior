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
            <button className='button'>Click me!</button>
        </div>
      );
    }
  }

  ReactDOM.render(
    <Canvas />,
    document.getElementById('root')
  );