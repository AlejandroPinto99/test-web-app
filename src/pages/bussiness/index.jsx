import React from 'react'

import { DashboardLayout }  from '../../components/dashboard/dashboard-layout'

import BussinessComponent from '../../components/bussiness/Bussiness'

const Bussiness = () => {
    return(
        <BussinessComponent />
    )
}

Bussiness.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )

export default Bussiness