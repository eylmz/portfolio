import * as React from 'react';

export interface Page {
  icon: React.ReactElement;
  page: React.ReactElement;
}

export interface Employment {
  date: string;
  position: string;
  company: string;
  location: string;
}

export interface Skill {
  name: string;
  star: number;
}

export interface Education {
  year: string;
  department: string;
  school: string;
  location: string;
}

export interface Portfolio {
  name: string;
  url: string;
  imageUrl: string;
}
