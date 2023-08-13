import Layout from '../components/layout'
import OurVision from '../components/our-vision'

export default function EmergencyResponse() {
  return (
    <>
      <section className='bg-gradient__emergency-page h-[535px] min-h-[350px] max-h-[400px] flex items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='text-white'>
                <span className='inline-block text-xl sm:text-2xl md:text-5xl lg;text-7xl uppercase font-bold font-lato'>
                  emergency response
                </span>
                <div className='text-2xl font-normal mt-2'>
                  Together we heal, support emergency relief!
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
                id='building-house-for-paktika-earthquake-affected-people'
                className='flex flex-wrap pb-14 border-b-2 border-accents_4 last:border-b-0'
              >
                <div className='min-h-full w-full flex-1 mr-10 flex items-center'>
                  <img src='/images/projects/arj_paktika_house/7.jpg' alt='' />
                </div>
                <div className='pb-2 flex-1 mr-10'>
                  <h2 className='text-2xl font-bold mb-6'>
                    Building House for Paktika Earthquake-Affected People
                  </h2>
                  <p className='text-accents_7'>
                    The little Najia and her family had their house ruined due to heavy earthquake
                    in Paktika. Arj Social Organization and Afghan Relief together decided to bring
                    the little Najia and her family to the center of Khost with better living
                    facilities from a remote area in Khost where life was difficult for them. A more
                    resistant house was built for them with the help of both organizations and the
                    house ownership deed was given to Najia’s father, Nik Padshah, in the opening
                    ceremony of the house in the presence of Khost governmental officials and other
                    residents.
                  </p>
                </div>
                <div className='mt-6'>
                  <p className='text-accents_7'>
                    The little Najia and her brother now are far from the past difficulties and can
                    live with good living facilities (educational, medical, and social) and think
                    about their future. Previously, Najia was exposed to the media with bare feet
                    and no home to live at, but they received house facilities and clothing and were
                    built a house with the contribution of generous people and initiative of Arj
                    Social Organization and Afghan Relief.
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

EmergencyResponse.getLayout = (page) => {
  return (
    <Layout
      title='Disaster Management | Emergency Response - Arj Social Organization'
      page='emergency-response'
      canonical='https://arj.org.af/emergency-response/'
      pageDescription=''
      jsonLD=''
    >
      {page}
    </Layout>
  )
}
