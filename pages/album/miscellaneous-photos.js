import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'

import Layout from '@/components/layout'

export default function MiscellaneousPrograms() {
  const [index, setIndex] = useState(-1)
  return (
    <>
      <section className='pt-20 pb-14'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-lg-9'>
              <div className='mb-12 text-center'>
                <h2 className='text-3xl text-accents_6'>Miscellaneous Photos</h2>
              </div>
            </div>
          </div>
          <div className='row justify-center'>
            <div className='col-lg-10'>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/miscellaneous-photos/1.jpg'
                      alt=''
                      onClick={() => setIndex(0)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/miscellaneous-photos/2.jpg'
                      alt=''
                      onClick={() => setIndex(1)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/miscellaneous-photos/3.jpg'
                      alt=''
                      onClick={() => setIndex(2)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/miscellaneous-photos/4.jpg'
                      alt=''
                      onClick={() => setIndex(3)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/miscellaneous-photos/5.jpg'
                      alt=''
                      onClick={() => setIndex(4)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/miscellaneous-photos/6.jpg'
                      alt=''
                      onClick={() => setIndex(5)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/miscellaneous-photos/7.jpg'
                      alt=''
                      onClick={() => setIndex(6)}
                    />
                  </div>
                </div>

                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/miscellaneous-photos/8.jpg'
                      alt=''
                      onClick={() => setIndex(7)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/miscellaneous-photos/9.jpg'
                      alt=''
                      onClick={() => setIndex(8)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/miscellaneous-photos/10.jpg'
                      alt=''
                      onClick={() => setIndex(8)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/miscellaneous-photos/11.jpg'
                      alt=''
                      onClick={() => setIndex(8)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/miscellaneous-photos/12.jpg'
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
            src: '/images/projects/miscellaneous-photos/1.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/miscellaneous-photos/2.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/miscellaneous-photos/3.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/miscellaneous-photos/4.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/miscellaneous-photos/5.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/miscellaneous-photos/6.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/miscellaneous-photos/7.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/miscellaneous-photos/8.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/miscellaneous-photos/9.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/miscellaneous-photos/10.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/miscellaneous-photos/11.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/miscellaneous-photos/12.jpg',
            alt: 'image 1',
          },
          // ...
        ]}
      />
    </>
  )
}

MiscellaneousPrograms.getLayout = (page) => {
  return (
    <Layout
      title='Album | Miscellaneous Photos - Arj Social Organization'
      page='miscellaneous-programs'
      canonical='https://arj.org.af/album/miscellaneous-photos'
      pageDescription=''
      jsonLD=''
    >
      {page}
    </Layout>
  )
}
