import Slider from 'react-slick'

export default function HeroCarousel() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={`slick-carousel__custom-row ${className} block text-accents_9 right-24 z-50`}
        style={{ ...style }}
        onClick={onClick}
      />
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={`slick-carousel__custom-row ${className} block text-accents_9 left-24 z-50`}
        style={{ ...style }}
        onClick={onClick}
      />
    )
  }

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    className: 'center',
    centerPadding: '60px',
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <Slider {...settings}>
      <div className='relative'>
        <img
          src='/images/projects/arj_school_stationary_donation/5.JPG'
          alt=''
          className='h-[210.5px] md:h-screen w-full object-cover'
        />
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full opacity-100 transition-custom bg-gradient__section-hero-slider'>
          <div className='absolute top-1/2 transform -translate-y-1/2 left-8 md:left-44 lg:left-52 text-white'>
            <span className='block text-2xl sm:text-5xl lg:text-7xl xl:text-8xl pb-4 font-bold font-lato text-tertiary max-w-6xl'>
              Invest in Education
            </span>
            <span className='block text-xl md:text-2xl lg:text-4xl'>
              Empower Future Generations!
            </span>
          </div>
        </div>
      </div>
      <div className='relative'>
        <img
          src='/images/emergency-response.png'
          alt=''
          className='md:h-screen w-full object-cover'
        />
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full opacity-100 transition-custom bg-gradient__section-hero-slider'>
          <div className='absolute top-1/2 transform -translate-y-1/2 left-8 md:left-44 lg:left-52 text-white'>
            <span className='block text-2xl sm:text-5xl lg:text-7xl xl:text-8xl pb-4 font-bold font-lato text-tertiary max-w-6xl'>
              Support Emergency Response
            </span>
            <span className='block text-xl md:text-2xl lg:text-4xl'>Save Lives Today!</span>
          </div>
        </div>
      </div>
      <div className='relative'>
        <img
          src='/images/projects/arj_medicine_donation/8.jpg'
          alt=''
          className='md:h-screen w-full object-cover'
        />
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full opacity-100 transition-custom bg-gradient__section-hero-slider'>
          <div className='absolute top-1/2 transform -translate-y-1/2 left-8 md:left-44 lg:left-52 text-white'>
            <span className='block text-2xl sm:text-5xl lg:text-7xl xl:text-8xl pb-4 font-bold font-lato text-tertiary max-w-6xl'>
              Donate for Health
            </span>
            <span className='block text-xl md:text-2xl lg:text-4xl'>
              Bring Hope and Healing to Communities!
            </span>
          </div>
        </div>
      </div>
    </Slider>
  )
}
