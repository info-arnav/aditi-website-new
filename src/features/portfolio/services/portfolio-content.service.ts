import { fetchPortfolioContent } from '@/features/portfolio/api/portfolio-content.api';
import type { PortfolioContent } from '@/features/portfolio/model/types';

function getPortfolioContent(): PortfolioContent {
  return fetchPortfolioContent();
}

export { getPortfolioContent };
