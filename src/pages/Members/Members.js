import React, { Component } from 'react'
import NavBar from '../../components/nav/NavBar';

export default class Members extends Component {

    constructor(props){
        super(props);

        this.state = {
            members: [],
        };
    }
    
    componentDidMount() {
        fetch('http://localhost/family-app/members.php')
        .then((res)=> {
            console.log(res.data);
            return res;
        })
        .then(response => response.json())
        .then(data => this.setState({ members: data }));
    }

  render() {
    const { members } = this.state;

    const rows = members.map((family)=><tr>
    <td>{family.id}</td>
    <td>{family.family_id}</td>
    <td>{family.name}</td>
    <td>{family.date_of_birth}</td>
    <td>{family.phone}</td>
    <td>{family.address}</td>
</tr> );
    return (
        <div>
        <NavBar />
        <div className='container p-3'>
        <h3>
            List of Family Members <a href='http://localhost/family-app/forms/add_members.php' className='btn btn-success'>Add a Family Member</a>
        </h3>
         <table class='table border'>
         <thead>
         <th>ID</th>
         <th>Family ID</th>
         <th>Name</th>
         <th>Date of Birth</th>
         <th>Phone Number</th>
         <th>Address</th>
         </thead>
        <tbody>
            {rows}
        </tbody>
         </table>
        </div>
      </div>
    )
  }
}
