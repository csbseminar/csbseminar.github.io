"use client"

import { useEffect } from "react"

interface ClientRedirectProps {
  to: string;
  type: string;
}

export default function ClientRedirect({ to, type }: ClientRedirectProps) {
  useEffect(() => {
    // Decode URLs if they were encoded
    const url = decodeURIComponent(to)
    
    // Redirect on the client side
    window.location.href = url
  }, [to])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Redirecting you to {type}...</h1>
      <p>If you are not redirected automatically, <a href={to} className="text-blue-500 hover:underline">click here</a>.</p>
    </div>
  )
} 