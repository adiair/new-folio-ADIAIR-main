"use client"

import { useState, useEffect } from "react"

export function FooterStats() {
  const [visitorCount, setVisitorCount] = useState<number>()
  const [currentTime, setCurrentTime] = useState<string>("80085")

  useEffect(() => {
    const initializeVisitorCount = () => {
      const stored = localStorage.getItem("portfolio-visitor-count")
      const count = stored ? Number.parseInt(stored, 10) : 100 // Start from 100 as base
      const newCount = count + 1
      localStorage.setItem("portfolio-visitor-count", newCount.toString())
      setVisitorCount(newCount)
    }

    const updateTime = () => {
      const now = new Date()
      const bhopalTime = now.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
      const location = "Bhopal"
      setCurrentTime(`${location}, ${bhopalTime}`)
    }

    initializeVisitorCount()
    updateTime()

    // Update time every second
    const timeInterval = setInterval(updateTime, 1000)

    return () => clearInterval(timeInterval)
  }, [])

  return (
    <div className="text-md flex items-center gap-5 text-muted-foreground">
      
         <p className="relative flex items-center justify-center gap-2">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-85"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
        </div>
        Visitors #{visitorCount}</p>
      <p>{currentTime}</p>
    </div>
  )
}
