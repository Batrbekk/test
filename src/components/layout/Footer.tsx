import * as React from 'react';

import Layout from '@/components/layout/Layout';

import Lock from '~/svg/lock.svg';

export default function Footer() {
  return (
    <Layout>
      <div className='flex w-full flex-col items-center'>
        <p className='mb-[10px] text-base text-white opacity-50'>
          Please check that you are visiting the correct URL
        </p>
        <div className='mb-14 flex items-center rounded-full bg-[rgba(255,255,255,0.7)] px-[20px] py-[10px]'>
          <Lock />
          <p className='ml-[10px] text-[#192A3E]'>
            <span className='text-[#33AA28]'>https://</span>web.coinrule.com
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-sm text-white opacity-50'>
            © Coinrule Ltd 2023 All rights reserved
          </p>
          <p className='text-sm text-white opacity-50'>v2.0.18</p>
        </div>
      </div>
    </Layout>
  );
}
