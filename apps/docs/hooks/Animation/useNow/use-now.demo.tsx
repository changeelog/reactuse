'use client';

import { useEffect, useState } from 'react';
import { Button } from '../../../components/ui/button';
import { useNow } from './use-now';
import Demo from '@/components/Common/Demo/demo';

export default function NowDemo(): JSX.Element {
  const { now, pause, resume } = useNow({ controls: true, interval: 1000 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Demo category="Animation" title="useNow">
      <div className="flex items-center justify-center space-x-4">
        {isClient ? (
          <span className="text-2xl">{now.toLocaleTimeString()}</span>
        ) : null}
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <Button onClick={pause}>Pause</Button>
        <Button onClick={resume}>Resume</Button>
      </div>
    </Demo>
  );
}
