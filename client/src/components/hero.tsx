import { FolderCard } from "./foldercard";
import { Button } from "./ui/button";

export const Hero = () => {
    return (
      <div className=" border  rounded-xl relative h-screen bg-[url('/heroBG.jpg')] bg-cover bg-center ">
        <div className="absolute inset-0 " />
        <div className="relative z-10 flex flex-col h-full items-center justify-center  text-center px-6">
        <div className="w-20 aspect-square rounded-3xl
                backdrop-blur-xl
                 
                bg-white/20
                border border-slate-400
                ring-1 ring-white/40
                shadow-xl">
                  <img src="/piggy.svg" alt="folder" className="w-72" />
</div>
        <h1 className="font-bold text-black leading-tight text-5xl sm:text-7xl md:text-8xl lg:text-6xl max-w-5xl">
          Know where your money goes.
        </h1>

        <h1 className="font-bold text-slate-300 leading-tight text-5xl sm:text-7xl md:text-8xl lg:text-6xl max-w-5xl">
          Own where it goes next.
        </h1>
        <Button className="mt-2">Get Started</Button>
      </div>
      </div>
    );
  };