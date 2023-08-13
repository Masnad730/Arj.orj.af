export default function OurVision() {
  return (
    <div className='bg-gradient__section-vision text-white relative'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='flex flex-col justify-center py-[4.57rem] py h-full'>
              <h2 className='text-4xl mb-5'>Our Vision</h2>
              <div>
                <p className='text-lg pb-6'>
                  Our vision is to create a poverty-free society, empowering the vulnerable and
                  preserving the environment for future generations in Afghanistan. We strive for a
                  world where education, healthcare, and clean water are fundamental rights, and
                  economic empowerment leads to brighter futures.
                </p>
              </div>
              <div className='px-2 py-px max-w-max bg-primary mt-9 rounded'>
                <button className='text-xl'>
                  <a href='https://gofund.me/aa9fdf48' className=''>
                    Join us
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-tertiary py-10 px-32 absolute top-0 right-0'>
        <div className='flex items-center justify-center'>
          <div className='pb-8 text-center'>
            <div className='flex items-center justify-center'>
              <i className='fa fa-handshake text-4xl'></i>
              <span className='text-5xl font-mulish ml-3 mb-2'>7+</span>
            </div>
            <h4 className='text-xl'>Years of Service</h4>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='pb-8 text-center'>
            <div className='flex items-center justify-center'>
              <i className='fa fa-users text-4xl'></i>
              <span className='text-5xl font-mulish ml-3 mb-2'>20000+</span>
            </div>
            <h4 className='text-xl'>Beneficiaries Served</h4>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='pb-8 text-center'>
            <div className='flex items-center justify-center'>
              <i className='fa fa-tasks text-4xl'></i>
              <span className='text-5xl font-mulish ml-3 mb-2'>10+</span>
            </div>
            <h4 className='text-xl'>Projects Completed</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
