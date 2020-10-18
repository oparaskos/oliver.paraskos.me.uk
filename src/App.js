import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resume: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResume(){
    $.ajax({
      url:'/resume.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resume: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResume();
  }

  render() {
    return (
      <div className="App">
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
