import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
// import DialogsContainer from './components/Dialogs/DialigsContainer';
import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import React, { Suspense } from 'react';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/Common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialigsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render () 
  {
    if(!this.props.initialized) {
      return <Preloader />
    }
    return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper__content">
          {/* <Profile /> */}
          <Suspense fallback={<div><Preloader /></div>}>
            <Routes>
              <Route path='/profile/:userId?' element={<ProfileContainer />}/>
              <Route path='/dialogs*' element={<DialogsContainer />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/login' element={<LoginPage />} />
              
            </Routes>
          </Suspense>
          
          
        </div>
        
      
    </div>
    </BrowserRouter>
      
    
  );
}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
  // withRouter,
  connect(mapStateToProps, {initializeApp})
)
(App);
