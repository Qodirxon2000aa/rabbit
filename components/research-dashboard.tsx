"use client"
import { RiTwitterXFill } from "react-icons/ri";
import { useEffect, useState } from "react"
import Image from "next/image"
import { ActivityLevelChart, CompoundChart, ElectricalStimulationChart, PathogenChart } from "@/components/charts"
import { ProgressBar } from "@/components/progress-bar"
import { Play } from "lucide-react"

export default function ResearchDashboard() {
  const [chamberTemp, setChamberTemp] = useState(91.7)
  const [humidity, setHumidity] = useState(47)
  const [average, setAverage] = useState(93)

  // Update values by 1% every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setChamberTemp((prev) => {
        const newValue = prev + (Math.random() > 0.5 ? 1 : -1)
        return Math.min(Math.max(newValue, 80), 100) // Keep between 80-100
      })

      setHumidity((prev) => {
        const newValue = prev + (Math.random() > 0.5 ? 1 : -1)
        return Math.min(Math.max(newValue, 40), 60) // Keep between 40-60
      })

      setAverage((prev) => {
        const newValue = prev + (Math.random() > 0.5 ? 1 : -1)
        return Math.min(Math.max(newValue, 85), 98) // Keep between 85-98
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-6xl p-8 text-amber-500/90 font-light">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl md:text-5xl font-normal">Rodentia Research Labs</h1>
        <div className="flex space-x-2">
            <a
              href="#"
              className="border border-white rounded flex items-center justify-center px-4 py-1 hover:bg-white white hover:text-[#5D4B8C] transition-colors"
            >
              <RiTwitterXFill />
            </a>
            <a
              href="#"
              className="border border-white rounded px-4 py-1 flex items-center hover:bg-white hover:text-[#5D4B8C] transition-colors"
            >
              <Play
               className="w-4 h-4 mr-2" /> LIVE FEED
            </a>
            <a
              href="#"
              className="border border-white rounded px-4 py-1 hover:bg-white hover:text-[#5D4B8C] transition-colors"
            >
              EXPORT
            </a>
            <a
              href="#"
              className="border border-white rounded px-4 py-1 hover:bg-white hover:text-[#5D4B8C] transition-colors"
            >
              ALERTS
            </a>
          </div>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl mb-4 tracking-wider">OBSERVATION</h3>
            <div className="flex justify-center">
              <div className="relative w-128 h-64">
              <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                >
                  <source src="/rabbit.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-2 tracking-wider">SUBJECT A-108</h3>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-lg">Average</p>
                <svg className="w-20 h-6 my-1" viewBox="0 0 80 24">
                  <path d="M0,12 Q10,8 20,12 T40,8 T60,16 T80,12" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="text-5xl font-light">{average}%</div>
            </div>
            <p className="mt-2">AVA 11</p>
          </div>

          <div>
            <h3 className="text-xl mb-4 tracking-wider">CHAMBER TEMP</h3>
            <ProgressBar
              value={chamberTemp}
              maxValue={100}
              label={`${chamberTemp.toFixed(1)}%`}
              optimalLabel="Optimal range"
            />
          </div>

          <div>
            <h3 className="text-xl mb-4 tracking-wider">HUMIDITY</h3>
            <ProgressBar value={humidity} maxValue={100} label={`${humidity}%`} optimalLabel="Optimal range" />
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-8">
        <div className="">
          <h2 className="text-2xl md:text-3xl">EXPERIMENTAL ANALYTICS</h2>
      </div>
          <div>
            
            <h3 className="text-xl mb-4 tracking-wider">ACTIVITY LEVEL</h3>
            
            <ActivityLevelChart />
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg">RR-364</span>
                <span className="text-lg">Compound A</span>
              </div>
              <CompoundChart />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg">RR-147</span>
                <span className="text-lg">Electrical Stimulation</span>
              </div>
              <ElectricalStimulationChart />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg">RR-215</span>
                <span className="text-lg">Pathogen X</span>
              </div>
              <PathogenChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
