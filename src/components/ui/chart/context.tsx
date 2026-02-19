import * as React from 'react';

import { type ChartConfig } from '@/components/ui/chart/types';

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

export { ChartContext };
