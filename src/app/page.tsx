import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col justify-between items-center mt-40" >
      <div className="flex">
        <h1 className="text-5xl font-bold font-inter text-center text-secondary">
        Build Web Components Faster with AI
        </h1>
      </div>
      <div className="mt-16">
        <h2 className="font-inter  text-2xl text-accent">
        Describe. Generate. Customize. Done.
        </h2>
      </div>
      <div className="grid gap-2 w-[60%] mt-16 ">
        <Textarea
          placeholder="Describe the component you need (e.g., a responsive navbar with a dropdown menu)..."
          className="mt-8 resize-none rounded-2xl bg-gray-200  place-self-center h-[15rem] mb-8 text-xl md:text-2xl "
          
        />
        <Button className="text-white rounded-xl p-6 text-xl bg-secondary font-inter   " >Generate Component</Button>
      </div>
    </div>
  );
}
