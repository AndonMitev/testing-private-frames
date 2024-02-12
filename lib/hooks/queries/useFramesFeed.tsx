import { fetchFramesFeedAction } from '@/lib/actions/frames';
import { QUERY_KEYS } from '@/lib/constants/common';
import { useQuery } from '@tanstack/react-query';

export default function useFramesFeedQuery() {
  return useQuery({
    queryKey: [QUERY_KEYS.FRAMES_FEED],
    queryFn: () => fetchFramesFeedAction()
  });
}
