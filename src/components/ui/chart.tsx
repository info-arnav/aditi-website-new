import * as RechartsPrimitive from 'recharts';

import { ChartContainer } from '@/components/ui/chart/container';
import { ChartLegendContent } from '@/components/ui/chart/legend-content';
import { ChartStyle } from '@/components/ui/chart/style';
import { ChartTooltipContent } from '@/components/ui/chart/tooltip-content';

const ChartTooltip = RechartsPrimitive.Tooltip;
const ChartLegend = RechartsPrimitive.Legend;

export type { ChartConfig } from '@/components/ui/chart/types';
export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
