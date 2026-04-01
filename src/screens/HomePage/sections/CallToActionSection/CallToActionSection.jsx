import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = () => {
  return (
    <section className="w-full flex justify-center px-2 sm:px-4 py-6 sm:py-8">
      <Card className="w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[1342px] min-h-[280px] sm:min-h-[350px] md:min-h-[447px] border border-solid border-[#ffb000] shadow-[0px_4px_4px_#00000040] bg-[linear-gradient(90deg,rgba(10,10,16,1)_0%,rgba(23,33,55,1)_100%)] rounded-[20px] sm:rounded-[35px] overflow-hidden p-0">
        <CardContent className="p-0 relative w-full min-h-[280px] sm:min-h-[350px] md:min-h-[447px] flex flex-col md:flex-row items-center">
          {/* Decorative gradient overlay */}
          <div className="hidden md:block absolute top-0 right-0 w-[58%] h-full -rotate-180 bg-[linear-gradient(90deg,rgba(16,20,33,1)_0%,rgba(16,19,32,0)_100%)] z-[1]" />

          {/* Right side image */}
          <div className="hidden md:flex absolute top-0 right-0 w-[58%] h-full items-center justify-end">
            <img
              className="w-full h-full object-cover"
              alt="Group"
              src="/group-2087324129.png"
            />
          </div>

          {/* Left side content */}
          <div className="relative z-[2] flex flex-col items-center justify-center w-full md:max-w-[613px] px-4 sm:px-8 py-8 sm:py-12 gap-4 sm:gap-5">
            {/* Heading */}
            <h2 className="[font-family:'Montserrat',Helvetica] font-bold text-2xl sm:text-3xl md:text-4xl text-center tracking-[1.26px] leading-tight sm:leading-[43.1px] whitespace-nowrap bg-[linear-gradient(315deg,rgba(255,229,161,1)_0%,rgba(191,132,26,1)_51%,rgba(255,205,116,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent">
              LIKE OUR WORKS ?
            </h2>

            {/* Subheading */}
            <p className="[font-family:'Montserrat',Helvetica] font-normal text-[#cbcbcb] text-base sm:text-lg md:text-[26px] text-center tracking-[2px] sm:tracking-[8px] md:tracking-[13.91px] leading-tight sm:leading-[43.1px]">
              LET&apos;S MAKE YOUR PROJECT COME ALIVE
            </p>

            {/* CTA Button */}
            <Button className="h-auto relative flex items-center justify-center gap-[3.45px] px-4 sm:px-[12.94px] py-2 rounded border-none bg-[linear-gradient(315deg,rgba(255,229,161,1)_0%,rgba(191,132,26,1)_51%,rgba(255,205,116,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-[0.86px] before:rounded before:[background:linear-gradient(277deg,rgba(255,220,143,0.2)_0%,rgba(0,0,0,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none min-w-[100px] sm:min-w-[123px] min-h-[38px] sm:min-h-[43px]">
              <span className="relative flex items-center [font-family:'Montserrat',Helvetica] font-medium text-[#0a0d11] text-xs sm:text-sm text-justify tracking-[0.54px] leading-[43.1px] whitespace-nowrap">
                CONTACT US
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};