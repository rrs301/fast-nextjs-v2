import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface TOOL {
    name: string,
    desc: string,
    icon: string,
    button: string,
    path: string,
}

type AIToolsProps = {
    tool: TOOL
}

function AiToolsCard({ tool }: AIToolsProps) {
  return (
    <div className="p-3 border rounded-lg">
        <Image src={tool.icon} alt={tool.name} width={40} height={40} />
        <h2 className="font-medium">{tool.name}</h2>
        <p className="text-gray-400">{tool.desc}</p>
        <Link href={tool.path}>
            <button className="w-full mt-3">{tool.button}</button>
        </Link>
    </div>
  )
}

export default AiToolsCard