import { Link } from 'react-router-dom';
import MaxWidthWrapper from '@/components/max-width-wrapper.tsx';
import { Button, buttonVariants } from '@/components/ui/button.tsx';
import LandingImg from "@/assets/todo.png"
import { IconFacebook } from '@/components/icons/IconFacebook.tsx';
import { IconTwitter } from '@/components/icons/IconTwitter.tsx';
import { IconInstagram } from '@/components/icons/IconInstagram.tsx';


const Landing = () => {

  return (
    <div className="w-full min-h-screen flex flex-col bg-zinc-50">
      <div className="sticky top-0 inset-x-0 h-14 w-full border-b border-gray-200">
        <MaxWidthWrapper>
          <div className="flex h-14 items-center justify-between border-b border-zinc-200">
            <Link to={"/"} className="z-40 text-2xl flex font-semibold">
              To<span className="text-primary">Do</span>
            </Link>
            <div className="flex h-full items-center space-x-4">
              <Link to="/login" className={buttonVariants({size: "sm", variant: "ghost"})}>
                Login
              </Link>
              <Link to="/signup" className={buttonVariants({size: "sm", variant: "default"})}>
                Sign up
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="flex-1">
        <MaxWidthWrapper >
          <div className="grid grid-cols-2 pt-12 pb-24 grid-flow-col">
            <div className="col-span-1 relative pt-8">
              <h1 className="text-4xl text-slate-800 font-bold tracking-tight leading-tight">To-Do</h1>
              <h1 className="text-4xl text-slate-800 font-bold tracking-tight leading-tight">List</h1>
              <p className="mt-4 mb-8 lg:mb-16 font-normal text-slate-800 text-md tracking-wide leading-12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores aut, consectetur dolores eaque eveniet excepfont-bold tracking-tight leading-tightturi exercitationem id, libero maxime minima neque nihil non nulla quae, quod reprehenderit ut voluptatibus!
              </p>

              <div className="flex justify-start items-center gap-x-6">
                <Button size="lg">
                  Learn More
                </Button>
                <Button size="lg" variant="outline">
                  FAQ
                </Button>
              </div>

               <div className="flex absolute bottom-0 justify-start items-center gap-x-6">
                  <div className="flex cursor-pointer items-center gap-4">
                    <div className="w-10 h-10 bg-slate-900 flex justify-center items-center rounded-full overflow-hidden mt-auto">
                      <IconFacebook className="w-5 h-5 text-white fill-white" />
                    </div>
                    <p className="text-md font-medium">Facebook</p>
                  </div><div className="flex cursor-pointer items-center gap-4">
                    <div className="w-10 h-10 bg-slate-900 flex justify-center items-center rounded-full overflow-hidden mt-auto">
                      <IconInstagram className="w-5 h-5 text-white fill-white" />
                    </div>
                    <p className="text-md font-medium">Instagram</p>
                  </div>
                 <div className="flex cursor-pointer items-center gap-4">
                   <div
                     className="w-10 h-10 bg-slate-900 flex justify-center items-center rounded-full overflow-hidden mt-auto">
                     <IconTwitter className="w-5 h-5 text-white fill-white" />
                   </div>
                   <p className="text-md font-medium">X</p>
                 </div>
               </div>
            </div>
            <div className="col-span-1 py-8">
              <img src={LandingImg} alt="landingImg" className="w-full h-[500px] object-cover " />
            </div>
          </div>
        </MaxWidthWrapper >
      </div>
    </div>
  );
};

export default Landing;
