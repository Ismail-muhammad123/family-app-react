import React, { Component } from 'react'
import NavBar from '../../components/nav/NavBar';

export default class Properties extends Component {
    constructor(props){
        super(props);

        this.state = {
            family_properties: [],
        };
    }
    
    componentDidMount() {
        fetch('http://localhost/family-app/properties.php')
        .then((res)=> {
            console.log(res.data);
            return res;
        })
        .then(response => response.json())
        .then(data => this.setState({ family_properties: data }));
    }

  render() {
    const { family_properties } = this.state;

    const rows = family_properties.map((p)=><tr>
    <td>{p.id}</td>
    <td>{p.family_id}</td>
    <td>{p.name}</td>
    <td>{p.location}</td>
    <td>{p.cost}</td>
</tr> );
    return (
        <div>
        <NavBar />
        <div className='container p-3'>
        <h3>
            List of Family Properties <a href='http://localhost/family-app/forms/add_properties.php' className='btn btn-success'>Add a Family Property</a>
        </h3>
         <table class='table border'>
         <thead>
         <th>ID</th>
         <th>Family ID</th>
         <th>Name</th>
         <th>Location</th>
         <th>Cost</th>
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
