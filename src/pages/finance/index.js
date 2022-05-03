import React from 'react'

import { DashboardLayout }  from '../../components/dashboard/dashboard-layout'

import FinanceComponent from '../../components/finance/Finance'

const Finance = () => {
    return(
        <FinanceComponent />
    )
}

Finance.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )

export default Finance