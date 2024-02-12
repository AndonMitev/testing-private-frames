import { fetchProfileAction } from '@/lib/actions/profile';
import { QUERY_KEYS } from '@/lib/constants/common';
import { useQuery } from '@tanstack/react-query';

export default function useProfileQuery() {
  return useQuery({
    queryKey: [QUERY_KEYS.PROFILE],
    queryFn: () => fetchProfileAction()
  });
}
