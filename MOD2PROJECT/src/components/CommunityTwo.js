import React from 'react'
import AddUsers from './AddUsers'
import ListOfUsers from './ListOfUsers'
import MoreButton from './MoreButton'

class CommunityTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      users: [],
      error:false
    }

    this.getUsers = this.getUsers.bind(this)
    this.clearUsers = this.clearUsers.bind(this)
  }

  getUsers() {
    const url = 'https://randomuser.me/api/?results=6';
    fetch(url)
    .then((respond)=>respond.json())
    .then((data)=> this.setState({users: [...this.state.users, ...data.results]}))
    .catch(error => this.setState({ error, isLoading: false }));
    this.setState({loading:true})

  }

  clearUsers() {
    this.setState({users: [],error:false})
  }

  componentDidMount(){
    this.setState({loading: false})
  }

    render() {
      const {users,error} = this.state
      const getUsers =this.getUsers
      const clearUsers = this.clearUsers
      return(

        <div className='community-wrapper'>
          <h2>DIGITAL NOMADS CLUB</h2>
          <p>Digital nomads are people who are location-independent and use technology to perform their job, living a nomadic lifestyle. <br/> They work remotely, telecommuting rather than being physically present at a company's headquarters or office.</p>
          <AddUsers handleClick={getUsers}/>
          {users.length ? <MoreButton handleClick={getUsers} clear={clearUsers}/> : ''}
          {error ? <h2>Error</h2> : ''}
          
          <ListOfUsers data={users}/>
          
        </div>

      )
    }
}

export default CommunityTwo;