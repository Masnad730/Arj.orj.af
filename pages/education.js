import Layout from '../components/layout'
import OurVision from '../components/our-vision'

export default function Education() {
  return (
    <>
      <section className='bg-gradient__education-page h-[535px] min-h-[350px] max-h-[400px] flex items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='text-white'>
                <span className='inline-block text-xl sm:text-2xl md:text-5xl lg;text-7xl uppercase font-bold font-lato'>
                  education
                </span>
                <div className='text-2xl font-normal mt-2'>
                  Education transforms lives, be the catalyst!
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
              <div className='flex flex-wrap pb-14 border-b-2 border-accents_4 last:border-b-0'>
                <div className='min-h-full w-full flex-1 mr-10 flex items-center'>
                  <img src='/images/projects/arj_school_stationary_donation/2.JPG' alt='' />
                </div>
                <div className='pb-2 flex-1 mr-10'>
                  <h2 className='text-2xl font-bold mb-6'>
                    Educational Support for Local School in Paktika
                  </h2>
                  <p className='text-accents_7'>
                    Provided bags filled with stationery, including 12 notebooks, rulers, pens,
                    pencils, erasers, and sharpeners (2 of each) to support all students from Grade
                    1 to 6 in a local school in Paktika
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

Education.getLayout = (page) => {
  return (
    <Layout
      title='Support Child Education - Arj Social Organization'
      page='education'
      canonical='https://arj.org.af/education/'
      pageDescription=''
      jsonLD=''
    >
      {page}
    </Layout>
  )
}
