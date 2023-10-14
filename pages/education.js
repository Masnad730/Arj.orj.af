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
                <div className='text-xl md:text-2xl font-normal mt-2'>
                  Education transforms lives, be the catalyst!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-16 lg:pt-28 pb-16 lg:pb-32'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div
                id='distribution-of-stationary-packages-to-the-school-students-in-gayan-district-of-paktika-province'
                className='flex flex-col lg:flex-row flex-wrap items-start pb-14 border-b-2 border-accents_4 last:border-b-0'
              >
                <div className='min-h-full w-full flex-1 mr-10 flex items-center'>
                  <img src='/images/projects/arj_school_stationary_donation/2.JPG' alt='' />
                </div>
                <div className='pb-2 flex-1 mr-8 lg:mr-10'>
                  <h2 className='text-base md:text-2xl font-bold mb-6 mt-6 lg:mt-0'>
                    Distribution of Stationary Packages to the School Students in Gayan District of
                    Paktika Province
                  </h2>
                  <p className='text-accents_7'>
                    In order to value and prioritize education for the younger generation and to
                    continue supporting the residents of Gayan district of Paktika province, Arj
                    Social Organization distributed stationary packages to more than 300 students,
                    including boys and girls, of Gayan Central High School.
                  </p>
                  <p className='text-accents_7 pt-4'>
                    Each stationary package included a school bag, notebook, pencil, pen, eraser,
                    sharpener, and ruler, aiming to promote learning, encourage the pursuit of
                    knowledge, and foster a healthy community. The distribution was carried out to
                    the students in the presence of local authorities of Ministry of Education and
                    the Gayan Central High School leadership and teachers.
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
