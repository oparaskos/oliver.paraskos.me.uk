import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import { Helmet } from 'react-helmet';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resume: {}
    };

    ReactGA.initialize('UA-180790252-1');
    ReactGA.pageview(window.location.pathname);
  }

  getResume(){
    const self = this;
    return fetch('/resume.json')
      .then(response => response.json())
      .then(data => self.setState({resume: data}))
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  componentDidMount(){
    this.getResume();
  }

  render() {
    return (
      <div className="App">
          {this.state.resume.basics && <Helmet>
            <title>{this.state.resume.basics.fullName || this.state.resume.basics.name}</title>
            <meta property="og:title" content={this.state.resume.basics.fullName || this.state.resume.basics.name} />
            <meta property="og:description" content={`I'm ${this.state.resume.basics.name}. I'm a ${this.state.resume.basics.location.city} based ${this.state.resume.basics.label}, ${this.state.resume.basics.summary}.`} />
          </Helmet>
        }
        <Header data={this.state.resume}/>
        <About data={this.state.resume.basics}/>
        <Resume data={this.state.resume}/>
        {this.state.resume.portfolio && <Portfolio data={this.state.resume.portfolio}/>}
        {this.state.resume.testimonials && <Testimonials data={this.state.resume.testimonials}/>}
        <Contact data={this.state.resume.basics}/>
        <Footer data={this.state.resume} />
      </div>
    );
  }
}

export default App;
