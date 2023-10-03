import Layout from '../components/layout'
import OurVision from '../components/our-vision'

export default function JobCreationAndEmpowerment() {
  return (
    <>
      <section className='bg-gradient__sport-page h-[535px] min-h-[350px] max-h-[400px] flex items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='text-white'>
                <span className='inline-block text-xl sm:text-2xl md:text-5xl lg;text-7xl uppercase font-bold font-lato'>
                  sport
                </span>
                <div className='md:text-xl lg:text-2xl font-normal mt-2'></div>
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
                id='arj-cricket-club-qualified-to-the-final-in-zarmalwal-tournament-and-became-runner-up'
                className='flex flex-wrap flex-col lg:flex-row pb-14 border-b-2 border-accents_4 last:border-b-0'
              >
                <div className='min-h-full w-full flex-1 mr-10 flex items-center'>
                  <img src='/images/projects/arj_cricket_club/3.jpg' alt='' />
                </div>
                <div className='pb-2 flex-1 mr-8 lg:mr-10'>
                  <h2 className='md:text-xl lg:text-2xl font-bold mb-6 mt-6 lg:mt-0'>
                    Arj Cricket Club qualified to the final in Zarmalwal Tournament and became
                    Runner-up
                  </h2>
                  <p className='text-accents_7'>
                    Upon foundation, Arj Cricket Club participated in Zarmalwal Tournament as the
                    first official cricket tournament for the team. The team shined at the group
                    stage and won two out of three matches which then it qualified to the
                    quarter-final. Doing a great job, the team won the matches at the quarter-final
                    and semi-final stages and reached the final.
                  </p>
                </div>
                <div className='mt-6 mr-8 lg:mr-10'>
                  <p className='text-accents_7'>
                    The final match was held between Arj Cricket Club and Zarmalwal Cricket Academy
                    that Arj Cricket Club took the Runner-up spot in the tournament. Thanks to the
                    whole team specially Safiullah Safi, Parvez Amin, and Naseeb Safi for their
                    superb performance during the tournament and taking the team to the final stage.
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
JobCreationAndEmpowerment.getLayout = (page) => {
  return (
    <Layout
      title=' - Arj Social Organization'
      page='sport'
      canonical='https://arj.org.af/sport/'
      pageDescription=''
      jsonLD=''
    >
      {page}
    </Layout>
  )
}
