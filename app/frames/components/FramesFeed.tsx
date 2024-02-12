'use client';

import { Optional } from '@/lib/types/common';
import { Frame } from '@neynar/nodejs-sdk/build/neynar-api/v2';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';

import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/common';
import { fetchFramesFeedAction } from '@/lib/actions/frames';

export default function FramesFeed() {
  const { data: framesFeed } = useQuery({
    queryKey: [QUERY_KEYS.FRAMES_FEED],
    queryFn: () => fetchFramesFeedAction()
  });

  if (!framesFeed) {
    return;
  }

  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4'>
      {framesFeed.map((frame, idx) => (
        <FrameCard key={idx} frame={frame} />
      ))}
    </div>
  );
}

type FrameCardProps = {
  frame: Optional<Frame>;
};

function FrameCard({ frame }: FrameCardProps) {
  if (!frame) {
    return;
  }

  return (
    <Card className='bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-full transition-all duration-300 hover:shadow-lg select-none'>
      <CardContent className='relative w-full h-[200px] sm:h-[200px]'>
        <Image
          src={frame.image}
          alt='frame-image'
          fill
          className='object-fit'
        />
      </CardContent>
      <CardFooter className='grid grid-cols-2 md:grid-cols-4 gap-4 p-2 bg-opacity-90 backdrop-blur-xl bg-zinc-900 backdrop-filter'>
        {frame.buttons?.map((button) => (
          <Button className='text-xs' key={button.index}>
            {button.title}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}
