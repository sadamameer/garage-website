/** Service categories for Services page and quote form select. */
export const serviceCatalog = [
  {
    id: 'general-repair',
    title: 'General Auto Repair',
    short: 'Comprehensive mechanical repairs with clear estimates and quality parts.',
    icon: 'wrench',
  },
  {
    id: 'brakes',
    title: 'Brake Service',
    short: 'Pads, rotors, fluid service, and thorough brake system inspections.',
    icon: 'disc',
  },
  {
    id: 'oil-change',
    title: 'Oil Change',
    short: 'Manufacturer-recommended intervals and the right specification for your engine.',
    icon: 'droplet',
  },
  {
    id: 'tires',
    title: 'Tire Installation & Rotation',
    short: 'Mounting, balancing, rotation, and pressure checks for even wear.',
    icon: 'tire',
  },
  {
    id: 'alignment',
    title: 'Wheel Alignment',
    short: 'Precision alignment to protect tires and restore stable handling.',
    icon: 'gauge',
  },
  {
    id: 'diagnostics',
    title: 'Engine Diagnostics',
    short: 'Code scans, testing, and methodical diagnosis — we explain what we find.',
    icon: 'scan',
  },
  {
    id: 'battery',
    title: 'Battery Replacement',
    short: 'Testing, replacement, and charging system verification.',
    icon: 'bolt',
  },
  {
    id: 'suspension',
    title: 'Suspension & Steering Repair',
    short: 'Shocks, struts, bushings, and steering components for a controlled ride.',
    icon: 'spring',
  },
  {
    id: 'hvac',
    title: 'Heating & A/C Service',
    short: 'Climate control diagnosis, refrigerant service, and component repair.',
    icon: 'snow',
  },
  {
    id: 'seasonal',
    title: 'Seasonal Maintenance',
    short: 'Winter readiness, fluid checks, and seasonal inspections for Ontario driving.',
    icon: 'thermometer',
  },
  {
    id: 'safety',
    title: 'Safety Inspections',
    short: 'Structured inspections with documentation you can keep for your records.',
    icon: 'shield',
  },
  {
    id: 'preventive',
    title: 'Preventive Maintenance',
    short: 'Scheduled service designed to reduce surprises and extend vehicle life.',
    icon: 'calendar',
  },
]

export const quoteServiceOptions = [
  { value: '', label: 'Select a service category' },
  ...serviceCatalog.map((s) => ({ value: s.id, label: s.title })),
  { value: 'other', label: 'Other / Not sure — describe below' },
]
