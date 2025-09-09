import Link from 'next/link';
import {AreaChart} from 'lucide-react';
import {cn} from '@/lib/utils';

export function Logo({className}: {className?: string}) {
  return (
    <Link
      href="/"
      className={cn('inline-flex items-center gap-2', className)}
      aria-label="Back to homepage"
    >
      <div className="bg-primary text-primary-foreground p-2 rounded-md">
        <AreaChart className="h-5 w-5" />
      </div>
      <span className="text-xl font-bold font-headline tracking-tighter text-foreground">
        Jaaga Insights
      </span>
    </Link>
  );
}
