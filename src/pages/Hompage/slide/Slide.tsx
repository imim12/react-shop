import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import styles from './Slide.module.scss'
import { Link, useNavigate } from 'react-router-dom'

const Slide = () => {

  const navigate = useNavigate();

  const settings = {
    dots : true,
    infinite : true,
    speed : 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  }

  return (
    <>
    <br/>
    <div className='carousel'>
      <Slider { ...settings }>
        <div className={styles.slide}>
          <Link to={"/product/14"}>
            <img src="img/1.png" alt="배너이미지1"/>
          </Link>
        </div>
        <div className={styles.slide}>
          <Link to={"/product/15"}>
            <img src="img/2.png"  alt="배너이미지2"/>
          </Link>
        </div>
      </Slider>
    </div>
    <br/>
    <br/>
    </>
  )
}

export default Slide