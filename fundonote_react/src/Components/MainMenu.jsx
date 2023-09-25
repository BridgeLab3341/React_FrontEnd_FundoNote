
import React from 'react'
import MiniDrawer from './Header'
import CreateNote from './CreateNote/Note'

export default function Dashboard() {
  return (
    <div>
        <MiniDrawer/>
        <CreateNote/>
    </div>
  )
}
