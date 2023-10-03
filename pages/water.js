import Layout from '../components/layout'
import OurVision from '../components/our-vision'

export default function Water() {
  return (
    <>
      <section className='bg-gradient__water-page h-[535px] min-h-[350px] max-h-[400px] flex items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='text-white'>
                <span className='inline-block text-xl sm:text-2xl md:text-5xl lg;text-7xl uppercase font-bold font-lato'>
                  water
                </span>
                <div className='text-xl md:text-2xl font-normal mt-2'>
                  Quench their thirst, donate for safe water!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-28 pb-32'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div
                id='drilling-a-water-well-and-building-a-water-reservoir-for-the-paktika-earthquake-affected-people'
                className='flex flex-col lg:flex-row flex-wrap pb-14 border-b-2 border-accents_4 last:border-b-0'
              >
                <div className='min-h-full w-full flex-1 mr-10 flex items-center'>
                  <img src='/images/projects/arj_water_supply/4.jpg' alt='' />
                </div>
                <div className='pb-2 flex-1 mr-8 lg:mr-10'>
                  <h2 className='md:text-xl lg:text-2xl font-bold mb-6 mt-6 lg:mt-0'>
                    Drilling a water well and building a water reservoir for the Paktika
                    earthquake-affected people
                  </h2>
                  <p className='text-accents_7'>
                    Continuing our social and humanitarian activities, Arj Social Organization
                    completed a water project and put it into use for the Paktika
                    earthquake-affected people. This project provides clean drinkable water to more
                    than 300 families that are between 1,480 to 1,600 people. People in the area
                    spent hours to access water from distant areas previously. Fortunately, they now
                    have access to clean drinkable water for 24 hours/day in their own area.
                  </p>
                </div>
                <div className='mt-0 lg:mt-6 mr-8 lg:mr-10'>
                  <p className='text-accents_7'>
                    The water well was drilled in 63 meters, and the water reservoir was built to
                    provide water to the people for 3 to 4 days once it is filled. In addition,
                    solar system and other facilities required for water supply were made available
                    to the people in the area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurVision />
    </>
  )
}

Water.getLayout = (page) => {
  return (
    <Layout
      title='Water Program - Arj Social Organization'
      page='water'
      canonical='https://arj.org.af/water/'
      pageDescription=''
      jsonLD=''
    >
      {page}
    </Layout>
  )
}
