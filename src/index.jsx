import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Site extends React.Component {
    render() {
        return(
            <div className="site">  
                    <div className="flex-box">
                        <div className="left-panel">
                            <LeftPane />
                        </div>
                        <div className="main-panel">
                            <MainPane />
                        </div>
                    </div>
            </div>
        )
    }
}

class LeftPane extends React.Component {
    render() {
        return (
            <div>1</div>
        )
    }
}

class MainPane extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Content />
            </div>
        )
    }
}

function Button(props) {
    return (
        <button className='center button' onClick={props.onClick}>
            Feeling bored?
        </button>
    );
}

function fetchAPI() {
    return fetch('http://www.boredapi.com/api/activity/');
}

class Content extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activity: null,
            type: null,
            participants: null,
            price: null,
            link: null,
            accessibility: null,
        }
    }

    getItems() {
        fetchAPI()
        .then(results => results.json())
        .then(results => this.setState({
            activity: results.activity,
            type: results.type,
            participants: results.participants,
            price: results.price,
            link: results.link,
            accessibility: results.accessibility,
        })); 
    }

    translateNumber() {
        if (this.state.price === 0) {
            this.setState({
                price: 'free'
            })
        }

        else if (this.state.price <= 0.5) {
            this.setState({
                price: 'cheap'
            })
        }   

        else if (this.state.price > 0.5) {
            this.setState({
                price: 'expensive'
            })
        }
    }

    render() {
        return ( 
            <div className='text'>
                <Button onClick={() => this.getItems()}/>
                {this.state.activity} 
                <p></p>
                {this.state.type}
                <p></p>
                {this.state.participants}
                <p></p>
                {this.state.price}
                <p></p>
                {this.state.link ? <a href={this.state.link} target="_blank" rel="noreferrer">Learn more!</a> : null}
                <p></p>
                {this.state.accessibility}
            </div>
          );
    }
}


ReactDOM.render(
    <MainPane />,
    document.getElementById('root')
);
