import React, { Component } from "react";

export default class Discussion extends Component {
    constructor() {
      super();
  
      
    this.state = {
        pageTitle: "Discussion",
        currentTime: String(new Date())
      };
    }
  
    componentDidMount() {
      console.log("hey from the parent....");
  
      this.liveTime = setInterval(() => {
        this.setState({
          currentTime: String(new Date())
        });
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.liveTime);
    }
  
    render() {
      const { pageTitle } = this.state;
  
      return (
        <div>
          <h1>{pageTitle}</h1>
          
          <div>{this.state.currentTime}</div>
        </div>
      );
    }
  }