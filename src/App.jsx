import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import LoginButton from "./auth0/loginButton";
import { withAuth0,useAuth0 } from '@auth0/auth0-react';
import LogoutButton from "./auth0/logoutButton";
import Login from "./auth0/login";
import Loading from "./auth0/loading";
import { UserPage } from "./auth0/user";
import { addUser,getAllUsers } from "./users/users";
import { Users } from "./users/reactUsers";
import { BrowserRouter, Route } from "react-router-dom";  // import router for 2 page directory
import Header from "./Components/Header"; // import header object
import Banner from "./Components/Banner";
import AssetTable from "./Components/AssetTable";
import Homepage from "./Pages/Homepage"; // import homepage object
import Assetpage from "./Pages/Assetpage";
import PortfolioCharts from "./Components/PortfolioCharts";
import Sidebar from "./Components/Sidebar";
import { LineChart } from "./charts/LineChart";
import { Container } from '@mui/system';
import { Overallpage } from "./Pages/Overallpage";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={users:[]};
  }
  
  onLoggedIn(user){
    let userObj={
      lastName:user.family_name,
      firstName:user.given_name,
      emailAddress:user.email,
    }
    addUser(userObj);
  }

  getUsers(){
    getAllUsers().then(
      (users)=>{
          this.setState({users:users});
      }
  );
  }

  componentDidMount(){
  }
  
  render() {
    const {user, isAuthenticated,isLoading } = this.props.auth0;
    if(isAuthenticated&&!isLoading){this.onLoggedIn(user)};
    if(!isAuthenticated){
      return <Login />
    }
    return (
      
      <BrowserRouter>
      <React.Fragment>
        {(!isAuthenticated &&!isLoading) &&<Login />}
        <div>
        <div className="container-fluid overflow-hidden " >
          <div className="row" style={{boxShadow:'0 0px 5px grey'}}>
          < Header />
          < Banner />
          </div>
          <div className="row  overflow-auto" style={{height:'78vh'}}>
            <div className="col-12 col-sm-2 col-xl-2  d-flex sticky-top p-0" >
              <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start text-white">
                < Sidebar />
              </div>
            </div>

            <div className="col-sm-10 d-flex flex-column h-sm-100" >
              <div className="row overflow-auto">
                <div className="col">
                  <Overallpage />
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* <Container>
            <div className="row">
              <div className="col">
                
              <h2>Portfolio Value:
                <br />
                $40,000
              </h2>
              <br />
              <LineChart ticker="spy"
              displayDiff={false}
                margin={{right:40,left:40,bottom:50,top:30}}
                lineWidth='3px'
                width={1150}
               endDate={new Date()} startDate={new Date(new Date().setFullYear(new Date().getFullYear()-1))}/>

              </div>
            </div>
          </Container>
          <hr />
          < PortfolioCharts />
          < AssetTable />  */}
          {/* < Route path = "/" component={Homepage} /> 
          < Route path = "/asset/:id" component={Assetpage} /> */}

        <div className="container">
              <hr />
              {(isAuthenticated &&!isLoading)&&
              <><div className="row">
              <div className="col-xs-12">
              </div>
              <hr />
              <UserPage />
              </div> <hr /> </>
            }
            {isLoading && <Loading />}
      </div>
        </div>
  
        </React.Fragment>
        </BrowserRouter>
    );
  }
}

export default withAuth0(App) ;
