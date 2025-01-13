import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeftSquare, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="h-full flex flex-col justify-center items-center relative">
        <h2 className="text-4xl md:text-7xl font-semibold">AI Content Generator</h2>
        <p className="my-10 md:my-3 font-medium text-sm md:text-lg tracking-tight md:tracking-wider">A Perfect Tool for Working Professionals, Students, Content Creators & More.. </p>
        <Link href={"/dashboard"} className={cn("shadow-md", buttonVariants())}>Get Started <ArrowRight /></Link>
        <h2 className="flex flex-col items-center justify-center absolute bottom-10 right-10 select-none pointer-events-none"><p className="font-semibold">Powered By:</p> <Image src={"/gemini.png"} alt="powered-by" height={70} width={70} /></h2>
      </div>
    </div>
  );
}
