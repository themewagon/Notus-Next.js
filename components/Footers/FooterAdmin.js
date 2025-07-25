export default function FooterAdmin() {
  return (
    <>
      <footer className='block py-4'>
        <div className='container mx-auto px-4'>
          <hr className='mb-4 border-b-1 border-blueGray-200' />
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-6/12 px-4'>
              <div className='text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left'>
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.creative-tim.com?ref=nnjs-footer-admin'
                  className='text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1'>
                  Creative Tim.
                </a>
                <span className='ml-2 text-sm text-blueGray-500 font-semibold py-1'>
                  Distributed by{" "}
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://themewagon.com/'
                    className='text-blueGray-500 hover:text-blueGray-800'>
                    ThemeWagon
                  </a>
                  .
                </span>
              </div>
            </div>
            <div className='w-full md:w-6/12 px-4'>
              <ul className='flex flex-wrap list-none md:justify-end  justify-center'>
                <li>
                  <a
                    aria-disabled
                    href='#!'
                    className='text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3'>
                    Creative Tim
                  </a>
                </li>
                <li>
                  <a
                    aria-disabled
                    href='#!'
                    className='text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3'>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    aria-disabled
                    href='#!'
                    className='text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3'>
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    aria-disabled
                    href='#!'
                    className='text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3'>
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
