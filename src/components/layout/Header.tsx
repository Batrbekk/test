import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import Logo from '~/svg/logo.svg';

const links = [
  { href: '/', label: 'Pricing' },
  { href: '/', label: 'Log In' },
];

export default function Header() {
  return (
    <header className='z-50 pt-7'>
      <div className='layout flex items-center justify-between'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          <Logo className='logo-icon' />
        </UnstyledLink>
        <nav className='sm:hidden md:hidden'>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className='mx-5 font-light text-white'
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
            <li>
              <UnstyledLink
                href='/'
                className='rounded-[100px] border-2 px-8 py-3.5 font-light text-white'
              >
                Get Startedw
              </UnstyledLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
