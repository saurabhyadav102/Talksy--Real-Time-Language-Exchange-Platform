import React from 'react'
import { useQueryClient,useMutation } from "@tanstack/react-query";
import { logout } from '../lib/api.js';
const uselogout = () => {
  const queryClient = useQueryClient();
   const { mutate } = useMutation({
     mutationFn: logout,
     onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authuser"] }),
   });
  return {logoutMutation:mutate};
}

export default uselogout
