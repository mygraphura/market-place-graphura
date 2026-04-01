import { useRef, useState } from "react";

// Project card data
const projects = [
  {
    id: 1,
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "GraphuraBot",
    description: "It is ChatBot made by Graphura team",
    bg: "#0c0c23",
    glowColor: "rgba(69,102,255,0.3)",
    glowColorEnd: "rgba(69,102,255,0)",
    glowTop: "top-[35px]",
    glowLeft: "left-[50px]",
    ml: "",
  },
  {
    id: 2,
    number: "02",
    category: "DIGITAL MARKETING",
    title: "Hotel Shiv Ganga",
    description: "360° campaign driving\n3× revenue in 6 months.",
    bg: "#0a1c0c",
    glowColor: "rgba(26,178,77,0.3)",
    glowColorEnd: "rgba(26,178,77,0)",
    glowTop: "top-10",
    glowLeft: "left-[50px]",
    ml: "ml-[25px]",
  },
  {
    id: 3,
    number: "03",
    category: "BRANDING",
    title: "Fruit Bounty",
    description: "Complete brand system\nfor EV mobility startup.",
    bg: "#19071e",
    glowColor: "rgba(204,26,229,0.3)",
    glowColorEnd: "rgba(204,26,229,0)",
    glowTop: "top-10",
    glowLeft: "left-[50px]",
    ml: "ml-6",
  },
  {
    id: 4,
    number: "04",
    category: "ERP DEVELOPMENT",
    title: "Chatbot",
    description: "Full ERP — 70% less\nmanual reporting time.",
    bg: "#07161e",
    glowColor: "rgba(26,178,229,0.3)",
    glowColorEnd: "rgba(26,178,229,0)",
    glowTop: "top-10",
    glowLeft: "left-[50px]",
    ml: "ml-6",
  },
  {
    id: 5,
    number: "04",
    category: "ERP DEVELOPMENT",
    title: "Chatbot",
    description: "Full ERP — 70% less\nmanual reporting time.",
    bg: "#07161e",
    glowColor: "rgba(26,178,229,0.3)",
    glowColorEnd: "rgba(26,178,229,0)",
    glowTop: "top-10",
    glowLeft: "left-[50px]",
    ml: "ml-6",
    showDiamond: true,
  },
   {
    id: 1,
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "GraphuraBot",
    description: "It is ChatBot made by Graphura team",
    bg: "#0c0c23",
    glowColor: "rgba(69,102,255,0.3)",
    glowColorEnd: "rgba(69,102,255,0)",
    glowTop: "top-[35px]",
    glowLeft: "left-[50px]",
    ml: "",
  },
  {
    id: 2,
    number: "02",
    category: "DIGITAL MARKETING",
    title: "Hotel Shiv Ganga",
    description: "360° campaign driving\n3× revenue in 6 months.",
    bg: "#0a1c0c",
    glowColor: "rgba(26,178,77,0.3)",
    glowColorEnd: "rgba(26,178,77,0)",
    glowTop: "top-10",
    glowLeft: "left-[50px]",
    ml: "ml-[25px]",
  },
  {
    id: 3,
    number: "03",
    category: "BRANDING",
    title: "Fruit Bounty",
    description: "Complete brand system\nfor EV mobility startup.",
    bg: "#19071e",
    glowColor: "rgba(204,26,229,0.3)",
    glowColorEnd: "rgba(204,26,229,0)",
    glowTop: "top-10",
    glowLeft: "left-[50px]",
    ml: "ml-6",
  },
  {
    id: 4,
    number: "04",
    category: "ERP DEVELOPMENT",
    title: "Chatbot",
    description: "Full ERP — 70% less\nmanual reporting time.",
    bg: "#07161e",
    glowColor: "rgba(26,178,229,0.3)",
    glowColorEnd: "rgba(26,178,229,0)",
    glowTop: "top-10",
    glowLeft: "left-[50px]",
    ml: "ml-6",
  },
  {
    id: 5,
    number: "04",
    category: "ERP DEVELOPMENT",
    title: "Chatbot",
    description: "Full ERP — 70% less\nmanual reporting time.",
    bg: "#07161e",
    glowColor: "rgba(26,178,229,0.3)",
    glowColorEnd: "rgba(26,178,229,0)",
    glowTop: "top-10",
    glowLeft: "left-[50px]",
    ml: "ml-6",
    showDiamond: true,
  },
];

// Pagination dots data
const dots = [
  { active: true },
  { active: false },
  { active: false },
  { active: false },
];

