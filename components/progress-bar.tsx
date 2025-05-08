interface ProgressBarProps {
  value: number
  maxValue: number
  label: string
  optimalLabel: string
}

export function ProgressBar({ value, maxValue, label, optimalLabel }: ProgressBarProps) {
  const percentage = (value / maxValue) * 100

  return (
    <div className="space-y-2">
      <div className="h-8 bg-amber-900/30 relative">
        <div className="h-full bg-amber-700/70" style={{ width: `${percentage}%` }} />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl">{label}</div>
      </div>
      <div className="h-4 bg-amber-800/20 relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sm">{optimalLabel}</div>
      </div>
    </div>
  )
}
