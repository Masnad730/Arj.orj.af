import Link from 'next/link'

import Layout from '../../../components/layout'

export default function LatestNews() {
  return (
    <>
      <section className='bg-gradient__video-lib-page h-[535px] min-h-[350px] max-h-[400px] flex items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='text-white'>
                <span className='inline-block text-xl sm:text-2xl md:text-5xl lg;text-7xl uppercase font-bold font-lato'>
                  latest news
                </span>
                <div className='text-2xl font-normal mt-2'>Discover all of our latest news,</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-24 pb-8'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='pb-14 group cursor-pointer'>
                <div className='relative'>
                  <img
                    src='/images/projects/arj_water_supply/6.jpg'
                    alt=''
                    className='block w-full h-auto'
                  />
                  <div className='group-hover:absolute group-hover:top-0 group-hover:left-0 group-hover:w-full group-hover:h-full group-hover:opacity-100 group-hover:bg-tertiary-overlay-color'></div>
                </div>
                <div className='p-4'>
                  <h2 className='text-2xl font-bold mb-4'>
                    <Link
                      href='/water#drilling-a-water-well-and-building-a-water-reservoir-for-the-paktika-earthquake-affected-people'
                      className='group-hover:underline decoration-tertiary'
                    >
                      Drilling a water well and building a water reservoir for the Paktika
                      earthquake-affected people
                    </Link>
                  </h2>
                  <p className='text-accents_7 font-playfair'>
                    Continuing our social and humanitarian activities, Arj Social Organization
                    completed a water project and put it into use for the Paktika
                    earthquake-affected people.
                  </p>
                  <div className='flex items-center pt-10 text-sm font-bold text-accents_7'>
                    <i className='fa fa-calendar text-tertiary'></i>
                    <span className='inline-block ml-2'>
                      4<sup>th</sup> May, 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='pb-14 group cursor-pointer'>
                <div className='relative'>
                  <img
                    src='/images/projects/arj_tree_planting/2.jpg'
                    alt=''
                    className='block w-full h-auto'
                  />
                  <div className='group-hover:absolute group-hover:top-0 group-hover:left-0 group-hover:w-full group-hover:h-full group-hover:opacity-100 group-hover:bg-tertiary-overlay-color'></div>
                </div>
                <div className='p-4'>
                  <h2 className='text-2xl font-bold mb-4'>
                    <Link
                      href='/environment#arj-social-organizations-initiative-for-holding-tree-planting-program-in-kabul-city'
                      className='group-hover:underline decoration-tertiary'
                    >
                      Arj Social Organization's initiative for holding tree-planting program in
                      Kabul City
                    </Link>
                  </h2>
                  <p className='text-accents_7 font-playfair'>
                    Continuing its cultural, social, and humanitarian activities, Arj Social
                    Organization donated 300 trees to Kabul Municipality on Mar 15, 2023 for
                    promoting the green environment in Kabul City.
                  </p>
                  <div className='flex items-center pt-10 text-sm font-bold text-accents_7'>
                    <i className='fa fa-calendar text-tertiary'></i>
                    <span className='inline-block ml-2'>
                      15<sup>th</sup> March, 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='pb-14 group cursor-pointer'>
                <div className='relative'>
                  <img
                    src='/images/projects/arj_medicine_donation/8.jpg'
                    alt=''
                    className='block w-full h-auto'
                  />
                  <div className='group-hover:absolute group-hover:top-0 group-hover:left-0 group-hover:w-full group-hover:h-full group-hover:opacity-100 group-hover:bg-tertiary-overlay-color'></div>
                </div>
                <div className='p-4'>
                  <h2 className='text-2xl font-bold mb-4'>
                    <Link
                      href='/health#donating-essential-medicine-to-the-chc-clinic-of-gayan-district-paktika-province'
                      className='group-hover:underline decoration-tertiary'
                    >
                      Donating Essential Medicine to the CHC Clinic of Gayan District, Paktika
                      Province
                    </Link>
                  </h2>
                  <p className='text-accents_7 font-playfair'>
                    Gayan district of Paktika province is the district whose residents suffered the
                    most from Paktika earthquake.
                  </p>
                  <div className='flex items-center pt-10 text-sm font-bold text-accents_7'>
                    <i className='fa fa-calendar text-tertiary'></i>
                    <span className='inline-block ml-2'>
                      23<sup>th</sup> Jan, 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='pb-14 group cursor-pointer'>
                <div className='relative'>
                  <img
                    src='/images/projects/arj_paktika_house/7.jpg'
                    alt=''
                    className='block w-full h-auto'
                  />
                  <div className='group-hover:absolute group-hover:top-0 group-hover:left-0 group-hover:w-full group-hover:h-full group-hover:opacity-100 group-hover:bg-tertiary-overlay-color'></div>
                </div>
                <div className='p-4'>
                  <h2 className='text-2xl font-bold mb-4'>
                    <Link
                      href='/emergency-response#building-house-for-paktika-earthquake-affected-people'
                      className='group-hover:underline decoration-tertiary'
                    >
                      Building House for Paktika Earthquake-Affected People
                    </Link>
                  </h2>
                  <p className='text-accents_7 font-playfair'>
                    The little Najia and her family had their house ruined due to heavy earthquake
                    in Paktika.
                  </p>
                  <div className='flex items-center pt-10 text-sm font-bold text-accents_7'>
                    <i className='fa fa-calendar text-tertiary'></i>
                    <span className='inline-block ml-2'>
                      22<sup>th</sup> November, 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='pb-14 group cursor-pointer'>
                <div className='relative'>
                  <img
                    src='/images/projects/arj_cricket_club/3.jpg'
                    alt=''
                    className='block w-full h-auto'
                  />
                  <div className='group-hover:absolute group-hover:top-0 group-hover:left-0 group-hover:w-full group-hover:h-full group-hover:opacity-100 group-hover:bg-tertiary-overlay-color'></div>
                </div>
                <div className='p-4'>
                  <h2 className='text-2xl font-bold mb-4'>
                    <Link
                      href='/sport#arj-cricket-club-qualified-to-the-final-in-zarmalwal-tournament-and-became-runner-up'
                      className='group-hover:underline decoration-tertiary'
                    >
                      Arj Cricket Club qualified to the final in Zarmalwal Tournament and became
                      Runner-up
                    </Link>
                  </h2>
                  <p className='text-accents_7 font-playfair'>
                    Upon foundation, Arj Cricket Club participated in Zarmalwal Tournament as the
                    first official cricket tournament for the team.
                  </p>
                  <div className='flex items-center pt-10 text-sm font-bold text-accents_7'>
                    <i className='fa fa-calendar text-tertiary'></i>
                    <span className='inline-block ml-2'>
                      18<sup>th</sup> August, 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

LatestNews.getLayout = (page) => {
  return (
    <Layout
      title='Latest News - Arj Social Organization'
      page='latest-news'
      canonical='https://arj.org.af/news/category/latest-news/'
      pageDescription=''
      jsonLD=''
    >
      {page}
    </Layout>
  )
}
