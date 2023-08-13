import Link from 'next/link'

import HeroCarousel from '../components/hero-carousel'
import OurVision from '../components/our-vision'
import GetInvolved from '../components/get-involved'
import Layout from '../components/layout'

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <section className='py-24'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className=''>
                <img className='rounded-lg' src='/images/projects/arj_water_supply/6.jpg' alt='' />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='pt-10 px-12'>
                <h2 className='text-sm font-bold pb-3'>Arj Social Organization</h2>
                <span className='inline-block text-3xl font-playfair pb-7'>
                  Act Now, Save Lives
                </span>
                <div>
                  <p>
                    In the heart of Afghanistan's struggle, ASO envisions a world where every
                    individual can thrive, despite challenging circumstances. We are dedicated to
                    empowering lives and fostering sustainable development in Afghanistan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurVision />
      <section className='mt-8'>
        <GetInvolved />
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
                <a
                  href='https://gofund.me/aa9fdf48'
                  target='_blank'
                  className='inline-block bg-primary px-2 mt-12'
                >
                  <button>Donate Now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-32 pb-20'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-lg-9'>
              <div className='text-center mb-14'>
                <span className='block text-2xl text-accents_6 mb-3'>
                  THANK YOU FOR YOUR CONTINUED SUPPORT
                </span>
                <div className='block text-xl'>Arj Social Organization's Fund Updates</div>
              </div>
            </div>
          </div>
          <div className='row border-t-2 border-accents_4'>
            <div className='col-lg-4'>
              <div className='mt-3'>
                <img src='./images/projects/arj_water_supply/6.jpg' alt='' />
                <div className='relative'>
                  <div className='before:content-[" "], before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-accents_2'>
                    <div className='bg-white -translate-y-4 p-8 mx-4'>
                      <h2 className='tracking-wider font-bold mb-2'>
                        Drilling a water well and building a water reservoir for the Paktika
                        earthquake-affected people
                      </h2>
                      <span className='inline-block pb-4 text-sm'>May 2023</span>
                      <p className='text-accents_6 mb-6'>
                        Continuing our social and humanitarian activities, Arj Social Organization
                        completed a water project and put it into use for the Paktika
                        earthquake-affected people.
                      </p>
                      <div className='bg-tertiary max-w-max px-4 py-2'>
                        <Link
                          href='/water#drilling-a-water-well-and-building-a-water-reservoir-for-the-paktika-earthquake-affected-people'
                          className='font-playfair'
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mt-3'>
                <img src='./images/projects/arj_tree_planting/2.jpg' alt='' />
                <div className='relative'>
                  <div className='before:content-[" "], before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-accents_2'>
                    <div className='bg-white -translate-y-4 p-8 mx-4'>
                      <h2 className='tracking-wider font-bold mb-2'>
                        Arj Social Organization's initiative for holding tree-planting program in
                        Kabul City
                      </h2>
                      <span className='inline-block pb-4 text-sm'>March 2023</span>
                      <p className='text-accents_6 mb-6'>
                        Continuing its cultural, social, and humanitarian activities, Arj Social
                        Organization donated 300 trees to Kabul Municipality on Mar 15, 2023 for
                        promoting the green environment in Kabul City.
                      </p>
                      <div className='bg-tertiary max-w-max px-4 py-2'>
                        <Link
                          href='/environment#arj-social-organizations-initiative-for-holding-tree-planting-program-in-kabul-city'
                          className='font-playfair'
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mt-3'>
                <img src='./images/projects/arj_medicine_donation/8.jpg' alt='' />
                <div className='relative'>
                  <div className='before:content-[" "], before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-accents_2'>
                    <div className='bg-white -translate-y-4 p-8 mx-4'>
                      <h2 className='tracking-wider font-bold mb-2'>
                        Donating Essential Medicine to the CHC Clinic of Gayan District, Paktika
                        Province
                      </h2>
                      <span className='inline-block pb-4 text-sm'>Feb 2023</span>
                      <p className='text-accents_6 mb-6'>
                        Gayan district of Paktika province is the district whose residents suffered
                        the most from Paktika earthquake. With the Winter coming, Arj Social
                        Organization and Afghan Relief donated more than 19 quality medicine
                      </p>
                      <div className='bg-tertiary max-w-max px-4 py-2'>
                        <Link
                          href='/health#donating-essential-medicine-to-the-chc-clinic-of-gayan-district-paktika-province'
                          className='font-playfair'
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Arj Social Organization'
      page='home'
      canonical='https://arj.org.af/'
      pageDescription=''
      jsonLD=''
    >
      {page}
    </Layout>
  )
}
