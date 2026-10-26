/** Lucide icon names, kept as strings so content stays free of JSX. */
export type IconName =
  | 'MapPin' | 'Users' | 'Waves' | 'Sofa' | 'UserCheck' | 'Ruler'
  | 'Wifi' | 'Tv' | 'Dumbbell' | 'Car' | 'Utensils' | 'Sparkles'
  | 'Baby' | 'Briefcase' | 'PartyPopper' | 'ShieldCheck' | 'Mail'

export interface Fact {
  icon: IconName
  label: string
  value: string
}

export interface Room {
  name: string
  description: string
  image: string
  alt: string
}

export interface Facility {
  icon: IconName
  label: string
  description: string
}

export interface Treatment {
  name: string
  description: string
}

export interface Offer {
  title: string
  description: string
}


export interface StaffRole {
  icon: IconName
  role: string
  description: string
}

/**
 * A single guest feedback form, transcribed verbatim.
 * `lines` is the review body; `suggestions` holds the "what would have
 * enhanced our experience" list some forms carry.
 */
export interface GuestReview {
  name: string
  date: string
  lines: string[]
  suggestions?: string[]
}

export interface GalleryImage {
  image: string
  alt: string
}
