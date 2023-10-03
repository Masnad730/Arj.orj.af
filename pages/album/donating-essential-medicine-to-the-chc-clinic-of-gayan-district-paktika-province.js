import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'

import Layout from '@/components/layout'

export default function ArjMedicineDonationProject() {
  const [index, setIndex] = useState(-1)
  return (
    <>
      <section className='pt-20 pb-14'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-lg-9'>
              <div className='mb-12 text-center'>
                <h2 className='text-xl md:text-2xl lg:text-3xl text-accents_6'>
                  Donating Essential Medicine to the CHC Clinic of Gayan District, Paktika Province
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
                      src='/images/projects/arj_medicine_donation/1.jpg'
                      alt=''
                      onClick={() => setIndex(0)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_medicine_donation/2.jpg'
                      alt=''
                      onClick={() => setIndex(1)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_medicine_donation/3.jpg'
                      alt=''
                      onClick={() => setIndex(2)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_medicine_donation/4.jpg'
                      alt=''
                      onClick={() => setIndex(3)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_medicine_donation/5.jpg'
                      alt=''
                      onClick={() => setIndex(4)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_medicine_donation/6.jpg'
                      alt=''
                      onClick={() => setIndex(5)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_medicine_donation/7.jpg'
                      alt=''
                      onClick={() => setIndex(6)}
                    />
                  </div>
                </div>

                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_medicine_donation/8.jpg'
                      alt=''
                      onClick={() => setIndex(7)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_medicine_donation/9.jpg'
                      alt=''
                      onClick={() => setIndex(8)}
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
            src: '/images/projects/arj_medicine_donation/1.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_medicine_donation/2.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_medicine_donation/3.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_medicine_donation/4.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_medicine_donation/5.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_medicine_donation/6.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_medicine_donation/7.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_medicine_donation/8.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_medicine_donation/9.jpg',
            alt: 'image 1',
          },
          // ...
        ]}
      />
    </>
  )
}

ArjMedicineDonationProject.getLayout = (page) => {
  return (
    <Layout
      title='Album | Donating Essential Medicine to the CHC Clinic of Gayan District, Paktika
      Province - Arj Social Organization'
      page='arj-medicine-donation-project'
      canonical='https://arj.org.af/album/donating-essential-medicine-to-the-chc-clinic-of-gayan-district-paktika-province'
      pageDescription=''
      jsonLD=''
    >
      {page}
    </Layout>
  )
}
