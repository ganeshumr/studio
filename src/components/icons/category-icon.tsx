import type {FC} from 'react';
import {
  FileCheck,
  Gavel,
  Landmark,
  Map,
  FileText,
  Zap,
  HelpCircle,
  Receipt,
} from 'lucide-react';
import {cn} from '@/lib/utils';

type CategoryIconProps = {
  categorySlug: string;
  className?: string;
};

const iconMap: Record<string, React.ComponentType<{className?: string}>> = {
  'property-audit': FileCheck,
  'legal-verification': Gavel,
  'loan-services': Landmark,
  'land-survey': Map,
  'property-documents': FileText,
  'electricity-bill-updates': Zap,
  'property-tax': Receipt,
};

export const CategoryIcon: FC<CategoryIconProps> = ({categorySlug, className}) => {
  const IconComponent = iconMap[categorySlug] || HelpCircle;
  return <IconComponent className={cn('h-4 w-4', className)} />;
};

    