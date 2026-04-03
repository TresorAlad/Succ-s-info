import React from 'react';
import { 
  Settings, GraduationCap, Monitor, BadgeCheck, Clock, ThumbsUp, CalendarDays, ArrowRight,
  ChevronDown, ChevronUp, CheckCircle2, Laptop, Home, Info, Wrench, Mail, Menu, X, Rocket, MapPin, Phone, MessageSquare, Download, Play, CheckCircle
} from 'lucide-react';

const IconMaps = {
  settings_suggest: Settings,
  history_edu: GraduationCap,
  school: GraduationCap,
  laptop_mac: Monitor,
  laptop_chromebook: Laptop,
  verified: BadgeCheck,
  schedule: Clock,
  thumb_up: ThumbsUp,
  event_available: CalendarDays,
  arrow_forward: ArrowRight,
  arrow_right_alt: ArrowRight,
  check_circle: CheckCircle,
  expand_more: ChevronDown,
  expand_less: ChevronUp,
  home: Home,
  info: Info,
  build: Wrench,
  mail: Mail,
  menu: Menu,
  close: X,
  rocket_launch: Rocket,
  location_on: MapPin,
  phone: Phone,
  chat: MessageSquare,
  download: Download,
  play_circle: Play,
  // Fallbacks if any other missing
};

const Icon = ({ name, className = "", size = "24px" }) => {
  const LucideIcon = IconMaps[name] || CheckCircle; // Fallback to CheckCircle if not found
  return <LucideIcon size={parseInt(size) || 24} className={className} strokeWidth={2.5} />;
};

export default Icon;
