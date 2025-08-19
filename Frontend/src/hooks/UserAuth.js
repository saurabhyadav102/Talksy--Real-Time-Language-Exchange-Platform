import React from 'react'
import { useQuery} from '@tanstack/react-query';
import { getAuthUser } from '../lib/api.js';

const UserAuth = () => {
  const authuser=useQuery({
          queryKey:["authuser"],
          queryFn:getAuthUser,
          retry:false,
      });
      return {isLoading:authuser.isLoading,authuser:authuser.data?.user};
}

export default UserAuth
