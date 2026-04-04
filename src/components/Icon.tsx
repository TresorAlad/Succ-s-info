import React from 'react';
import { 
  Home, 
  Info, 
  Hammer, 
  Mail, 
  X, 
  Menu, 
  MoveRight, 
  ArrowRight, 
  Phone, 
  Check, 
  CheckCircle, 
  MapPin, 
  FileEdit, 
  ChevronDown, 
  ChevronUp, 
  Wrench, 
  BookOpen, 
  MessageSquare, 
  Bell, 
  User, 
  Smartphone, 
  Clock, 
  GraduationCap, 
  Send, 
  Type, 
  Folder, 
  Settings, 
  History, 
  Laptop, 
  CalendarCheck, 
  ThumbsUp, 
  AtSign, 
  Headphones, 
  Award, 
  Network, 
  Users, 
  Handshake, 
  Calculator, 
  Lightbulb, 
  CheckCircle2, 
  Monitor,
  HelpCircle
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: string;
  fill?: boolean;
  weight?: number;
}

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  info: Info,
  build: Hammer,
  mail: Mail,
  close: X,
  menu: Menu,
  arrow_right_alt: MoveRight,
  arrow_forward: ArrowRight,
  call: Phone,
  check: Check,
  check_circle: CheckCircle,
  distance: MapPin,
  edit_note: FileEdit,
  email: Mail,
  expand_more: ChevronDown,
  expand_less: ChevronUp,
  handyman: Wrench,
  location_on: MapPin,
  menu_book: BookOpen,
  message: MessageSquare,
  notifications: Bell,
  person: User,
  phone: Phone,
  phone_iphone: Smartphone,
  schedule: Clock,
  school: GraduationCap,
  send: Send,
  subject: Type,
  topic: Folder,
  verified: CheckCircle,
  settings_suggest: Settings,
  history_edu: History,
  laptop_mac: Laptop,
  event_available: CalendarCheck,
  thumb_up: ThumbsUp,
  alternate_email: AtSign,
  support_agent: Headphones,
  workspace_premium: Award,
  history: History,
  hub: Network,
  groups: Users,
  handshake: Handshake,
  calculate: Calculator,
  lightbulb: Lightbulb,
  task_alt: CheckCircle2,
  laptop_chromebook: Monitor,
};

const Icon: React.FC<IconProps> = ({ name, className = "", size = "24", fill = false, weight = 2 }) => {
  const LucideIcon = iconMap[name.toLowerCase()] || HelpCircle;
  
  // Convert size to number if it's a string with px
  const numericSize = typeof size === 'string' && size.endsWith('px') 
    ? parseInt(size.replace('px', ''), 10) 
    : size;

  return (
    <LucideIcon 
      size={numericSize} 
      className={className}
      strokeWidth={weight === 400 ? 2 : weight} // Adjust weight mapping if needed
      fill={fill ? "currentColor" : "none"}
    />
  );
};

export default Icon;
