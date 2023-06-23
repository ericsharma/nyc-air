import Link from 'next/link'
import { getLocations } from '@/utils/getLocations'

import { siteConfig } from '@/config/site'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button, buttonVariants } from '@/components/ui/button'

import Dashboard from './dashboard'

export default async function IndexPage() {
  const locationsMap = await getLocations()

  return (
    <>
      <section>
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-left lg:py-16">
          <div className="mx-auto place-self-center">
            <h2 className="mb-6 font-bold max-w-2xl md:text-lg lg:mb-8 lg:text-xl">
              NYC Near Real Time location specific Air Quality Index (AQI) data
            </h2>
            <p className="mb-6 max-w-2xl md:text-md lg:mb-8 lg:text-lg">
              General average air quality readings provided by weather apps are
              typically calculated based on data from a few monitoring stations
              located in a particular area. These readings may not accurately
              represent the air quality at a specific location within that area.
              On the other hand, real-time location-specific readings are
              obtained from sensors placed in close proximity to the monitored
              area, providing a more precise assessment of the air quality at
              that particular location. This accuracy is crucial for individuals
              who want to make informed decisions regarding their immediate
              environment.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Why is it better than weather app AQI readings?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components' aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>About the source</AccordionTrigger>
                <AccordionContent className="max-w-lg">
                  NYC.gov continuously collects data on key pollutants, such as
                  particulate matter (PM2.5 and PM10), nitrogen dioxide (NO2),
                  ozone (O3), carbon monoxide (CO), and sulfur dioxide (SO2). I
                  pull data from the same source but instead of providing an
                  average of the air quality levels I give you the most recent
                  readings from the sensors.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Button>Try Now</Button>
          </div>
        </div>
      </section>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <Dashboard locationsMap={locationsMap} />
      </section>
    </>
  )
}
