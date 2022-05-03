import { useEffect } from 'react';
import { gtm } from '../lib/gtm';
import { DashboardLayout }  from '../components/dashboard/dashboard-layout'
const Home = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <h2>Root view</h2>
    </>
  );
};

Home.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
)

export default Home;
