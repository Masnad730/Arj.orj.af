import { useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { useSnackbar } from 'notistack'

import { getUserEnquiry } from '../lib/api'
import Layout from '../components/layout'

export default function Contact() {
  const { enqueueSnackbar } = useSnackbar()
  const [isLoading, setIsLoading] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    organization: '',
    phoneNumber: '',
    message: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserInfo({ ...userInfo, [name]: value })
  }
  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault()
    getUserEnquiry(userInfo, setUserInfo, setIsLoading, enqueueSnackbar)
  }
  return (
    <>
      <section className='bg-gradient__banner h-[535px] min-h-[350px] max-h-[400px] flex items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='text-white'>
                <span className='inline-block text-xl sm:text-2xl md:text-5xl lg;text-7xl uppercase font-bold font-lato'>
                  contact us
                </span>
                <div className='text-2xl font-normal mt-2'>Together we can make a difference</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-24 pb-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2'>
              <div className='text-center mb-20'>
                <h2 className='text-4xl'>Connect with us, and let us know</h2>
              </div>
              <div className='flex justify-around'>
                <div className='flex flex-col items-center'>
                  <div className='mb-8 p-4 bg-accents_4 rounded-[50%]'>
                    <i className='fa fa-phone text-6xl'></i>
                  </div>
                  <h4 className='text-lg'>
                    <a href='tel:+93 786 06 01 01'>+93 786 06 01 01</a>
                  </h4>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='mb-8 p-4 bg-accents_4 rounded-[50%]'>
                    <i className='fa fa-envelope text-6xl'></i>
                  </div>
                  <h4 className='text-lg'>
                    <a href='mailto:info@arj.org.af' className='text-tertiary'>
                      info@arj.org.af
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <div className='mx-12 mt-12'>
                <div className='text-center bg-accents_1 p-6'>
                  <h4 className='mb-2 font-bold text-tertiary'>Head Office</h4>
                  <div className='text-lg'>Ansori Street, Shahri-Naw, Kabul</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-accents_2 border-y border-dotted border-accents_6 pt-20 pb-10 mb-24'>
        <div className='container'>
          <div className='row justify-center'>
            <div className='col-lg-9'>
              <div className='text-center mb-24'>
                <h3 className='text-3xl'>Other Inquiries</h3>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='h-full flex justify-center items-center'>
                <h4 className='text-2xl uppercase font-playfair'>send us a. message</h4>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='shadow-box py-8 px-5'>
                <form onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-12'>
                      <input
                        type='text'
                        name='name'
                        value={userInfo.name}
                        onChange={handleChange}
                        placeholder='Name'
                        required
                      />
                    </div>
                    <div className='col-12'>
                      <input
                        type='email'
                        name='email'
                        value={userInfo.email}
                        onChange={handleChange}
                        placeholder='Email'
                        required
                      />
                    </div>
                    <div className='col-6'>
                      <input
                        type='text'
                        name='organization'
                        value={userInfo.organization}
                        onChange={handleChange}
                        placeholder='Organization'
                      />
                    </div>
                    <div className='col-6'>
                      <input
                        type='text'
                        name='phoneNumber'
                        value={userInfo.phoneNumber}
                        onChange={handleChange}
                        placeholder='Phone Number'
                      />
                    </div>
                    <div className='col-12'>
                      <textarea
                        id=''
                        cols='30'
                        rows='10'
                        name='message'
                        value={userInfo.message}
                        onChange={handleChange}
                        placeholder='Message'
                      ></textarea>
                    </div>
                    <div className='col-12'>
                      <button type='submit' className='bg-tertiary w-full'>
                        {!isLoading ? (
                          'Send'
                        ) : (
                          <ClipLoader color={'#000'} loading={isLoading} size={30} />
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Contact.getLayout = (page) => {
  return (
    <Layout
      title='Contact Us - Arj Social Organization'
      page='contact'
      canonical='https://arj.org.af/contact/'
      pageDescription=''
      jsonLD=''
    >
      {page}
    </Layout>
  )
}
