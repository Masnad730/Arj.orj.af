import Layout from '../components/layout'
import OurVision from '../components/our-vision'

export default function Environment() {
  return (
    <>
      <section className='bg-gradient__environment-page h-[535px] min-h-[350px] max-h-[400px] flex items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='text-white'>
                <span className='inline-block text-xl sm:text-2xl md:text-5xl lg;text-7xl uppercase font-bold font-lato'>
                  environment
                </span>
                <div className='text-2xl font-normal mt-2'>
                  Protect our planet, donate for the environment
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
                id='arj-social-organizations-initiative-for-holding-tree-planting-program-in-kabul-city'
                className='flex flex-wrap pb-14 border-b-2 border-accents_4 last:border-b-0'
              >
                <div className='min-h-full w-full flex-1 mr-10 flex items-center'>
                  <img src='/images/projects/arj_tree_planting/2.jpg' alt='' />
                </div>
                <div className='pb-2 flex-1 mr-10'>
                  <h2 className='text-2xl font-bold mb-6'>
                    Arj Social Organization's initiative for holding tree-planting program in Kabul
                    City
                  </h2>
                  <p className='text-accents_7'>
                    Continuing its cultural, social, and humanitarian activities, Arj Social
                    Organization donated 300 trees to Kabul Municipality on Mar 15, 2023 for
                    promoting the green environment in Kabul City. The trees were planted in the
                    road flowerpots between Tahye Maskan Square and Parwan 2 with the help of Kabul
                    Municipality officials, Arj Social Organization's leadership and volunteers, and
                    Kabul citizens.
                  </p>
                </div>
                <div className='mt-6'>
                  <p className='text-accents_7'>
                    The program was held in coordination with Kabul Municipality officials who
                    ensured the protection and regular irrigation of the trees.
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

Environment.getLayout = (page) => {
  return (
    <Layout
      title='Protect Our Planet, Donate for the Environment - Arj Social Organization'
      page='environment'
      canonical='https://arj.org.af/environment/'
      pageDescription=''
      jsonLD=''
    >
      {page}
    </Layout>
  )
}
