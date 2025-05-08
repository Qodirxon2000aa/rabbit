"use client"

import { useEffect, useState } from "react"

// Activity Level Chart
export function ActivityLevelChart() {
  const [data, setData] = useState(generateActivityData())

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateActivityData())
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const maxValue = Math.max(...data.map((d) => d.value))
  const height = 150

  return (
    <div className="h-[180px] relative">
      
      <svg className="w-full h-full" viewBox={`0 0 ${data.length * 15} ${height}`}>
        <path
          d={`M0,${height} ${data.map((d, i) => `L${i * 15},${height - (d.value / maxValue) * height}`).join(" ")}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {data.map((d, i) => (
          <circle key={i} cx={i * 15} cy={height - (d.value / maxValue) * height} r="2" fill="currentColor" />
        ))}
      </svg>
      <div className="flex justify-between mt-2 text-sm">
        <span>Mar 23</span>
        <span>Mar</span>
        <span>29</span>
        <span>29</span>
      </div>
    </div>
  )
}

// Compound Chart
export function CompoundChart() {
  const [data, setData] = useState(generateCompoundData())

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateCompoundData())
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const maxValue = 4
  const height = 80

  return (
    <div>
      <div className="h-[100px] relative">
        <svg className="w-full h-full" viewBox={`0 0 ${data.length * 20} ${height}`}>
          <path
            d={`M0,${height} ${data.map((d, i) => `L${i * 20},${height - (d.value / maxValue) * height}`).join(" ")}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          {data.map((d, i) => (
            <circle key={i} cx={i * 20} cy={height - (d.value / maxValue) * height} r="2" fill="currentColor" />
          ))}
        </svg>
      </div>
      <div className="flex justify-between mt-2 text-sm">
        <span>Mar</span>
        <span>23</span>
        <span>7</span>
        <span>8</span>
        <span>13</span>
        <span>15</span>
        <span>23</span>
        <span>29</span>
      </div>
      <div className="text-right text-xl mt-1">3.4 g</div>
    </div>
  )
}

// Electrical Stimulation Chart
export function ElectricalStimulationChart() {
  const [data, setData] = useState(generateElectricalData())

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateElectricalData())
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const maxValue = 5
  const height = 80

  return (
    <div>
      <div className="h-[100px] relative">
        <div className="absolute left-0 top-0 text-sm">5</div>
        <div className="absolute left-0 top-1/2 text-sm">1</div>
        <div className="flex justify-between h-full items-end pl-6">
          {data.map((value, i) => (
            <div key={i} className="w-4 bg-amber-600/80" style={{ height: `${(value / maxValue) * 100}%` }} />
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-2 text-sm pl-6">
        <span>1</span>
        <span>7</span>
        <span>5</span>
        <span>8</span>
        <span>5</span>
        <span>6</span>
        <span>Gart</span>
      </div>
    </div>
  )
}

// Pathogen Chart
export function PathogenChart() {
  const [data, setData] = useState(generatePathogenData())

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generatePathogenData())
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const maxValue = 100
  const height = 100

  return (
    <div>
      <div className="h-[120px] relative">
        <div className="absolute left-0 top-0 text-sm">100</div>
        <div className="absolute left-0 top-1/4 text-sm">50</div>
        <div className="absolute left-0 top-1/2 text-sm">50</div>
        <div className="absolute left-0 top-3/4 text-sm">20</div>
        <div className="absolute left-0 bottom-0 text-sm">0</div>

        <svg className="w-full h-full pl-6" viewBox={`0 0 ${data.length * 20} ${height}`}>
          <path
            d={`M0,${height - (data[0].value / maxValue) * height} ${data.map((d, i) => `C${i * 20 - 10},${height - (d.value / maxValue) * height} ${i * 20 - 10},${height - (d.value / maxValue) * height} ${i * 20},${height - (d.value / maxValue) * height}`).join(" ")}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          {data.map((d, i) => (
            <circle key={i} cx={i * 20} cy={height - (d.value / maxValue) * height} r="2" fill="currentColor" />
          ))}
        </svg>
      </div>
      <div className="flex justify-between mt-2 text-sm pl-6">
        <span>1</span>
        <span>6</span>
        <span>12</span>
        <span>13</span>
        <span>25</span>
        <span>24</span>
        <span>26</span>
      </div>
      <div className="text-right text-xl mt-1">20%</div>
      <div className="text-center text-sm mt-2">Days in experiment</div>
    </div>
  )
}

// Helper functions to generate random data
function generateActivityData() {
  return Array.from({ length: 20 }, (_, i) => ({
    value: Math.random() * 3 + (i > 15 ? 2 : 1),
  }))
}

function generateCompoundData() {
  return [
    { value: 0.8 },
    { value: 1.0 },
    { value: 1.2 },
    { value: 1.5 },
    { value: 2.0 },
    { value: 2.3 },
    { value: 3.0 },
    { value: 3.4 },
  ]
}

function generateElectricalData() {
  return [
    Math.random() * 1.5,
    Math.random() * 2 + 2,
    Math.random() * 2 + 3,
    Math.random() * 2 + 2,
    Math.random() * 1.5 + 1,
    Math.random() * 1.5 + 0.5,
    Math.random() * 1.5 + 0.5,
    Math.random() * 1.5 + 0.5,
    Math.random() * 2 + 1,
    Math.random() * 1.5 + 0.5,
    Math.random() * 1.5 + 0.5,
    Math.random() * 1.5 + 0.5,
    Math.random() * 1.5 + 0.5,
  ]
}

function generatePathogenData() {
  return [
    { value: 100 },
    { value: 90 },
    { value: 80 },
    { value: 70 },
    { value: 60 },
    { value: 40 },
    { value: 30 },
    { value: 20 },
  ]
}
