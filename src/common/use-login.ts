import type { AxiosError } from 'axios';
import { createMutation, CreateMutationOptions } from 'react-query-kit';

import { client } from './client';
import type { AuthStatus } from '../types/types';

type Variables = { username: string; password: string };
type Response = AuthStatus;

export const useLogin = createMutation<Response, Variables, AxiosError>({
  mutationFn: async (variables: Variables) =>
    client({
      url: 'api/auth/authenticate',
      method: 'POST',
      data: variables,
    }).then((response) => response.data),
  onSuccess: (data:Response) => {
    console.log('Login successful', data);
  },
  onError: (error: AxiosError) => {
    console.error('Login failed', error);
  },
} as CreateMutationOptions<Response, Variables, AxiosError>);
