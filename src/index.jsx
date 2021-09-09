import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import image from './bored.jpg';

class Site extends React.Component {
    state = {
        show: true,
    }
    render() {
        return(
            <div className="site">
                <div className="left-panel"></div>
                <div className="main-panel">
                    <Image show={this.state.show} />
                </div>
                <Button onClick={() => this.handleClick()}/>
            </div>
        )
    }
}

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };
    }

    render() {
        return(
            <div>
                {this.state.show && <img className="center_image" src={image} alt="Bored"/>}
            </div>
        )
    }
}

function Button(props) {
    return (
        <button className='center button' onClick={() => props.onClick}>Feeling bored?</button>
    )
}

/*class Button extends React.Component {
    render() {
      return (
        <div>
            <button className='center button' onClick={() => this.hide_image()}>Feeling bored?</button>
        </div>
      );
    }

    handleClick() {
        console.log("click");
    }
  }*/



  ReactDOM.render(
    <Site />,
    document.getElementById('root')
  );