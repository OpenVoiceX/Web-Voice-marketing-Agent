'use client'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AosInstance {
  init: (config?: AosConfig) => void;
}

interface AosConfig {
  duration?: number;
  easing?: string;
  once?: boolean;
  offset?: number;
  delay?: number;
}

interface AosComponentProps {
  children: React.ReactNode;
}

const Aoscompo = ({ children }: AosComponentProps) => {
  useEffect(() => {
    const aos = AOS as AosInstance;
    aos.init({
      duration: 800,
      once: false,
    });
  }, []);

  return <div>{children}</div>;
};

export default Aoscompo;
