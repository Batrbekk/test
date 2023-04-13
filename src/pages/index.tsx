import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Login from '@/components/layout/Login';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main className='pb-[50px]'>
        <div className='mb-[62px]'>
          <Header />
        </div>
        <div className='mb-[62px]'>
          <Login />
        </div>
        <div className=''>
          <Footer />
        </div>
      </main>
    </Layout>
  );
}
