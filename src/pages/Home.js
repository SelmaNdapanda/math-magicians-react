import React from 'react';
import '../components/App.css';

const Home = () => (
  <div className="home">
    <h1 className="intro">
      Welcome to our Page!
    </h1>

    <div>
      <p className="description">
        This is our free math magician website.
        <br />
        It is a simple website built using one of the popular JavaScript library; React.
        <br />
        This website conatins a simple calulator that performs some basic
        {' '}
        <br />
        mathematic operations such as addition, subtraction, multiplication and division.
      </p>
    </div>

    <div>
      <h3 className="home-title">Wanna have some fun?</h3>
      <p className="description">Click on the Calculator link above to solve your problem.</p>
    </div>

    <div>
      <h3 className="home-title">Enjoyed the website?</h3>
      <p className="description">
        You can show your support to the project by giving star on
        <a className="link" href="https://github.com/SelmaNdapanda/math-magicians-react">GitHub.</a>
      </p>
    </div>
  </div>
);

export default Home;
