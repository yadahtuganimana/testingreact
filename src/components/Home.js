import React,{Component} from 'react';
import homecss from '../homecss.css';
import img_1 from '../images/img_1.jpg';
import img_2 from '../images/img_2.jpg';
import img_4 from '../images/img_4.jpg';
import {Link} from 'react-router-dom';
import MyModal from './MyModal'
import MySecondModal from './MySecondModal'
import MyThirdModal from './MyThirdModal'
import Footer from './Footer'
import AboutUs from './AboutUs'
import Form from './Form'
//import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";
class Home extends Component {

  render(){

    return(
        <div>
          <div className="back responsive-img"></div>



          <div>
            <div className="row">
              <div className="col l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src={img_2} alt=""/>
                </div>
                <div className="card-content">
                  <span className="card-title">VOXWAGEN</span>
                  <div className="">
                    <span className="btn white red-text line">10 USD</span>&nbsp;<span className="btn white green-text">8 USD <i className="material-icons right">check</i></span>
                  </div>
                </div>
                <MyModal />
              </div>
              </div>
              <div className="col l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src={img_4} alt=""/>
                </div>
                <div className="card-content">
                  <span className="card-title">VOXWAGEN</span>
                  <div className="">
                    <span className="btn white red-text line">10 USD</span>&nbsp;<span className="btn white green-text">8 USD <i className="material-icons right">check</i></span>
                  </div>
                </div>
                <MySecondModal />
              </div>
              </div>
              <div className="col l4">
              <div className="card">
                <div className="card-image">
                  <img className="materialboxed" src={img_1} alt=""/>
                </div>
                <div className="card-content">
                  <span className="card-title">VOXWAGEN</span>
                  <div className="">
                    <span className="btn white red-text line">10 USD</span>&nbsp;<span className="btn white green-text">8 USD <i className="material-icons right">check</i></span>
                  </div>
                </div>
                <MyThirdModal />
              </div>
              </div>
            </div>


          </div>

          <section className="section ">
            <div className="row z-depth-1">
              <ul className="tabs center-align white ">
                <li className="tab col l6 s6 m6 white black-text" active>
                   <Link to="#what ">WHAT I DO</Link>
                </li>
                <li className="tab col l6 s6 m6 white black-text">
                <Link to="#exp">EXPERIENCE</Link>
                </li>
              </ul>
             <div className="l12 col" id="what" >
               <h3 className="center-align">WHAT I DO</h3>
               <p className="center-align">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus, eos. Suscipit atque, aliquid, laborum iusto alias tempora maxime porro illum doloribus possimus ducimus! Repellendus, iste modi voluptates ratione assumenda.</p>
             </div>
             <div className="l12 col" id="exp">
               <h3 className="center-align">EXPERIENCE</h3>
               <p className="center-align">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus, eos. Suscipit atque, aliquid, laborum iusto alias tempora maxime porro illum doloribus possimus ducimus! Repellendus, iste modi voluptates ratione assumenda.</p>
             </div>
            </div>
          </section>

        <Footer />
      <Form />
        </div>
    )
  }
}
export default Home
