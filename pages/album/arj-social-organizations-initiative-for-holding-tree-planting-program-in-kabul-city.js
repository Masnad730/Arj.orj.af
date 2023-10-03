import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'

import Layout from '@/components/layout'

export default function ArjTreePlantingProject() {
  const [index, setIndex] = useState(-1)
  return (
    <>
      <section className='pt-20 pb-14'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-lg-9'>
              <div className='mb-12 text-center'>
                <h2 className='text-xl md:text-2xl lg:text-3xl text-accents_6'>
                  Arj Social Organization's initiative for holding tree-planting program in Kabul
                  City
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
                      src='/images/projects/arj_tree_planting/1.jpg'
                      alt=''
                      onClick={() => setIndex(0)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_tree_planting/2.jpg'
                      alt=''
                      onClick={() => setIndex(1)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_tree_planting/3.jpg'
                      alt=''
                      onClick={() => setIndex(2)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_tree_planting/4.jpg'
                      alt=''
                      onClick={() => setIndex(3)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_tree_planting/5.jpg'
                      alt=''
                      onClick={() => setIndex(4)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_tree_planting/6.jpg'
                      alt=''
                      onClick={() => setIndex(5)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_tree_planting/7.jpg'
                      alt=''
                      onClick={() => setIndex(6)}
                    />
                  </div>
                </div>

                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_tree_planting/8.jpg'
                      alt=''
                      onClick={() => setIndex(7)}
                    />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pb-6 cursor-pointer'>
                    <img
                      src='/images/projects/arj_tree_planting/9.jpg'
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
            src: '/images/projects/arj_tree_planting/1.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_tree_planting/2.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_tree_planting/3.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_tree_planting/4.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_tree_planting/5.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_tree_planting/6.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_tree_planting/7.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_tree_planting/8.jpg',
            alt: 'image 1',
          },
          {
            src: '/images/projects/arj_tree_planting/9.jpg',
            alt: 'image 1',
          },
          // ...
        ]}
      />
    </>
  )
}

ArjTreePlantingProject.getLayout = (page) => {
  return (
    <Layout
      title="Album | Arj Social Organization's initiative for holding tree-planting program in
      Kabul City - Arj Social Organization"
      page='arj-tree-planting-project'
      canonical='https://arj.org.af/album/arj-social-organizations-initiative-for-holding-tree-planting-program-in-kabul-city'
      pageDescription=''
      jsonLD=''
    >
      {page}
    </Layout>
  )
}
