import { ReactNode } from 'react';

export interface DataType {
  temp: string;
  co2: string;
  status: string;
  description: string;
  color: string;
  gradient: string;
}

export interface DataProviderProps {
  children: ReactNode;
}
