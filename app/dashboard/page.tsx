import { getLocations } from '@/utils/getLocations'

import Dashboard from './dashboard'

export default async function DashboardPage() {
  const locationsMap = await getLocations()

  return <Dashboard locationsMap={locationsMap} />
}
