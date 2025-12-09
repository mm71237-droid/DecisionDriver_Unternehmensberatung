import React from 'react';

export enum Page {
  Home = 'HOME',
  Services = 'SERVICES',
  BestPractices = 'BEST_PRACTICES',
  KeyNoteSpeaker = 'KEYNOTE_SPEAKER',
  About = 'ABOUT',
  Contact = 'CONTACT'
}

export interface NavItem {
  label: string;
  page: Page;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}