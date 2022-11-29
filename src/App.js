import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from "./store/auth-context";

const App = () => {

    const ctx = useContext(AuthContext);

    //onLogout is a prop, for the logoutHandler, that we are passing to another component(MainHeader)
    //then to tne Navigation component
    return (
        <React.Fragment>
            <MainHeader onLogout={ctx.logoutHandler}/>
            <main>
                {!ctx.isLoggedIn && <Login onLogin={ctx.loginHandler}/>}
                {ctx.isLoggedIn && <Home onLogout={ctx.logoutHandler}/>}
            </main>
        </React.Fragment>
    );
}

export default App;