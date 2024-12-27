'use client'

import React, { useEffect, useState } from 'react'
import { Player } from "@lottiefiles/react-lottie-player"
import lottieAnimation from "../assets/lottie.json"

export default function Applicants() {
  const [applications, setApplications] = useState([])

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch("http://localhost:5001/jobapplications")
        if (response.ok) {
          const data = await response.json()
          setApplications(data)
        } else {
          console.error('Failed to fetch applications')
        }
      } catch (error) {
        console.error('Error fetching applications:', error)
      }
    }

    fetchApplications()
  }, [])

  return (
    <div className="min-h-screen bg-[#2D1B69] p-4">
      <div className="max-w-6xl w-full mx-auto">
        <div className="backdrop-blur-sm bg-[#1a103f]/50 border border-purple-500/20 rounded-xl p-8">
          <h1 className="text-purple-200 text-3xl font-bold mb-8">Applications</h1>
          <div className="overflow-x-auto">
            <table className="w-full text-purple-100">
              <thead>
                <tr className="bg-purple-900/50">
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Email</th>
                  <th className="px-6 py-3 text-left">Position</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.regno} className="border-b border-purple-500/20">
                    <td className="px-6 py-4">{app.name}</td>
                    <td className="px-6 py-4">{app.email}</td>
                    <td className="px-6 py-4">{app.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 w-64 h-64 opacity-30">
        <Player
          autoplay
          loop
          src={lottieAnimation}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  )
}
