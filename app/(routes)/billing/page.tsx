import { PricingTable } from '@clerk/nextjs'
import React from 'react'

function billing() {
  return (
    <div>
        <h2 className= "font-bold text-3xl justify-center">Choose your plan</h2>
        <p className="text-lg justify-center">Subscribe to the plan based on yor needs for a better future</p>
        <div className="mt-6 text-border"><PricingTable /></div>
    </div>
  )
}

export default billing