import { BrainCircuit, Briefcase, LineChart, ScrollText } from "lucide-react";
import { CalendarIcon } from "lucide-react";
import { UsersIcon } from "lucide-react";
import { MapPinIcon } from "lucide-react";
import { CreditCardIcon } from "lucide-react";
export const features = [
  {
    icon: <CalendarIcon />, 
    title: "Smart Scheduling",
    description: "Coordinate dates, venues, and attendees effortlessly."
  },
  {
    icon: <UsersIcon />, 
    title: "Guest Management",
    description: "Track RSVPs, send invites, and manage guest lists."
  },
  {
    icon: <MapPinIcon />, 
    title: "Venue Finder",
    description: "Discover and book the perfect venue for your event."
  },
  {
    icon: <CreditCardIcon />, 
    title: "Budget Tracking",
    description: "Stay on top of expenses with real-time budget insights."
  }
];