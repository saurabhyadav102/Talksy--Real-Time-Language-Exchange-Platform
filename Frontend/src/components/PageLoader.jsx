import React from 'react'
import { LoaderIcon } from 'lucide-react'
import { useThemeStore } from '../store/useThemeStore'
function PageLoader() {
  const{theme}=useThemeStore()

  return (
       <div className='min-h-screen flex items-center justify-center' data-them={theme}>
          <LoaderIcon className='animate-spin size-20 text-primary'/>
       </div>
  )
}

export default PageLoader
