import Link from 'next/link'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button, buttonVariants } from '@/components/ui/button'

export default async function IndexPage() {
  return (
    <>
      <section>
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-left lg:py-16">
          <div className="mx-auto place-self-center">
            <h2 className="mb-6 font-bold max-w-2xl md:text-lg lg:mb-8 lg:text-xl">
              NYC Near Real Time location specific Air Quality Index (AQI) data
            </h2>
            <p className="mb-6 max-w-2xl md:text-md lg:mb-8 lg:text-lg">
              {' '}
              The goal of this website is to provide up-to-date Air Quality
              Index (AQI) data for specific locations in New York City in near
              real time, offering users valuable information about the air
              quality in their vicinity. Users can access the site to stay
              informed about the current air quality conditions and make
              informed decisions regarding their outdoor activities and health.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Why is it better than weather app AQI readings?
                </AccordionTrigger>
                <AccordionContent className="max-w-lg">
                  General air quality readings provided by weather apps are
                  typically calculated based on data from a few monitoring
                  stations and the overall number is an average. Furthermore,
                  weather apps attempt to guess the dispersion of pollutants
                  based on meteorgological data. These readings may not
                  accurately represent the air quality at a specific location
                  within that area.
                  <br />
                  <br />
                  Real-time location-specific readings are obtained from sensors
                  placed in close proximity to the monitored area, providing a
                  more precise assessment of the air quality at that particular
                  location. This accuracy is crucial for individuals who want to
                  make informed decisions regarding their immediate environment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Who is this for?</AccordionTrigger>
                <AccordionContent className="max-w-lg">
                  This is for all New Yorkers who want to stay informed about
                  the air quality in their vicinity. Right now I have data for
                  Manhattan, Brooklyn, Queens, and the Bronx.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>About the source</AccordionTrigger>
                <AccordionContent className="max-w-lg">
                  NYC.gov continuously collects data on key pollutants, such as
                  particulate matter (PM2.5 and PM10), nitrogen dioxide (NO2),
                  ozone (O3), carbon monoxide (CO), and sulfur dioxide (SO2). I
                  pull data from the same street level sensors that are used to
                  generate the{' '}
                  <Link
                    className="link font-bold"
                    href="https://a816-dohbesp.nyc.gov/IndicatorPublic/beta/key-topics/airquality/nyccas/"
                  >
                    NYC Community Air Survey{' '}
                  </Link>{' '}
                  but instead of providing an average of the air quality levels
                  I give you the most recent readings from the sensors.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Button>
              <Link href="/dashboard"> Try Now </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
