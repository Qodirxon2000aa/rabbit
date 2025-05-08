"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Activity, Utensils, Droplet } from "lucide-react"

interface MonitoringPanelProps {
  title: string
  icon: React.ReactNode
  value: number
  lastValue: number
  avgValue: number
  peakValue: number
}

export default function MonitoringFooter() {
  // Initialize state from localStorage or default values
  const [activityValue, setActivityValue] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("activityValue")
      return saved ? Number.parseInt(saved) : 76
    }
    return 76
  })

  const [foodValue, setFoodValue] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("foodValue")
      return saved ? Number.parseInt(saved) : 64
    }
    return 64
  })

  const [waterValue, setWaterValue] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("waterValue")
      return saved ? Number.parseInt(saved) : 89
    }
    return 89
  })

  // Update values every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActivityValue((prev) => {
        const newValue = Math.min(prev + 1, 100)
        localStorage.setItem("activityValue", newValue.toString())
        return newValue
      })

      setFoodValue((prev) => {
        const newValue = Math.min(prev + 1, 100)
        localStorage.setItem("foodValue", newValue.toString())
        return newValue
      })

      setWaterValue((prev) => {
        const newValue = Math.min(prev + 1, 100)
        localStorage.setItem("waterValue", newValue.toString())
        return newValue
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-black border border-amber-900/30 p-2 rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <MonitoringPanel
          title="ACTIVITY"
          icon={<Activity className="w-5 h-5" />}
          value={activityValue}
          lastValue={82}
          avgValue={78}
          peakValue={94}
        />

        <MonitoringPanel
          title="FOOD"
          icon={<Utensils className="w-5 h-5" />}
          value={foodValue}
          lastValue={58}
          avgValue={65}
          peakValue={72}
        />

        <MonitoringPanel
          title="WATER"
          icon={<Droplet className="w-5 h-5" />}
          value={waterValue}
          lastValue={85}
          avgValue={82}
          peakValue={91}
        />
      </div>
    </div>
  )
}

function MonitoringPanel({ title, icon, value, lastValue, avgValue, peakValue }: MonitoringPanelProps) {
  return (
    <div className="bg-black border border-amber-700/30 rounded-md p-3">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2 text-amber-500/90">
          {icon}
          <span className="font-bold tracking-wider">{title}</span>
        </div>
        <div className="flex gap-1">
          <button className="bg-amber-900/30 text-amber-500/90 text-xs px-1 rounded">D</button>
          <button className="bg-black text-amber-500/90 text-xs px-1 rounded border border-amber-700/30">W</button>
          <button className="bg-black text-amber-500/90 text-xs px-1 rounded border border-amber-700/30">M</button>
        </div>
      </div>

      {/* Graph area */}
      <div className="h-24 bg-gradient-to-b from-amber-900/20 to-black mb-2 relative">
        <div className="absolute top-0 left-0 right-0 h-4 bg-black" />
      </div>

      {/* Value display */}
      <div className="text-center text-amber-500/90 text-3xl font-bold mb-2">{value}%</div>

      {/* Stats */}
      <div className="flex justify-between text-xs text-amber-500/70">
        <div>LAST: {lastValue}%</div>
        <div>AVG: {avgValue}%</div>
        <div>PEAK: {peakValue}%</div>
      </div>
    </div>
  )
}
