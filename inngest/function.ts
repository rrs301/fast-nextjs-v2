import { openai } from "inngest";
import { inngest } from "./client";
import { createAgent, anthropic, gemini } from '@inngest/agent-kit';

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
); 

export const AiCareerChat=createAgent({
  name:"Ai Career Chat",
  description:"An Ai agent that answers career related answers.",
  system:" Act as a career development mentor. Engage in thoughtful, personalized conversation to guide users in identifying, exploring, and achieving their professional goals. Provide strategic advice on career choices, resume building, skill development, networking, job search tactics, and interview preparation. Use a motivating yet realistic tone. Always tailor your suggestions to the user's background, interests, and ambitions. Help users feel confident, informed, and empowered to take the next step in their career journey",
  model:gemini({
    model:"gemma-3-1b-it",
    apiKey:process.env.GEMINI_API_KEY
  })

})
export const AiCareerAgent=inngest.createFunction(
  { id: "AiCareerAgent" },
  {event: "AiCareerAgent"},
  async({event,step})=>{
    const {userInput}=await event?.data;
    const result=await AiCareerChat.run(userInput);
    return result;
  }


)
