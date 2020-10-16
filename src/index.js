import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';
import Vamp10 from "./Assets/Vamp10.jpg";

const tag= (
    <div>
<div style={{backgroundColor:'aqua',textAlign:'center',fontSize:'24px',marginBottom:'20px'}}>
    <Header/>
     <p>FrontEnd</p>
     </div>

<div style={{backgroundColor:'green',textAlign:'center',fontSize:'24px'}}>
    <Slider/>
    <ul>
        <li style={{listStyle:'none'}}>React JS</li>
        <li style={{listStyle:'none'}}>Html</li>
        <li  style={{listStyle:'none'}}>Css</li>
        
    </ul>
    <img src={Vamp10} alt="vamp10" height="300px" width="250px" />
    
</div>
<div style={{backgroundColor:'red',textAlign:'center',fontSize:'24px'}}>
    <Footer/>
    <p>Dibash Thapa</p>
</div>
</div>

);

ReactDOM.render(tag, document.getElementById("root"))
