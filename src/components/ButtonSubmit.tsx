'use client'
import React from 'react'
import { Button } from './ui/button'
import { Loader2, SendHorizontal } from 'lucide-react'
import { useFormStatus } from 'react-dom'

export default function ButtonSubmit({ children  }: { children: React.ReactNode }) {

    const { pending } = useFormStatus()
  return (
    <Button
    
    className="w-32"
    
    disabled={pending} // Disable button when loading
  >
    {pending ? (
      <Loader2 className="h-4 w-4 animate-spin" /> // Show loading spinner
    ) : (
      <SendHorizontal />
    )}

    {children}
  </Button>
  )
}
