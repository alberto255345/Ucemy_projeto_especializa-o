import Slider from "react-slick";

// props
interface CaroselProps {
  width?: number;
  height?: number;
}


export default function Carosel(props: CaroselProps): JSX.Element {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div style={props}>
        <Slider {...settings}>
        <div>
            <div style={{ backgroundColor: "red", width: "40px", height: "40px" }}>1</div>
        </div>
        <div>
            <div style={{ backgroundColor: "red", width: "40px", height: "40px" }}>2</div>
        </div>
        <div>
            <div style={{ backgroundColor: "red", width: "40px", height: "40px" }}>3</div>
        </div>
        <div>
            <div style={{ backgroundColor: "red", width: "40px", height: "40px" }}>4</div>
        </div>
        <div>
            <div style={{ backgroundColor: "red", width: "40px", height: "40px" }}>5</div>
        </div>
        <div>
            <div style={{ backgroundColor: "red", width: "40px", height: "40px" }}>6</div>
        </div>
        </Slider>
    </div>
  );
}
