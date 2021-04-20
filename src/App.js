import './App.css';
import { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import { Provider } from 'react-redux';
import store from './redux/reduxStore';
import HistoryPageContainer from './pages/HistoryPage/HistoryPageContainer';
import ItemComponentContainer from './components/item-component/ItemComponentContainer';
import NewDayContainer from './pages/NewDayPage/NewDayContainer';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    // this.setState({n:getWeeks()});

  }

  handleChange = (e) => {
  
  }

  sendData = (e) => {
    e.preventDefault();

  }

  render() {
    return (
      <Provider store = {store}>

      <div className='container'>
        
        <BrowserRouter>

          <Switch>

        <Route exact path='/' render={()=> <MainPage/>}  />

        <Route path='/newDay' render={()=>( <div> <NewDayContainer/> <div className='linkBack'> <Link to='/'>Go Back</Link> </div> </div>)}/>

        <Route exact path='/show' render={()=>(<div> <HistoryPageContainer/> <div className='linkBack'> <Link to='/'> Go Back </Link> </div> </div>)}  />
        
        <Route path="/show/:weekNumber" render={() => <div> <ItemComponentContainer/> <div className='linkBack'> <Link to='/show'> Go Back </Link> </div> </div>} />
        
        <Route path='/other' render={()=>( <div> Other <div className='linkBack'> <Link to='/'> Go Back </Link> </div> </div>)}  />
        </Switch>

        </BrowserRouter>

      </div>

          </Provider>
    )
  }
}



