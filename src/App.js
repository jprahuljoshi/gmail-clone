import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Mail from './Mail/Mail';
import EmailList from './EmailList/EmailList';
import SendMail from './SendMail/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Login/Login';
import { auth } from './Firebase/firebase';


function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //user is logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        }))
      }
    })
  }, [])

  return (
    <Router>

      {!user ? (
        <Login></Login>
      ) : (
        <div className="app">

          <Header></Header>

          <div className='app__body'>

            <Sidebar></Sidebar>

            <Switch>
              <Route path='/mail'>
                <Mail></Mail>
              </Route>
              <Route path='/'>
                <EmailList></EmailList>
              </Route>
            </Switch>
          </div>

          {sendMessageIsOpen && <SendMail></SendMail>}


        </div>
      )}

    </Router>
  );
}

export default App;
