import React, { JSX } from "react";
// /app/api/data.ts

export const CryptoData: { name: string; price: number }[] = [
  { name: "Bitcoin BTC/USD", price: 67646.84 },
  { name: "Ethereum ETH/USD", price: 2515.93 },
  { name: "Bitcoin Cash BTC/USD", price: 366.96 },
  { name: "Litecoin LTC/USD", price: 61504.54 },
];

export const AgentData: { name: string; cost: number }[] = [
  { name: "Basic Voice Agent", cost: 10.50 },
  { name: "Advanced Voice Agent", cost: 25.75 },
  { name: "Premium Voice Agent", cost: 50.00 },
  { name: "Enterprise Voice Agent", cost: 100.25 },
];

export const footerlabels: { label: string; href: string }[] = [
  { label: "Terms", href: "/terms" },
  { label: "Disclosures", href: "/disclosures" },
  { label: "Latest News", href: "/news" },
];

export const AgentFeatures: {
  title: string;
  short: string;
  icon: string;
  background: string;
  status: string;
  mark: string;
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: "Real-Time ASR",
    short: "Speech Recognition",
    icon: "mdi:microphone",
    background: "bg-primary/20",
    status: "Active",
    mark: "+95% Accuracy",
    width: 24,
    height: 24,
    padding: "p-2",
  },
  {
    title: "Natural TTS",
    short: "Text-to-Speech",
    icon: "mdi:speaker",
    background: "bg-secondary/20",
    status: "Active",
    mark: "+98% Natural",
    width: 24,
    height: 24,
    padding: "p-2",
  },
  {
    title: "Multi-Language",
    short: "Language Support",
    icon: "mdi:translate",
    background: "bg-primary/20",
    status: "12 Languages",
    mark: "+3 New",
    width: 24,
    height: 24,
    padding: "p-2",
  },
  {
    title: "AI Context",
    short: "Smart Responses",
    icon: "mdi:brain",
    background: "bg-secondary/20",
    status: "Enhanced",
    mark: "+40% Smarter",
    width: 24,
    height: 24,
    padding: "p-2",
  },
];

export const portfolioData: { image: string; title: string; svg: JSX.Element }[] = [
  {
    image: "",
    title: "Custom Voice Agents",
    svg: (
      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V6z" fill="#4B5EFC"/>
        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" fill="#4B5EFC"/>
      </svg>
    ),
  },
  {
    image: "",
    title: "Voice Analytics",
    svg: (
      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" fill="#4B5EFC"/>
        <path d="M7 12h2v5H7zm4-3h2v8h-2zm4-3h2v11h-2z" fill="#4B5EFC"/>
      </svg>
    ),
  },
  {
    image: "",
    title: "Voice Integration",
    svg: (
      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 15l1.55 1.55c-.96 1.69-3.33 3.04-5.55 3.37V11h3V9h-3V7.82C14.16 7.4 15 6.3 15 5c0-1.65-1.35-3-3-3S9 3.35 9 5c0 1.3.84 2.4 2 2.82V9H8v2h3v8.92c-2.22-.33-4.59-1.68-5.55-3.37L7 15l-4-3v3c0 3.88 4.92 7 9 7s9-3.12 9-7v-3l-4 3zM12 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" fill="#4B5EFC"/>
      </svg>
    ),
  },
];
export const upgradeData: { title: string }[] = [
  { title: "100% Secure" },
  { title: "Cost-Effective" },
  { title: "Highly Scalable" },
  { title: "User-Friendly" },
];

export const perksData: { icon: string; title: string; text: string; space: string; svg: JSX.Element }[] = [
  {
    icon: "",
    title: "24/7 Support",
    text: "Get expert help with your voice agents anytime.",
    space: "lg:mt-8",
    svg: (
      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 13H13V15H11V13H9V11H11V9H13V11H15V13Z" fill="#4B5EFC"/>
        <path d="M12 7V17" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    icon: "",
    title: "Voice Community",
    text: "Join our global community of voice AI developers.",
    space: "lg:mt-14",
    svg: (
      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 15H9V13H15V15ZM15 11H9V9H15V11Z" fill="#4B5EFC"/>
        <path d="M12 8C10.9 8 10 8.9 10 10C10 11.1 10.9 12 12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8Z" fill="white"/>
      </svg>
    ),
  },
  {
    icon: "",
    title: "Voice Academy",
    text: "Learn voice AI development with our comprehensive tutorials.",
    space: "lg:mt-4",
    svg: (
      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2ZM12 20V12L2 7V17C2 18.1 2.9 19 4 19H20C21.1 19 22 18.1 22 17V7L12 12V20Z" fill="#4B5EFC"/>
        <path d="M4 19H20V17H4V19Z" fill="white"/>
      </svg>
    ),
  },
];
export const timelineData: { icon: string; title: string; text: string; position: string }[] = [
  { 
    icon: "mdi:calendar", 
    title: "Planning", 
    text: "Define your voice agent requirements and use cases", 
    position: "md:top-0 md:left-0" 
  },
  { 
    icon: "mdi:tune", 
    title: "Configuration", 
    text: "Customize voice, language, and AI settings", 
    position: "md:top-0 md:right-0" 
  },
  { 
    icon: "mdi:cube", 
    title: "Training", 
    text: "Train your voice agent with custom data", 
    position: "md:bottom-0 md:left-0" 
  },
  { 
    icon: "mdi:lifebuoy", 
    title: "Deployment", 
    text: "Deploy and monitor your voice agent", 
    position: "md:bottom-0 md:right-0" 
  },
];