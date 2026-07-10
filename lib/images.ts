// Curated real Unsplash photos (verified live) for Pansion HRGA — Vodice.
// Non-landmark, non-location-specific shots are used for generic mood/interior;
// coastal/town shots depict genuine Dalmatian scenery representative of the region.
function u(id: string, w: number) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;
}

export const IMAGES = {
  heroBoat: u("1690106979908-36eaa78e7728", 1600), // fishing boat framed by pines at dusk
  beachSunset: u("1642205345411-c0b2877d7807", 1400), // pebble beach, sunset over the bay
  townStreet: u("1782813632787-4322b5258557", 1400), // Dalmatian stone street, warm evening light
  cove: u("1659552400126-b3c833adf1dc", 1400), // turquoise cove, two small boats
  pineCove: u("1654690678405-b38dd2fa5fe5", 1400), // pine-framed cove beach
  apartment: u("1522708323590-d24dbb6b0267", 1200), // apartment kitchen & living room
  roomBright: u("1595526114035-0d45ed16cfbf", 1200), // bright minimalist double room
  roomBlue: u("1618221118493-9cfa1a1c00da", 1200), // cozy blue-toned single room
  livingBoho: u("1601918774946-25832a4be0d6", 1200), // warm living room, plants
  livingOpen: u("1560185127-6ed189bf02f4", 1200), // open living/kitchen, wood tones
  coffee: u("1526385159909-196a9ac0ef64", 900), // morning coffee, macro
  roomCorner: u("1513694203232-719a280e022f", 900), // simple room corner detail
} as const;
