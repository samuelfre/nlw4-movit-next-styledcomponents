import React from 'react'
import LateralBar from '../components/LateralBar'
import { LateralProvider } from '../contexts/LateralBarContext'

export default function Ranking() {
  return (
    <div style={{
      display: 'flex',
    }}>
      <LateralBar />

    </div>
  )
}
