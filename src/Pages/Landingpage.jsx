import React from 'react'
import "../StylingAssets/bootstrap.min.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import LoginButton from '../auth0/loginButton';

function Landingpage() {
  return (
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
  <div className="container">
    <a className="navbar-brand js-scroll-trigger" href="#page-top">Start FinDash</a>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menu
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav text-uppercase ml-auto">
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#team">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
    <div>
      <LoginButton />
    </div>
  </div>
</nav>


<header className="masthead">
  <div className="container">
    <div className="intro-text">
      <div className="intro-lead-in">Hello There!</div>
      <div className="intro-heading text-uppercase">Investment Tracker</div>
      <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
    </div>
  </div>
</header>


<section className="page-section" id="services">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">Services</h2>
        <h3 className="section-subheading text-muted">Multi-Asset Investment Tracker</h3>
      </div>
    </div>
    <div className="row text-center">
      <div className="col-md-4">
        <h4 className="service-heading">Multi-Portfolio</h4>
        <p className="text-muted">All-Weather, Wall Street Bets, Retirement Funds</p>
      </div>
      <div className="col-md-4">
        <h4 className="service-heading">Multi-Asset Class</h4>
        <p className="text-muted">Equities, Cryptocurrency, Funds, Derivatives</p>
      </div>
      <div className="col-md-4">
        <h4 className="service-heading">Tracks Buy-Sell-Transfer</h4>
        <p className="text-muted">Individual Buy, Sell, Cash Flow</p>
      </div>
    </div>
  </div>
</section>


{/* <Portfolio portfolioLinks={portfolioLinks}></Portfolio> */}


<section className="page-section" id="about">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">Roadmap</h2>
        <h3 className="section-subheading text-muted">The journey begins</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="" alt=""/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>September 2022</h4>
                <h4 className="subheading">Phase 1 - Starting Out</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Portfolio, asset and transaction functionality.</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="" alt=""/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Beyond September 2022</h4>
                <h4 className="subheading">Phase 2 - Scaling to Multi-Asset</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Expanding asset Coverage to private funds, cryptocurrency and beyond U.S.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Beyond September 2022</h4>
                <h4 className="subheading">Phase 3 - Trading Modules</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Integrate plug-and-play investment strategies</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Beyond September 2022</h4>
                <h4 className="subheading">Phase 4 - Scaling to Derivatives</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">Time to ride the volatility waves!</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>Be Part
                <br/>Of Our
                <br/>Story!</h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


<section className="bg-light page-section" id="team">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
        <h3 className="section-subheading text-muted">Presenting.</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-3">
        <div className="team-member">
          <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt=""/>
          <h4>Michael Quah</h4>
          <p className="text-muted">Handsome 1</p>
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <FacebookIcon/>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <TwitterIcon/>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <LinkedIn/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="team-member">
          <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt=""/>
          <h4>Ong Yong Siang</h4>
          <p className="text-muted">Handsome 2</p>
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="team-member">
          <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt=""/>
          <h4>Robert Salomone</h4>
          <p className="text-muted">Handsome 3</p>
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="team-member">
          <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt=""/>
          <h4>Lim Xiong Zhi</h4>
          <p className="text-muted">Handsome 4</p>
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-8 mx-auto text-center">
        <p className="large text-muted">Ma hola!</p>
      </div>
    </div>
  </div>
</section>


<section className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <a href="#something">
          <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
        </a>
      </div>
      <div className="col-md-3 col-sm-6">
        <a href="#something">
          <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
        </a>
      </div>
      <div className="col-md-3 col-sm-6">
        <a href="#something">
          <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
        </a>
      </div>
      <div className="col-md-3 col-sm-6">
        <a href="#something">
          <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
        </a>
      </div>
    </div>
  </div>
</section>


<section className="page-section" id="contact">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">Contact Us</h2>
        <h3 className="section-subheading text-muted">Fill in details below.</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <form id="contactForm" name="sentMessage" novalidate="novalidate">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group">
                <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group">
                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="col-lg-12 text-center">
              <div id="success"></div>
              <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>


<footer className="footer">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-4">
        <span className="copyright">Copyright &copy; Your Website 2022</span>
      </div>
      <div className="col-md-4">
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="#something">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#something">
              <i className="fa fa-facebook-f"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#something">
              <i className="fa fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="list-inline quicklinks">
          <li className="list-inline-item">
            <a href="#something">Privacy Policy</a>
          </li>
          <li className="list-inline-item">
            <a href="#something">Terms of Use</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
  </div>
);
}

export default Landingpage