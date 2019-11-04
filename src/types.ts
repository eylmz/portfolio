import * as React from 'react';

export interface Page {
  icon: React.ReactElement;
  page: React.ReactElement;
}

export interface Employment {
  date: string;
  position: string;
  company: string;
  city: string;
}
