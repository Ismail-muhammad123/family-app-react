import React, { Component } from 'react'
import pic2 from "./assets/pic 2.png";
import pic1 from "./assets/pic1.jpg";
import "./Styles.css";

export default class HomePage extends Component {
  render() {
    return (
        <div>
            <section>
                <center>
                    <p>
                        <img src={pic2} alt="" className='images' />
                        <img src={pic1} alt="" className='images' />
                    </p>
                </center>
            </section>
        </div>
    )
  }
}
