import React, {Component} from "react"
import sadface from '../../sadface.png';

class Home extends Component {
    render() {
        return (
            <div className="App">
              <header className="App-header">
                <img src={sadface} className="App-logo" alt="sadface" />
                <p>
                  sad face
                </p>
                <a
                  className="App-link"
                  href="https://soundcloud.com/sadboykj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Listen now
                </a>
                <a
                  className="App-link"
                  href="/team"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Team Page
                </a>
              </header>
            </div>
        )
    }
}

export default Home