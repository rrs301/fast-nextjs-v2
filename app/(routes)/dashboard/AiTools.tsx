import React from 'react'
import AiToolsCard from './AiToolsCard'
import { Grid, Grid2X2 } from 'lucide-react'

const AiToolsList= [{
    name:"AI Career Q&A Chat",
    desc:"Chat with AI Agent",
    icon:"/chatbot.png",
    button:"let's Chat",
    path:"/aitools/aichat",


},
{
    name:"AI Career Q&A Chat",
    desc:"Chat with AI Agent",
    icon:"/chatbot.png",
    button:"let's Chat",
    path:"/aitools/aichat",


},{
    name:"AI Career Q&A Chat",
    desc:"Chat with AI Agent",
    icon:"/chatbot.png",
    button:"let's Chat",
    path:"/aitools/aichat",


},{
    name:"AI Career Q&A Chat",
    desc:"Chat with AI Agent",
    icon:"/chatbot.png",
    button:"let's Chat",
    path:"/aitools/aichat",


}


]

function AiTools() {
  return (
    <div className="mt-7 p-5 bg-white rounded-xl border-cyan-900 gap-2">
        <h2 className="font-bold text-lg">AI Tools</h2>
        <p className="text-black mt-2 gap-2">Start building and make your career with AI tools</p>
        

        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"}>

            {AiToolsList.map((tool:any ,index)=>(
                <AiToolsCard tool={tool} key={index}/>
            ) )}
        </div>
    </div>
  )
}

export default AiTools