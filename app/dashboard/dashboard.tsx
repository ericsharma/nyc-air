'use client'

import { useEffect, useState } from 'react'
import { Calendar, Clock, Wind } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { AQIDatum, columns } from '../columns'
import { DataTable } from '../data-table'

export default function Dashboard({ locationsMap }: { locationsMap: any }) {
  const [location, setLocation] = useState('')
  const [latestData, setLatestData] = useState({
    timestamp: new Date(Date.now()),
    time: '',
    value: '',
  })
  const handleChange = (_location: string) => {
    setLocation(_location)
  }

  useEffect(() => {
    if (!Object.keys(locationsMap).includes(location)) return
    const firstItem = locationsMap[location][0]
    const lastItem = [...locationsMap[location]].pop()

    const latestLocationData = //The latest data will either be the first or last item in the array depending on the time stamp
      firstItem.timestamp > lastItem.timestamp ? firstItem : lastItem

    setLatestData(latestLocationData)
  }, [location])

  return (
    <>
      <div className="container mx-auto mt-5 ">
        <Select onValueChange={handleChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Choose a location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Locations</SelectLabel>
              <SelectItem value={'Broadway_35th_St'}>BroadWay</SelectItem>
              <SelectItem value={'Cross_Bronx_Expy'}>
                Bronx Expressway
              </SelectItem>
              <SelectItem value={'DEC_Avg'}>DEC</SelectItem>
              <SelectItem value={'Hunts_Point'}>Hunts Point</SelectItem>
              <SelectItem value={'Manhattan_Bridge'}>
                Manhattan Bridge
              </SelectItem>
              <SelectItem value={'Queens_College'}>Queens College</SelectItem>
              <SelectItem value={'Queensboro_Bridge'}>
                🤩Queensboro Bridge🤩
              </SelectItem>
              <SelectItem value={'Williamsburg_Bridge'}>
                Williamsburg Bridge
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {location.length !== 0 && latestData && (
        <div className="container mx-auto ">
          <div className="flex flex-col-reverse sm:justify-around pb-4 sm:flex-row">
            <Card>
              <CardHeader>
                <CardTitle>Latest Local Reading</CardTitle>
                <CardDescription>
                  The latest reading from your selected location.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center space-x-2">
                <Calendar />
                <p>{new Date(latestData.timestamp).toDateString()}</p>
              </CardContent>

              <CardContent className="flex items-center space-x-2">
                <Clock />
                <p>{latestData.time}</p>
              </CardContent>

              <CardContent className="flex items-center space-x-2">
                <Wind />
                <p>{latestData.value}</p>
              </CardContent>
            </Card>
            {/* <Card>
              <CardHeader>
                <CardTitle>Weather App (Coming Soon)</CardTitle>
                <CardDescription>
                  More Weather Soruces coming soon
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center space-x-2">
                <Calendar />
              </CardContent>

              <CardContent className="flex items-center space-x-2">
                <Clock />
              </CardContent>

              <CardContent className="flex items-center space-x-2">
                <Wind />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Apple Weather App (COMING SOON)</CardTitle>
                <CardDescription>
                  More weather sources coming soon
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center space-x-2">
                <Calendar />
              </CardContent>

              <CardContent className="flex items-center space-x-2">
                <Clock />
              </CardContent>

              <CardContent className="flex items-center space-x-2">
                <Wind />
              </CardContent>
            </Card> */}
          </div>

          <DataTable columns={columns} data={locationsMap[location]} />
        </div>
      )}
    </>
  )
}
