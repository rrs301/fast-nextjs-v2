import React from 'react'
import WelcomeBanner from './WelcomeBanner'
import AiTools from './AiTools'
import History from "./History"
import HistoryPage from './History'

function Dashboard() {
    return (
        <div>
            <WelcomeBanner />
            <AiTools />
            <History />
        </div>
    )
}

export default Dashboard
