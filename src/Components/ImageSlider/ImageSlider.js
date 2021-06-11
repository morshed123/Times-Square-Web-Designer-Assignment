import React from 'react';
import { FaSortAmountUpAlt } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const ImageSlider = () => {

  return (
    <div class=" p-5 w-100 h-0" >
      <Carousel >
        <div >
          <img src="https://www.cnet.com/a/img/vAwdGTTshN7V5gqG3OuOg79gmIo=/940x0/2016/03/16/09d5916e-1129-48ae-8f70-ab16f11fa580/fd-samsung-galaxy-s7-edge-product-hero-2.jpg" class=" w-100 h-25" alt="image 1...." />
          <p class="position-absolute bottom-0 start-0 fs-1 btn btn-warning fw-bolder">SHOP NOW</p>
          <p class="position-absolute top-50 start-0 translate-middle-y translate-middle fs-1 btn btn-warning fw-bolder ">SAVINES EVENT</p>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpog2HYuzXW2ky1Ixb-cZ7x7FUgqwcQJ1uKQ&usqp=CAU" class=" w-100 " alt="image 2...." />
          <p class="position-absolute bottom-0 start-0 fs-1 btn btn-warning fw-bolder">SHOP NOW</p>
          <p class="position-absolute top-50 start-0 translate-middle-y translate-middle fs-1 btn btn-warning fw-bolder">SAVINES EVENT</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHNhbXN1bmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" class=" w-100 h-25" alt="image 3...." />
          <p class="position-absolute bottom-0 start-0 fs-1 btn btn-warning fw-bolder" >SHOP NOW</p>
          <p class="position-absolute top-50 start-0 translate-middle-y fs-1 btn btn-warning fw-bolder" >SAVINES EVENT</p>
        </div>
      </Carousel>
    </div>

  );
};

export default ImageSlider;
