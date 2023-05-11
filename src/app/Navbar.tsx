import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-sky-500 p-6'>
      <Link
        href='/'
        className='flex items-center flex-shrink-0 text-slate-100 mr-6'
      >
        <svg
          className='fill-current h-8 w-8 mr-2'
          width='54'
          height='54'
          viewBox='0 0 54 54'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M27 0C12.1 0 0 12.1 0 27s12.1 27 27 27 27-12.1 27-27S41.9 0 27 0zm0 51C13.7 51 3 40.3 3 27S13.7 3 27 3s24 10.7 24 24-10.7 24-24 24z'
            fill='#fff'
          />
        </svg>
        <span className='font-semibold text-xl tracking-tight'>
          Seagull Solutions
        </span>
      </Link>
      <div className='block lg:hidden'>
        <button className='flex items-center px-3 py-2 border rounded text-sky-200 border-sky-400 hover:text-slate-100 hover:border-slate-100'>
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow'>
          <Link
            href='/products'
            className='block mt-4 lg:inline-block lg:mt-0 text-sky-200 hover:text-slate-100 mr-4'
          >
            Products
          </Link>
          <Link
            href='/about'
            className='block mt-4 lg:inline-block lg:mt-0 text-sky-200 hover:text-slate-100 mr-4'
          >
            About
          </Link>
          <Link
            href='/blog'
            className='block mt-4 lg:inline-block lg:mt-0 text-sky-200 hover:text-slate-100'
          >
            Blog
          </Link>
        </div>
        <div>
          <a
            href='#'
            className='inline-block text-sm px-4 py-2 leading-none border rounded text-slate-100 border-slate-100 hover:border-transparent hover:text-sky-500 hover:bg-slate-100 mt-4 lg:mt-0'
          >
            Admin
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
