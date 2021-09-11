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
            price: this.translatePrice(results.price),
            link: results.link,
            accessibility: results.accessibility,
        })); 
    }

    renderInfo() {
        return(
            <div className='center-text'>
                <h1>Random Activity</h1>
                <h2>{this.state.activity}</h2>
                <p></p>
                Type: {this.state.type}
                <p></p>
                Participants: {this.state.participants}
                <p></p>
                Price: {this.state.price}
                <p></p>
                {this.state.link ? <a href={this.state.link} target="_blank" rel="noreferrer">Learn more!</a> : <p>No link avaliable :/</p>}
                <p></p>
                Accesbility: {this.state.accessibility}
            </div>
        )
    }

    translatePrice(price) {
        if (price === 0) {
            return 'free'
        }

        else if (price <= 0.5) {
            return 'cheap'
        }   

        else if (price > 0.5) {
            return 'expensive'
        }
    }

    render() {
        return ( 
            <div className='text'>
                <Button onClick={() => this.getItems()}/>
                {this.renderInfo()}
            </div>
          );
    }
}


ReactDOM.render(
    <MainPane />,
    document.getElementById('root')
);
