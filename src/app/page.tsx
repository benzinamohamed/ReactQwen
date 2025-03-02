"use client";

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JSX, useState } from "react";
import { useRouter } from 'next/navigation'

export default function Home(): JSX.Element {
  const router = useRouter()
  const [prompt, setPrompt] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setClicked(true);
    router.push("/conversations/5");
  }
  return (
    <div className="flex flex-col justify-between items-center mt-40 " >
      <div className="flex">
        <h1 className="text-5xl font-bold font-inter text-center text-primary">
        Build Web Components Faster with AI
        </h1>
      </div>
      <div className="mt-16">
        <h2 className="font-inter  text-2xl text-white">
        Describe. Generate. Customize. Done.
        </h2>
      </div>
      <div className="grid gap-2 w-[50%] mt-16 ">
        <Textarea
          placeholder="Describe the component you need (e.g., a responsive navbar with a dropdown menu)..."
          className="focus:no-scrollbar focus:outline-none focus:ring-0 focus:border-none focus-visible:ring-0   border-2 mt-8 resize-none rounded-2xl bg-primary  place-self-center h-[15rem] mb-6 text-xl md:text-xl "
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button onClick={handleClick} disabled={clicked}  className="text-primary rounded-xl p-6 text-xl bg-boxes font-inter hover:bg-black" >Generate Component</Button>
      </div>
    </div>
  );
}
