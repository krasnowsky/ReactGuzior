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

        this.state = {
            bored: null
        };
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.handleClick()}/>
            </div>
        )
    }


}

class Button extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bored: null
        };
    }

    /*handleClick() {
        console.log("fetching")
        fetch('http://www.boredapi.com/api/activity/')
            .then(response => response.json())
            .then(data => this.setState({ bored: data.total }));
        console.log(this.state.bored)
        const activity = JSON.parse(this.state.bored);
        console.log(activity.activity)
    }*/

    take() {
        fetch('http://www.boredapi.com/api/activity/')
            .then(response => response.json())
            .then(data => this.setState({ bored: data.total }));
        const { bored } = this.state;
        console.log({bored})
    }

    render() {
        const { bored } = this.state;
        return (
            <div>
            <div className='text'>Output: {bored}</div>
            <button className='center button' onClick={() => this.take()}>Feeling bored?</button>
            </div>
        )
    }


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

      componentDidMount() {
          this.getItems();
      }

      getItems() {
        fetch('http://www.boredapi.com/api/activity/')
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
        this.translateNumber()
          return ( 
              <div className='text'>
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
    <Content />,
    document.getElementById('root')
  );
