import Slider from 'react-slick'

import Layout from '../components/layout'

export default function Gallery() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={`slick-carousel__custom-row--gallery ${className} block -right-12`}
        style={{ ...style }}
        onClick={onClick}
      />
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={`slick-carousel__custom-row--gallery ${className} block -left-12`}
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
    slidesToShow: 3,
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
    <>
      <section className='bg-gradient__banner h-[535px] min-h-[350px] max-h-[400px] flex items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='text-white'>
                <span className='inline-block text-xl sm:text-2xl md:text-5xl lg;text-7xl uppercase font-bold font-lato'>
                  our gallery
                </span>
                <div className='text-2xl font-normal mt-2'>Gallery That Worth a Thousand Word</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-28 mb-16'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div>
                <Slider {...settings}>
                  <div className='px-[18px] !flex flex-col items-center justify-center lg:px-[26px]'>
                    <img src='/images/projects/arj_water_supply/6.jpg' alt='' />
                    <div className='mt-6'>
                      <h3 className='text-accents_7 font-bold'>
                        Drilling a water well and building a water reservoir for the Paktika
                        earthquake-affected people
                      </h3>
                    </div>
                  </div>
                  <div className='px-[18px] !flex flex-col items-center justify-center lg:px-[26px]'>
                    <img src='/images/projects/arj_tree_planting/2.jpg' alt='' />
                    <div className='mt-6'>
                      <h3 className='text-accents_7 font-bold'>
                        Arj Social Organization's initiative for holding tree-planting program in
                        Kabul City
                      </h3>
                    </div>
                  </div>
                  <div className='px-[18px] !flex flex-col items-center justify-center lg:px-[26px]'>
                    <img src='/images/projects/arj_medicine_donation/8.jpg' alt='' />
                    <div className='mt-6'>
                      <h3 className='text-accents_7 font-bold'>
                        Donating Essential Medicine to the CHC Clinic of Gayan District, Paktika
                        Province
                      </h3>
                    </div>
                  </div>
                  <div className='px-[18px] !flex flex-col items-center justify-center lg:px-[26px]'>
                    <img src='/images/projects/arj_paktika_house/7.jpg' alt='' />
                    <div className='mt-6'>
                      <h3 className='text-accents_7 font-bold'>
                        Building House for Paktika Earthquake-Affected People
                      </h3>
                    </div>
                  </div>
                  <div className='px-[18px] !flex flex-col items-center justify-center lg:px-[26px]'>
                    <img src='/images/projects/arj_cricket_club/3.jpg' alt='' />
                    <div className='mt-6'>
                      <h3 className='text-accents_7 font-bold'>
                        Arj Cricket Club qualified to the final in Zarmalwal Tournament and became
                        Runner-up
                      </h3>
                    </div>
                  </div>
                  <div className='px-[18px] !flex flex-col items-center justify-center lg:px-[26px]'>
                    <img src='/images/miscellaneous-photos/1.jpg' alt='' />
                    <div className='mt-6'>
                      <h3 className='text-accents_7 font-bold'>Miscellaneous Photos</h3>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gradient__section-emergency-donation'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='text-center text-white pt-32 pb-12'>
                <h2 className='text-5xl font-bold mb-8'>Donate to save Tajala's Life</h2>
                <p className='text-accents_3'>
                  Tajala, a 13-year-old child diagnosed with cancer (Bone Marrow). The absence of
                  bone marrow is fatal since it makes all the components of blood that one needs to
                  survive. Tajala's family cannot afford her operation nor can they pay for the
                  weekly blood transfusion she needs to survive. Please follow the link below and
                  make a donation to save this child from cancer.
                </p>
                <a href='#' className='inline-block bg-primary px-2 mt-12'>
                  <button>Donate Now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Gallery.getLayout = (page) => {
  return (
    <Layout
      title='Gallery - Arj Social Organization'
      page='gallery'
      canonical='https://arj.org.af/gallery/'
      pageDescription=''
      jsonLD=''
    >
      {page}
    </Layout>
  )
}
