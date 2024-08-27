import sliderImg1 from "../../assets/slider-image-1.jpeg";
import sliderImg2 from "../../assets/slider-image-2.jpeg";
import sliderImg3 from "../../assets/slider-image-3.jpeg";
import sliderImg4 from "../../assets/slider-2.jpeg";
import bannerImg1 from "../../assets/grocery-banner.png";
import bannerImg2 from "../../assets/grocery-banner-2.jpeg";
import Slider from "react-slick";
function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  };
  return (
    <>
      <div className="row mb-5 align-items-center">
        <div className="col-md-8 m-0 p-0 sliderImages">
        <Slider {...settings}>
          <img className="w-100" src={sliderImg1} alt="" />
          <img className="w-100" src={sliderImg2} alt="" />
          <img className="w-100" src={sliderImg3} alt="" />
          <img className="w-100" src={sliderImg4} alt="" />
          </Slider>
        </div>

        <div className="col-md-4 m-0 p-0 bannerImages">
          <img className="w-100" src={bannerImg1} alt="" />
          <img className="w-100"  src={bannerImg2} alt="" />
        </div>
      </div>
    </>
  );
}

export default MainSlider;
