import './App.css';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import { Component } from 'react';


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      values : {
        gasValues: '1',
        startValues: '2',
        endValues: '3',
        otherValues: '4',
        otherValuesPFA: '5',
      },
      ciubuc: '',
    }
  }
  componentDidMount() {
    const db = firebase.database();
    // const name = db.ref('name').on('value', (elem) => {
    //   this.setState({ name: elem.val() })
    // });
    console.log(db);
  }
  handleChange = (e) => {
    this.setState({values : { ...this.state.values, [e.target.id]: e.target.value }})
  }

  sendData = (e)=>{
    e.preventDefault();
    const db = firebase.database();
    for(let i=1; i<=8;i++)
    for(let key in this.state.values){
      db.ref(`MyApp/Weeks/${i}/Monday/${key}`).push(this.state.values[key]);
      db.ref(`MyApp/Weeks/${i}/Tuesday/${key}`).push(this.state.values[key]);
      db.ref(`MyApp/Weeks/${i}/Wednesday/${key}`).push(this.state.values[key]);
      db.ref(`MyApp/Weeks/${i}/Thursday/${key}`).push(this.state.values[key]);
      db.ref(`MyApp/Weeks/${i}/Friday/${key}`).push(this.state.values[key]);
      db.ref(`MyApp/Weeks/${i}/Saturday/${key}`).push(this.state.values[key]);
      db.ref(`MyApp/Weeks/${i}/Sunday/${key}`).push(this.state.values[key]);
    }
    console.log(this.state)
  }

  render() {
    return (
      <div >
        <form onSubmit={this.sendData} className="form">
          {/* <div>
            <input
              id="gasValues"
              type="text"
              placeholder="Gas"
              value={this.state.gasValues}
              onChange={this.handleChange} />
          </div>
          <div>
            <input
              id="startValues"
              type="text"
              placeholder="Start Value"
              value={this.state.startValues}
              onChange={this.handleChange} />
          </div>

          <div>
            <input
              id="endValues"
              type="text"
              placeholder="EndValues"
              value={this.state.endValues}
              onChange={this.handleChange} />
          </div>
          <div>
            <input
              id="otherValues"
              type="text"
              placeholder="Other"
              value={this.state.otherValues}
              onChange={this.handleChange} />
          </div> */}
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

