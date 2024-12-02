import Router from 'preact-router';
import { Component, render } from 'preact'
import { Support } from './pages/Support'
import { SignIn, SignUp } from './pages/SignIn';
import { onAuth } from './firebase';
import './reset.css'
import './variables.css'
import './base.css'

export class App extends Component {

  constructor() {
    super()
    this.state = {
      user: null,
      messages: [],
    };
  }

  componentDidMount() {
    onAuth(user => {
      if(user != null) {
        this.setState({
          ...this.state,
          user,
        })
      } else {
        // redirect
      }
    });
  }

  render(props, state) {
    return (
      <Router>
        <Support {...state} path="/cases/:caseId?" setMessages={messages => {
          this.setState({
            ...state,
            messages,
          });
        }} />
        <SignIn path="/signin" />
        <SignUp path="/signup" />
      </Router>
    )
  }
}

render(<App />, document.getElementById('app'))
