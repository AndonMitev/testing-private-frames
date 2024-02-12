import { getAuthAction } from '../../actions/auth';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../constants/common';

export default function useAuthQuery() {
  return useQuery({
    queryKey: [QUERY_KEYS.AUTH],
    queryFn: () => getAuthAction()
  });
}
