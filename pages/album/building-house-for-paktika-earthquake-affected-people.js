import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'

import Layout from '@/components/layout'

export default function ArjBuildingHouseProject() {
  const [index, setIndex] = useState(-1)
  return (
    <>
      <section className='pt-20 pb-14'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-lg-9'>
              <div className='mb-12 text-center'>
                <h2 className='text-3xl text-accents_6'>
                  Building House for Paktika Earthquake-Affected People
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
                      src='/images/projects/arj_paktika_house/1.jpg'
                      alt=''
                      onClick={() => setIndex(0)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_paktika_house/2.jpg'
                      alt=''
                      onClick={() => setIndex(1)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_paktika_house/3.jpg'
                      alt=''
                      onClick={() => setIndex(2)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_paktika_house/4.jpg'
                      alt=''
                      onClick={() => setIndex(3)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_paktika_house/5.jpg'
                      alt=''
                      onClick={() => setIndex(4)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_paktika_house/6.jpg'
                      alt=''
                      onClick={() => setIndex(5)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_paktika_house/7.jpg'
                      alt=''
                      onClick={() => setIndex(6)}
                    />
                  </div>
                </div>

                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_paktika_house/8.png'
                      alt=''
                      onClick={() => setIndex(7)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_paktika_house/9.png'
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
            src: '/images/projects/arj_paktika_house/1.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_paktika_house/2.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_paktika_house/3.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_paktika_house/4.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_paktika_house/5.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_paktika_house/6.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_paktika_house/7.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_paktika_house/8.png',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_paktika_house/9.png',
            alt: 'image 1',
          },
          // ...
        ]}
      />
    </>
  )
}

ArjBuildingHouseProject.getLayout = (page) => {
  return (
    <Layout
      title='Album | Building House for Paktika Earthquake-Affected People - Arj Social Organization'
      page='arj-building-house-project'
      canonical='https://arj.org.af/album/building-house-for-paktika-earthquake-affected-people'
      pageDescription=''
      jsonLD=''
    >
      {page}
    </Layout>
  )
}
