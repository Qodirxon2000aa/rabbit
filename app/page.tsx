"use client"

import { useState, useEffect } from "react"
import ResearchDashboard from "@/components/research-dashboard"
import LoadingScreen from "@/components/loading-screen"
import MonitoringFooter from "@/components/monitoring-footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className="w-full max-w-6xl flex-grow py-8">
            <ResearchDashboard />
          </div>
          <div className="w-full max-w-6xl px-4 pb-8">
            <MonitoringFooter />
          </div>
        </>
      )}
    </main>
  )
}
