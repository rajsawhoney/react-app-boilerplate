import React,{lazy,Suspense,useEffect} from "react";
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { refresh_user_auth } from "./redux/actions/accounts/refresh_user_auth";
import { set_profile } from "./redux/actions/accounts/set_profile";
import { connect } from "react-redux";
const WalletTransactions = lazy(()=>import('./components/pages/WalletTransactions'));
const LoginPage = lazy(() => import("./components/accounts/LoginPage"));
const Sidebar = lazy(()=>import('./components/layout/Sidebar'));

function App({refresh_user_auth,set_profile,is_authenticated}) {
  useEffect(() => {
    // refreshes the user status basically the access token after each 5 minutes
    setInterval(() => {
      refresh_user_auth();
    }, 60 * 5 * 1000);
  }, [refresh_user_auth]);

  useEffect(() => {
    refresh_user_auth();
    set_profile();
  }, [is_authenticated,set_profile,refresh_user_auth])

  return (
      <Suspense fallback={<h1>Loading</h1>}>
    <div className="App">
      <Router>
          <div className="app__navbar">            
            <Navbar/>
          </div>
        <Switch>
        <Route path="/accounts/login" component={() => <LoginPage/>} />
        <div className="app__body">
            <div className="app__sidebar">
            <Route path="/dashboard" component={() => <Sidebar/>} />
            </div>
            <div className="app__content">
              <Route
                exact
                path="/dashboard/admin/wallet-load/transactions"
                component={WalletTransactions}
                />
            </div>
        </div>
        </Switch>
      </Router>
    </div>
    </Suspense>
  );
}

const mapStateToProps = (state) => ({
  is_authenticated:state.accounts.is_authenticated
})

export default connect(mapStateToProps,{refresh_user_auth,set_profile})(App);
