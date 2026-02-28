// Shared destination coordinates — single source of truth
// Used by plan page + companion app + generate-itinerary API.

export const DESTINATION_COORDS: Record<string, { lat: number; lng: number; label: string }> = {
  vientiane: { lat: 17.9757, lng: 102.6331, label: 'Vientiane' },
  'luang-prabang': { lat: 19.8856, lng: 102.1350, label: 'Luang Prabang' },
  'vang-vieng': { lat: 18.9220, lng: 102.4475, label: 'Vang Vieng' },
  pakse: { lat: 15.1200, lng: 105.7990, label: 'Pakse' },
  'bolaven-plateau': { lat: 15.2000, lng: 106.5500, label: 'Bolaven Plateau' },
  '4000-islands': { lat: 13.9633, lng: 105.9167, label: '4000 Islands' },
  phonsavan: { lat: 19.4500, lng: 103.1833, label: 'Phonsavan' },
  'nong-khiaw': { lat: 20.5697, lng: 102.6111, label: 'Nong Khiaw' },
  thakhek: { lat: 17.3964, lng: 104.8306, label: 'Thakhek' },
};
