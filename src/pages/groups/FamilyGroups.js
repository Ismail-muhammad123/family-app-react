import React, { Component } from 'react'
import NavBar from '../../components/nav/NavBar';


export default class FamilyGroups extends Component {
    constructor(props){
        super(props);

        this.state = {
            groups: [],
        };
    }
    
    componentDidMount() {
        fetch('http://localhost/family-app/family-groups.php')
        .then((res)=> {
            console.log(res.data);
            return res;
        })
        .then(response => response.json())
        .then(data => this.setState({ groups: data }));
    }

  render() {
    const { groups } = this.state;

    const rows = groups.map((group)=><tr>
    <td>{group.id}</td>
    <td>{group.name}</td>
    <td>{group.family_id}</td>
</tr> );
    return (
        <div>
        <NavBar />
        <div className='container p-3'>
        <h3>
            List of Family Groups <a href='http://localhost/family-app/forms/add_group.php' className='btn btn-success'>Add a Family group</a>
        </h3>
         <table class='table border'>
         <thead>
         <th>ID</th>
         <th>Name</th>
         <th>Family ID</th>
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
