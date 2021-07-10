import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import './bootstrap.min.css';
import { useEffect } from 'react';
import { GetDataAction } from './actions/GetDataAction';
import Header from './component/Header'
import LogIn from './component/LogIn'
import AddQuestion from './component/AddQuestion';
import LeaderBoard from './component/LeaderBoard';
import DashBoard from './component/DashBoard';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import NotFound from './component/NotFound';
import Questions from './component/Questions';
import { LinkAction } from './actions/LinkAction';


function App() {

  const dispatch = useDispatch();
  const {pathname} = useLocation()

  useEffect(() => {
    console.log('dipatch action')
    dispatch(GetDataAction())
    dispatch(LinkAction(pathname))

  }, []);

  const USER = useSelector(state => state.User)
  const { logedIn } = USER

  const Links = useSelector(state => state.Link)
  const { link } = Links
  return (
    <div className="App">
      <>
        <Header />
        <Switch>
          <Route path='/' exact>
            {logedIn ? <DashBoard /> : <Redirect to='/login' />}
          </Route>
          <Route path='/leaderboard'  exact>
            {logedIn ? <LeaderBoard /> : <Redirect to='/login' />}
          </Route>
          <Route path='/add'  exact>
            {logedIn ? <AddQuestion /> : <Redirect to='/login' />}
          </Route>
          <Route path='/questions/:id'  exact>
            {logedIn ? <Questions /> : <Redirect to='/login' />}
          </Route>
          <Route path='/login'   exact>
          {logedIn ? <Redirect to={link} /> : <LogIn/>}
          </Route>
          <Route component={NotFound}  exact/>
        </Switch>
      </>
    </div>
  );
}

export default App;
