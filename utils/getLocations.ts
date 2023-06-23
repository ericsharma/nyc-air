export async function getLocations() {
  const locationsMap: any = {
    Broadway_35th_St: [],
    Cross_Bronx_Expy: [],
    DEC_Avg: [],
    Hunts_Point: [],
    Manhattan_Bridge: [],
    Queens_College: [],
    Queensboro_Bridge: [],
    Williamsburg_Bridge: [],
  }

  const source = process.env.DATA_SOURCE
  const endpoint = '/$web/nyccas_realtime_DEC.csv'

  if (!source) throw new Error('DATA_SOURCE not set')

  const res = await fetch(source + endpoint, { cache: 'no-store' })
  if (!res.ok) throw new Error(res.statusText)

  const data = await res.text()
  data
    .split('\r\n') //split data by lines
    .map((entry) => entry.split(',')) //split lines by comma
    .forEach((entry) => {
      const name = entry[0].toString()
      Object.keys(locationsMap).includes(name) && //check key exists on object
        locationsMap[name].push({
          source: entry[1],
          timestamp: new Date(entry[2]),
          time: entry[3],
          value: entry[4],
        })
    }) // push split values as an object to locations map

  return locationsMap
}
