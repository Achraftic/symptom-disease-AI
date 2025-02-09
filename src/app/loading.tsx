import { LoaderCircle } from 'lucide-react'
import React from 'react'

export default function loading() {
  return (
    <div className='flex justify-center items-center h-[76vh] w-full'>
        <LoaderCircle className=' animate-spin text-primary '  size={50}/>

    </div>
  )
}
