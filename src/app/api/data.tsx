// /app/api/data.ts
import * as React from "react";

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
    mark: "+5% Accuracy",
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
    mark: "+10% Clarity",
    width: 24,
    height: 24,
    padding: "p-2",
  },
  {
    title: "Multi-Language",
    short: "Language Support",
    icon: "mdi:language",
    background: "bg-primary/20",
    status: "Beta",
    mark: "+3 Languages",
    width: 24,
    height: 24,
    padding: "p-2",
  },
  {
    title: "Analytics",
    short: "Usage Insights",
    icon: "mdi:chart-bar",
    background: "bg-secondary/20",
    status: "Active",
    mark: "+15% Engagement",
    width: 24,
    height: 24,
    padding: "p-2",
  },
];

export const portfolioData: { image: string; title: string; svg: JSX.Element }[] = [
  {
    image: "",
    title: "Manage Your Agents",
    svg: (
      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.5 12C15.5 13.38 14.38 14.5 13 14.5H11C9.62 14.5 8.5 13.38 8.5 12V8C8.5 6.62 9.62 5.5 11 5.5H13C14.38 5.5 15.5 6.62 15.5 8V12Z" fill="#4B5EFC"/>
        <path d="M13 12H11V8H13V12Z" fill="white"/>
        <path d="M16 14H15V15H14V16H15V17H16V16H17V15H16V14Z" fill="#4B5EFC"/> {/* Additional gear-like element for management */}
      </svg>
    ),
  },
  {
    image: "",
    title: "Secure Deployments",
    svg: (
      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 12L10 16L8 14L12 10L15 12Z" fill="#4B5EFC"/>
        <path d="M12 6L14 8L12 10L10 8L12 6Z" fill="white"/> {/* Lock-like shape for security */}
      </svg>
    ),
  },
  {
    image: "",
    title: "Mobile Control",
    svg: (
      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 1.01L7 1C5.9 1 5 1.9 5 3L5 21C5 22.1 5.9 23 7 23L17 23C18.1 23 19 22.1 19 21L19 3C19 1.9 18.1 1.01 17 1.01ZM17 19L7 19L7 5L17 5V19ZM13 18L15 16L13 14V16L9 16V14L7 16L9 18V20L13 20V18Z" fill="#4B5EFC"/>
        <path d="M12 12L11 11L10 12V13H11V14H13V13H14V12H13V11L12 12Z" fill="white"/> {/* Control button on phone */}
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
    text: "Get help anytime with our dedicated team.",
    space: "lg:mt-8",
    svg: (
      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 13H13V15H11V13H9V11H11V9H13V11H15V13Z" fill="#4B5EFC"/>
        <path d="M12 7V17" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round"/> {/* Support headset mic */}
      </svg>
    ),
  },
  {
    icon: "",
    title: "Community",
    text: "Join our global voice agent community.",
    space: "lg:mt-14",
    svg: (
      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 15H9V13H15V15ZM15 11H9V9H15V11Z" fill="#4B5EFC"/>
        <path d="M12 8C10.9 8 10 8.9 10 10C10 11.1 10.9 12 12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8Z" fill="white"/> {/* Person in community */}
      </svg>
    ),
  },
  {
    icon: "",
    title: "Academy",
    text: "Learn voice AI for free.",
    space: "lg:mt-4",
    svg: (
      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2ZM12 20V12L2 7V17C2 18.1 2.9 19 4 19H20C21.1 19 22 18.1 22 17V7L12 12V20Z" fill="#4B5EFC"/>
        <path d="M4 19H20V17H4V19Z" fill="white"/> {/* Book or diploma for academy */}
      </svg>
    ),
  },
];
export const timelineData: { icon: string; title: string; text: string; position: string }[] = [
  { icon: "mdi:calendar", title: "Planning", text: "Define your voice agent strategy", position: "md:top-0 md:left-0" },
  { icon: "mdi:tune", title: "Configuration", text: "Customize your agent settings", position: "md:top-0 md:right-0" },
  { icon: "mdi:cube", title: "Prototype", text: "Test your voice agent prototype", position: "md:bottom-0 md:left-0" },
  { icon: "mdi:lifebuoy", title: "Support", text: "Full support post-deployment", position: "md:bottom-0 md:right-0" },
];