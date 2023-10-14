import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'

import Layout from '@/components/layout'

export default function DistributionOfStationaryPackages() {
  const [index, setIndex] = useState(-1)
  return (
    <>
      <section className='pt-20 pb-14'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-lg-9'>
              <div className='mb-12 text-center'>
                <h2 className='text-xl md:text-2xl lg:text-3xl text-accents_6'>
                  Distribution of Stationary Packages to the School Students in Gayan District of
                  Paktika Province
                </h2>
                <div className='pt-2 text-lg'>Project Photos</div>
              </div>
            </div>
          </div>
          <div className='row justify-center'>
            <div className='col-lg-10'>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_school_stationary_donation/1.JPG'
                      alt=''
                      onClick={() => setIndex(0)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_school_stationary_donation/2.JPG'
                      alt=''
                      onClick={() => setIndex(1)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_school_stationary_donation/3.JPG'
                      alt=''
                      onClick={() => setIndex(2)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_school_stationary_donation/4.JPG'
                      alt=''
                      onClick={() => setIndex(3)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_school_stationary_donation/5.JPG'
                      alt=''
                      onClick={() => setIndex(4)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_school_stationary_donation/6.JPG'
                      alt=''
                      onClick={() => setIndex(5)}
                    />
                  </div>
                </div>

                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_school_stationary_donation/8.JPG'
                      alt=''
                      onClick={() => setIndex(7)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_school_stationary_donation/9.JPG'
                      alt=''
                      onClick={() => setIndex(8)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_school_stationary_donation/10.JPG'
                      alt=''
                      onClick={() => setIndex(8)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_school_stationary_donation/7.JPG'
                      alt=''
                      onClick={() => setIndex(6)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={[
          {
            src: '/images/projects/arj_school_stationary_donation/1.JPG',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_school_stationary_donation/2.JPG',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_school_stationary_donation/3.JPG',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_school_stationary_donation/4.JPG',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_school_stationary_donation/5.JPG',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_school_stationary_donation/6.JPG',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_school_stationary_donation/7.JPG',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_school_stationary_donation/8.JPG',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_school_stationary_donation/9.JPG',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_school_stationary_donation/10.JPG',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_school_stationary_donation/11.JPG',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_school_stationary_donation/12.JPG',
            alt: 'image 1',
          },
          // ...
        ]}
      />
    </>
  )
}

DistributionOfStationaryPackages.getLayout = (page) => {
  return (
    <Layout
      title='Album | Arj Cricket Club qualified to the final in Zarmalwal Tournament and became
      Runner-up - Arj Social Organization'
      page='arj-cricket-club-tournment'
      canonical='https://arj.org.af/album/arj-cricket-club-qualified-to-the-final-in-zarmalwal-tournament-and-became-runner-up'
      pageDescription=''
      jsonLD=''
    >
      {page}
    </Layout>
  )
}
