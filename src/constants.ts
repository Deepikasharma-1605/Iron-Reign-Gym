import { Dumbbell, Zap, Target, Trophy } from 'lucide-react';
import React from 'react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Membership', href: '#membership' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Contact', href: '#contact' },
];

export const HERO_IMAGES = [
  "https://lh3.googleusercontent.com/d/1v3RUf5Bo4ugTf_AhxHml2bT4H3BNDCwb",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
  "https://lh3.googleusercontent.com/d/1fT18zBbadzkGrdPDim_rwhTOQ7kJhZNf"
];

export const PROGRAMS = [
  {
    title: "Body Building",
    description: "Sculpt your physique with precision training and expert guidance.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Crossfit",
    description: "High-intensity functional movements to push your limits.",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Yoga & Flex",
    description: "Improve mobility, balance and find your inner strength.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop"
  },
  {
    title: "Cardio Pro",
    description: "Burn calories and improve heart health with elite equipment.",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Power Lifting",
    description: "The ultimate test of core strength and mental fortitude.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Boxing",
    description: "Refine your reflexes and strike with absolute precision.",
    image: "https://lh3.googleusercontent.com/d/1fT18zBbadzkGrdPDim_rwhTOQ7kJhZNf"
  },
  {
    title: "Functional Training",
    description: "Master your movement with real-world strength training protocols.",
    image: "https://lh3.googleusercontent.com/d/17xx8Fd5QUoiB0s7bMx-Be3McukzRr0Al"
  },
  {
    title: "HIIT Sessions",
    description: "Maximum effort in minimum time for explosive cardiovascular results.",
    image: "https://images.unsplash.com/photo-1517963628607-235ccdd5476c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "MMA Basics",
    description: "Learn the art of combat with fundamental striking and grappling techniques.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Stretching & Recovery",
    description: "Repair and restore your body for the next high-intensity battle.",
    image: "https://lh3.googleusercontent.com/d/1gGhlF8ZS7T8ojmPq-n5GkaiCHcA_m6TB"
  }
];

export const TRAINERS = [
  { 
    name: "Saniya Malhotra", 
    specialty: "Elite Yoga & Mobility", 
    image: "https://lh3.googleusercontent.com/d/15LdcYiclh0uvC3tmyQrlmrRzqNYREQ49",
    bio: "Saniya is a master of movement and mindfulness. With over a decade of experience in Hatha and Vinyasa yoga, she helps athletes unlock their full potential by improving flexibility, reducing injury risk, and fostering mental clarity."
  },
  { 
    name: "Arjun Mehta", 
    specialty: "Tactical Strength & Conditioning", 
    image: "https://lh3.googleusercontent.com/d/1BLJiYMGRljwcFAUUNxgn6Z7pLsFcN3Hi",
    bio: "A former elite service member, Arjun brings military-grade discipline to the gym floor. His training protocols are designed for raw power, functional endurance, and the mental grit required to overcome any obstacle."
  },
  { 
    name: "Aryan Verma", 
    specialty: "Professional Bodybuilding", 
    image: "https://lh3.googleusercontent.com/d/1y-furAcS-yuh30GQXXa4dGu7zDwQbWji",
    bio: "Aryan specializes in hypertrophy and aesthetic sculpting. Having competed on national stages, he understands the science of muscle growth and nutrition, guiding members to achieve their ultimate physical form."
  },
  { 
    name: "Khushi Kapoor", 
    specialty: "Crossfit & High Intensity", 
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
    bio: "Khushi is a powerhouse of energy and technical skill. Her CrossFit-inspired sessions will push your cardiovascular limits while mastering complex olympic lifts and gymnastic movements."
  },
  { 
    name: "Ronak Sharma", 
    specialty: "Powerlifting Performance", 
    image: "https://lh3.googleusercontent.com/d/1rsQaBZb5Iu_Kksnl3CfWz0nTZKBvLKE4",
    bio: "If you want to move heavy weight, Ronak is the mentor for you. Specializing in the big three lifts, he focuses on biomechanical efficiency and systematic strength progression for powerlifters of all levels."
  }
];

export const MEMBERSHIPS = [
  { name: "Basic", price: "₹999", features: ["Gym access", "Locker room", "Free weights", "24/7 Access"] },
  { name: "Elite", price: "₹1999", features: ["All Basic features", "Group classes", "Steam & Sauna", "Nutrition plan", "Personal Locker"], popular: true },
  { name: "Pro", price: "₹2999", features: ["All Elite features", "Private coach", "Guest passes", "Vip lounge", "Supplements discount"] }
];

export const SCHEDULE = [
  { time: "06:00 - 08:00", mon: "Body Building", tue: "Yoga", wed: "Crossfit", thu: "Body Building", fri: "Yoga", sat: "Crossfit" },
  { time: "10:00 - 12:00", mon: "Cardio", tue: "Body Building", wed: "Yoga", thu: "Cardio", fri: "Body Building", sat: "Yoga" },
  { time: "16:00 - 18:00", mon: "Crossfit", tue: "Cardio", wed: "Body Building", thu: "Crossfit", fri: "Cardio", sat: "Body Building" },
  { time: "19:00 - 21:00", mon: "Yoga", tue: "Crossfit", wed: "Cardio", thu: "Yoga", fri: "Crossfit", sat: "Cardio" }
];