export const ProjectsCarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -305, behavior: "smooth" });
    }
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 305, behavior: "smooth" });
    }
    setActiveIndex((prev) => Math.min(projects.length - 1, prev + 1));
  };

  return (
    <section className="relative w-full bg-[linear-gradient(90deg,rgba(20,10,46,1)_0%,rgba(10,10,26,1)_60%,rgba(5,38,56,1)_100%)] overflow-hidden h-[350px] sm:h-[500px] md:h-[600px] lg:h-[665px]">
      {/* SELECTED WORK label */}
      <div className="absolute z-10 left-4 top-6 sm:left-10 sm:top-10 md:left-20 md:top-14 [font-family:'Inter',Helvetica] font-medium text-[#c8a84b] text-[10px] tracking-[5.00px] leading-[normal] whitespace-nowrap">
        SELECTED WORK
      </div>

      {/* Wave image */}
      <img
        className="absolute w-full h-[40%] sm:h-[55%] md:w-[104.17%] md:h-[75.19%] top-[42%] left-0 pointer-events-none"
        alt="Wave"
        src="/wave-1-2.png"
      />

      {/* Horizontal divider line */}
      <div className="hidden md:block absolute top-[63px] left-[40px] md:left-[280px] w-[90vw] md:w-[1100px] h-px bg-[#c8a84b] opacity-[0.14]" />

      {/* Branding subtitle */}
      <div className="absolute left-4 top-12 sm:left-10 sm:top-16 md:left-20 md:top-20 opacity-45 font-normal text-[#898999] text-xs tracking-[0.50px] [font-family:'Inter',Helvetica] leading-[normal] z-10">
        Branding
      </div>

      {/* Pagination dots */}
      <div className="absolute top-[607px] left-20 flex items-center gap-[6px] z-10">
        {dots.map((dot, index) => (
          <div
            key={`dot-${index}`}
            className={
              dot.active
                ? "w-5 h-1.5 bg-[#c8a84be6] rounded-[10px]"
                : "w-1.5 h-1.5 bg-[#c8a84b40] rounded-[3px]"
            }
          />
        ))}
      </div>

      {/* Drag hint */}
      <div className="absolute top-[617px] left-[1200px] opacity-30 [font-family:'Inter',Helvetica] font-normal text-[#898999] text-[10px] tracking-[2.00px] leading-[normal] whitespace-nowrap z-10">
        ← drag to explore →
      </div>

      {/* Cards area */}
      <div className="absolute top-[137px] left-0 w-full h-[416px]">
        {/* Left fade overlay */}
        <div className="absolute top-0 left-0 w-[70px] h-[416px] bg-[linear-gradient(90deg,rgba(10,10,15,1)_0%,rgba(10,10,15,0)_100%)] z-10 pointer-events-none" />

        {/* Right fade overlay */}
        <div className="absolute top-0 right-0 w-[70px] h-[416px] bg-[linear-gradient(90deg,rgba(10,10,15,0)_0%,rgba(10,10,15,1)_100%)] z-10 pointer-events-none" />

        {/* Scrollable cards container */}
        <div
          ref={scrollRef}
          className="absolute top-0 left-[80px] right-[80px] h-[416px] flex overflow-x-auto scrollbar-hide gap-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, index) => (
            <div
              key={`project-${project.id}-${index}`}
              className={`flex-shrink-0 w-[280px] h-[416px] relative rounded-[3px] overflow-hidden border border-solid border-[#c8a84b1f] ${index > 0 ? (index === 1 ? "ml-[25px]" : "ml-6") : ""}`}
              style={{ backgroundColor: project.bg }}
            >
              {/* Radial glow */}
              <div
                className={`absolute ${project.glowTop} ${project.glowLeft} w-[199px] h-[193px]`}
                style={{
                  background: `radial-gradient(50% 50% at 0% 0%, ${project.glowColor} 0%, ${project.glowColorEnd} 100%)`,
                }}
              />

              {/* Diamond decoration for card 5 */}
              {project.showDiamond && (
                <div className="absolute top-[90px] left-[90px] opacity-10 text-[80px] [font-family:'Inter',Helvetica] font-normal text-[#c8a84b] tracking-[0] leading-[normal]">
                  ◆
                </div>
              )}

              {/* Card number */}
              <div className="absolute top-[15px] left-5 opacity-35 [font-family:'Inter',Helvetica] font-medium text-[#c8a84b] text-[11px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                {project.number}
              </div>

              {/* Divider line */}
              <div className="absolute top-[248px] left-0 w-[280px] h-px bg-[#c8a84b] opacity-[0.08]" />

              {/* Category */}
              <div className="absolute top-[264px] left-5 opacity-90 [font-family:'Inter',Helvetica] font-medium text-[#c8a84b] text-[8px] tracking-[2.50px] leading-[normal]">
                {project.category}
              </div>

              {/* Title */}
              <div className="absolute top-[286px] left-5 opacity-[0.93] [font-family:'Inter',Helvetica] font-bold text-[#f5efe8] text-lg tracking-[-0.30px] leading-[normal]">
                {project.title}
              </div>

              {/* Description */}
              <div className="absolute top-[316px] left-5 opacity-[0.68] [font-family:'Inter',Helvetica] font-normal text-[#898999] text-[11px] tracking-[0.20px] leading-[18px]">
                {project.description.split("\n").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </div>

              {/* Arrow button circle */}
              <div className="absolute top-[357px] left-[228px] w-8 h-8 rounded-2xl border border-solid border-[#c8a84b66]" />

              {/* Arrow icon */}
              <div className="absolute top-[365px] left-[237px] opacity-90 [font-family:'Inter',Helvetica] font-normal text-[#c8a84b] text-[13px] tracking-[0] leading-[normal]">
                ↗
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 w-[280px] h-[3px] bg-[linear-gradient(90deg,rgba(201,168,76,0)_0%,rgba(201,168,76,0.8)_50%,rgba(201,168,76,0)_100%)]" />
            </div>
          ))}
        </div>

        {/* Left navigation button */}
        <button
          onClick={handlePrev}
          className="absolute top-[181px] left-[30px] w-10 h-10 flex items-center justify-center bg-[#111117] rounded-[20px] overflow-hidden border border-solid border-[#c8a84b66] z-20 cursor-pointer"
          aria-label="Previous"
        >
          <span className="[font-family:'Inter',Helvetica] font-normal text-[#c8a84b] text-base tracking-[0] leading-[normal]">
            ←
          </span>
        </button>

        {/* Right navigation button */}
        <button
          onClick={handleNext}
          className="absolute top-[181px] right-[40px] w-10 h-10 flex items-center justify-center bg-[#111117] rounded-[20px] overflow-hidden border border-solid border-[#c8a84b66] z-20 cursor-pointer"
          aria-label="Next"
        >
          <span className="[font-family:'Inter',Helvetica] font-normal text-[#c8a84b] text-base tracking-[0] leading-[normal]">
            →
          </span>
        </button>
      </div>
    </section>
  );
};