import {
  Baby, Briefcase, Car, Dumbbell, Mail, MapPin, PartyPopper, Ruler,
  ShieldCheck, Sofa, Sparkles, Tv, UserCheck, Users, Utensils, Waves, Wifi,
} from 'lucide-react'
import type { IconName } from '../../types/content'

const ICONS = {
  Baby, Briefcase, Car, Dumbbell, Mail, MapPin, PartyPopper, Ruler,
  ShieldCheck, Sofa, Sparkles, Tv, UserCheck, Users, Utensils, Waves, Wifi,
} as const satisfies Record<IconName, unknown>

export default function IconFor({
  name, className = 'size-6',
}: { name: IconName; className?: string }) {
  const Icon = ICONS[name]
  return <Icon className={className} aria-hidden="true" />
}
