import {useState} from 'react';
import React from 'react';
import Modal from 'react-modal'
import img_2 from '../images/img_2.jpg';
import img_4 from '../images/img_4.jpg';
import img_3 from '../images/img_3.jpg';
import {Link} from 'react-router-dom';
Modal.setAppElement("#root")

function MyModal(){

  const [modalIsOpen,setmodalIsOpen]=useState(false)
  return(
    <div>
      <div className="card">
      <div className="card-action">
        <Link   onClick={() => setmodalIsOpen(true)}>more details</Link>
        <Link to="" className="grey-text">make a Deal</Link>
      </div>
    </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setmodalIsOpen(false)}>
      <div>

        <h3 className="center-align">vehicle details</h3>
        <table className="responsive-table centered highlight striped">
      <tbody>
      <tr className="vehicle-details__row">
      <td className="vehicle-details__label">Mileage</td>
      <td className="vehicle-details__value">253 477&nbsp;Km</td>
      <td className="vehicle-details__label">Transmission</td>
      <td className="vehicle-details__value">
      Manual
      </td>
      </tr>
      <tr className="vehicle-details__row">
      <td className="vehicle-details__label">Year</td>
      <td className="vehicle-details__value">1988</td>
      <td className="vehicle-details__label">Fuel Type</td>
      <td className="vehicle-details__value">
      Petrol
      </td>
      </tr>
      <tr className="vehicle-details__row">
      <td className="vehicle-details__label">Condition</td>
      <td className="vehicle-details__value">Good</td>
      <td className="vehicle-details__label">Area</td>
      <td className="vehicle-details__value">Gauteng</td>
      </tr>
      <tr className="vehicle-details__row">
      <td className="vehicle-details__label">Colour</td>
      <td className="vehicle-details__value">WHITE</td>
      <td className="vehicle-details__label">Reference</td>
      <td className="vehicle-details__value">
      VWGK </td>
      </tr>
      <tr className="vehicle-details__row">
      <td className="vehicle-details__label">Options</td>
      <td className="vehicle-details__value" colSpan="3">
      ABS, Air bags, Alarm </td>
      </tr>
      </tbody>
      </table>
          <div className="row">
            <div className="col l6">
            <div className="card">
              <div className="card-image">
                <img className="materialboxed" src={img_2} alt="" />
              </div>
                  </div>
            </div>
            <div className="col l6">
            <div className="card">
              <div className="card-image">
                <img className="materialboxed" src={img_3} alt="" />
              </div>

            </div>
            </div>
          </div>

          <div className="row">
              <div className="col l6">
            <div className="card">
              <div className="card-image">
                  <img className="materialboxed" src={img_4} alt="" />
              </div>

            </div>
            </div>
            <div className="col l6">
            <div className="card">
              <div className="card-image">
                <img className="materialboxed" src={img_4} alt="" />
              </div>

            </div>
            </div>

          </div>
      </div>
    </Modal>
    </div>
  )
}
export default MyModal
