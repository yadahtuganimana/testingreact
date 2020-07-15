import {useState} from 'react';
import React from 'react';
import Footer from './Footer';
import car_2 from '../images/car_2.jpg'
function AboutUs(){
return(
<div>

  <section className="section Container">
    <div className="row">
        <h2 className="center grey-text">Our Services</h2>
      <div className="col l4">
      <div className="">

              <div className="card-content">
          <h4 className="grey-text">fRental Cars</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa impedit, quam maiores minima? Culpa, praesentium iusto rem dignissimos, ut ratione iure ipsam quod deserunt perferendis cumque cupiditate voluptatem, tempora fugiat?</p>
        </div>
      </div>
      </div>
      <div className="col l4">
      <div className="">
              <div className="card-content">
        <h4 className="grey-text">Lots of location</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa impedit, quam maiores minima? Culpa, praesentium iusto rem dignissimos, ut ratione iure ipsam quod deserunt perferendis cumque cupiditate voluptatem, tempora fugiat?</p>
        </div>
      </div>
      </div>
      <div className="col l4">
      <div className="">
              <div className="card-content">
          <h4 className="grey-text">24/7 Car Support</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa impedit, quam maiores minima? Culpa, praesentium iusto rem dignissimos, ut ratione iure ipsam quod deserunt perferendis cumque cupiditate voluptatem, tempora fugiat?</p>
        </div>
      </div>
      </div>

    </div>
    <div className="row">
      <div className="col l4">
      <img className="responsive-img" src={car_2} alt=""/>
      </div>
      <div className="col l7">
       <h4 className="center grey-text">Choosing Best Car</h4>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel neque perferendis dolore consequatur quibusdam nesciunt! Ex illo dolorum ab odit maiores corporis molestiae a, aliquam, facilis, nesciunt magni reprehenderit enim! </p>
      </div>
    </div>
    </section>
    <Footer />
</div>
 )
}
export default AboutUs
