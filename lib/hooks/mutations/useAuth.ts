import { APP_ROUTES, MUTATION_KEYS, QUERY_KEYS } from '@/lib/constants/common';
import { StatusAPIResponse } from '@farcaster/auth-kit';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

// export function useSignInMutation() {
//   return useMutation({
//     mutationKey: [MUTATION_KEYS.SIGN_IN],
//     mutationFn: (res: StatusAPIResponse) =>
//        fetch('/api/auth/sign-in', {
//         method: 'POST',
//         body: JSON.stringify({
//           message: res.message,
//           nonce: res.nonce,
//           signature: res.signature
//         })
//       });
//   });
// }

export function useSignOutMutation() {
  const { push } = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [MUTATION_KEYS.SIGN_OUT],
    mutationFn: () =>
      fetch('/api/auth/sign-out', {
        method: 'POST'
      }),
    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.AUTH] }),
        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PROFILE] })
      ]);

      push(APP_ROUTES.AUTH);
    }
  });
}
