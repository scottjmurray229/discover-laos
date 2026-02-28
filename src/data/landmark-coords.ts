// Popular Laos POI coordinates for itinerary geocoding.
// Keyed by lowercase normalized name. Covers top attractions at all 9 destinations.
// Used by generate-itinerary.ts to resolve activity coordinates without Geocoding API calls.

export const LANDMARK_COORDS: Record<string, { lat: number; lng: number }> = {
  // -- Vientiane --
  'that luang': { lat: 17.9760, lng: 102.6340 },
  'patuxai': { lat: 17.9750, lng: 102.6300 },
  'buddha park': { lat: 17.9130, lng: 102.7650 },
  'vientiane night market': { lat: 17.9560, lng: 102.6170 },
  'cope visitor centre': { lat: 17.9640, lng: 102.6210 },
  'wattay international airport': { lat: 17.9883, lng: 102.5633 },

  // -- Luang Prabang --
  'kuang si falls': { lat: 19.7483, lng: 101.9933 },
  'pak ou caves': { lat: 20.0517, lng: 102.2183 },
  'royal palace museum': { lat: 19.8933, lng: 102.1350 },
  'mount phousi': { lat: 19.8856, lng: 102.1350 },
  'luang prabang night market': { lat: 19.8875, lng: 102.1333 },
  'wat xieng thong': { lat: 19.8917, lng: 102.1400 },
  'luang prabang airport': { lat: 19.8983, lng: 102.1633 },

  // -- Vang Vieng --
  'blue lagoon vang vieng': { lat: 18.9367, lng: 102.4333 },
  'tham chang cave': { lat: 18.9167, lng: 102.4433 },
  'nam song river': { lat: 18.9220, lng: 102.4475 },

  // -- Pakse --
  'wat phou': { lat: 14.8467, lng: 105.8217 },
  'pakse airport': { lat: 15.1333, lng: 105.7833 },

  // -- Bolaven Plateau --
  'tad fane waterfall': { lat: 15.1833, lng: 106.1833 },
  'tad yuang waterfall': { lat: 15.2000, lng: 106.1667 },
  'jhai coffee house': { lat: 15.2500, lng: 106.4000 },

  // -- 4000 Islands --
  'don det': { lat: 13.9633, lng: 105.9167 },
  'don khon': { lat: 13.9433, lng: 105.9300 },
  'li phi falls': { lat: 13.9350, lng: 105.9417 },
  'khone phapheng falls': { lat: 13.9267, lng: 105.9783 },

  // -- Phonsavan --
  'plain of jars site 1': { lat: 19.4333, lng: 103.1500 },
  'plain of jars site 2': { lat: 19.4167, lng: 103.1167 },
  'plain of jars site 3': { lat: 19.4583, lng: 103.1333 },

  // -- Nong Khiaw --
  'nong khiaw viewpoint': { lat: 20.5700, lng: 102.6100 },
  'pha tok cave': { lat: 20.5650, lng: 102.6050 },
  'muang ngoi': { lat: 20.6833, lng: 102.6833 },

  // -- Thakhek --
  'konglor cave': { lat: 17.9600, lng: 105.1683 },
  'thakhek loop': { lat: 17.3964, lng: 104.8306 },
  'buddha cave': { lat: 17.4500, lng: 104.8000 },
};
