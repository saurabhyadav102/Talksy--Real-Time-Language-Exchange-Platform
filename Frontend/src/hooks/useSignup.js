import React from 'react'
import { useQueryClient,useMutation } from '@tanstack/react-query';
import { signup } from "../lib/api.js";
const useSignup = () => {
  const queryClient = useQueryClient();
  const {
    mutate,
    isPending,
    error,
  } = useMutation({
    mutationFn: signup,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authuser"] }),
  });
  return {isPending,error,signupMutation:mutate};
}

export default useSignup
