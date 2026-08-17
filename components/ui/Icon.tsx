import {
  Zap,
  Map,
  Tv,
  Truck,
  PlusCircle,
  Headphones,
  Route,
  Navigation,
  Search,
  MapPin,
  Clapperboard,
  FileJson,
  Car,
  LayoutDashboard,
  Settings2,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Map,
  Tv,
  Truck,
  PlusCircle,
  Headphones,
  Route,
  Navigation,
  Search,
  MapPin,
  Clapperboard,
  FileJson,
  Car,
  LayoutDashboard,
  Settings2,
};

type IconProps = {
  name: string;
  className?: string;
};

export function DynamicIcon({ name, className }: IconProps) {
  const Icon = iconMap[name] ?? Zap;
  return <Icon className={className} aria-hidden="true" />;
}
