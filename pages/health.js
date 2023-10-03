import Layout from '../components/layout'
import OurVision from '../components/our-vision'

export default function Health() {
  return (
    <>
      <section className='bg-gradient__health-page h-[535px] min-h-[350px] max-h-[400px] flex items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='text-white'>
                <span className='inline-block text-xl sm:text-2xl md:text-5xl lg;text-7xl uppercase font-bold font-lato'>
                  health
                </span>
                <div className='text-xl md:text-2xl font-normal mt-2'>
                  Healthy lives, strong communities!
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
                id='donating-essential-medicine-to-the-chc-clinic-of-gayan-district-paktika-province'
                className='flex flex-col lg:flex-row flex-wrap pb-14 border-b-2 border-accents_4 last:border-b-0'
              >
                <div className='min-h-full w-full flex-1 mr-10 flex items-center'>
                  <img src='/images/projects/arj_medicine_donation/8.jpg' alt='' />
                </div>
                <div className='pb-2 flex-1 mr-8 lg:mr-10'>
                  <h2 className='md:text-xl lg:text-2xl font-bold mt-6 lg:mt-0 mb-6'>
                    Donating Essential Medicine to the CHC Clinic of Gayan District, Paktika
                    Province
                  </h2>
                  <p className='text-accents_7'>
                    Gayan district of Paktika province is the district whose residents suffered the
                    most from Paktika earthquake. With the Winter coming, Arj Social Organization
                    and Afghan Relief donated more than 19 quality medicine items purchased from the
                    most reliable medicine companies to the CHC Clinic of Gayan district in order to
                    fill the shortage and fight with the seasonal illnesses. The medicine items were
                    given to the clinic officials in a ceremony with the presence of Clinic
                    Director, physicians, and area residents which will be enough for four months
                    during cold weather.
                  </p>
                </div>
                <div className='mt-0 lg:mt-6 mr-8 lg:mr-10'>
                  <p className='text-accents_7'>
                    CHC Clinic is the only medical center in Gayan district with little and
                    insufficient facilities. Its connecting routes with the province center and
                    other districts are difficult to cross and take lots of time. It has around 160
                    to 220 patients daily.
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

Health.getLayout = (page) => {
  return (
    <Layout
      title='Health Care Programs - Arj Social Organization'
      page='health'
      canonical='https://arj.org.af/health/'
      pageDescription=''
      jsonLD=''
    >
      {page}
    </Layout>
  )
}
