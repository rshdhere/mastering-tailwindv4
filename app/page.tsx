import { Container } from "@/components/container";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="h-screen relative bg-blue-50 [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)] ">
      {/* this is how you write lines my boy*/}
      <div className="max-w-5xl mx-auto absolute inset-0 h-full w-full pointer-events-none" >
        <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent"></div>
      </div>
      <Container>
        <Navbar/>
      </Container>
      </div>
  );
}
