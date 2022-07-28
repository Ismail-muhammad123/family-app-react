import React, { Component } from 'react'
import NavBar from "../../components/nav/NavBar"

export default class Families extends Component {
    constructor(props){
        super(props);

        this.state = {
            families: [],
        };
    }
    
    componentDidMount() {
        fetch('http://localhost/family-app/families.php')
        .then((res)=> {
            console.log(res.data);
            return res;
        })
        .then(response => response.json())
        .then(data => this.setState({ families: data }));
    }

  render() {
    const { families } = this.state;

    const rows = families.map((family)=><tr>
    <td>{family[0]}</td>
    <td>{family[1]}</td>
    <td>{family[2]}</td>
</tr> );

    return (
      <div>
        <NavBar />
        <div className='container p-3'>
        <h3>
            List of Families <a href='http://localhost/family-app/forms/add_families.php' className='btn btn-success'>Add Family</a>
        </h3>
         <table class='table border'>
         <thead>
         <th>ID</th>
         <th>Name</th>
         <th>Location</th>
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
