import { useEffect } from 'react';
import { gtm } from '../lib/gtm';

import Dashboard from '../components/dashboard/dashboard'
import { DashboardLayout }  from '../components/dashboard/dashboard-layout'


const Home = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Dashboard />  
    </>
  );
};

Home.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
)

export default Home;
