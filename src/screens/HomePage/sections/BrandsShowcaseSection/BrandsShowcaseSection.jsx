import { useRef } from "react";

// Project card data
const projectCards = [
  {
    id: 1,
    number: "01",
    bg: "#0c0c23",
    glowColor: "rgba(69,102,255,0.3)",
    glowColorEnd: "rgba(69,102,255,0)",
    category: "WEB DEVELOPMENT",
    title: "GraphuraBot",
    description: "It is ChatBot made by Graphura team",
    descriptionMultiline: false,
    marginLeft: "0px",
  },
  {
    id: 2,
    number: "02",
    bg: "#0a1c0c",
    glowColor: "rgba(26,178,77,0.3)",
    glowColorEnd: "rgba(26,178,77,0)",
    category: "DIGITAL MARKETING",
    title: "Hotel Shiv Ganga",
    description: "360° campaign driving\n3× revenue in 6 months.",
    descriptionMultiline: true,
    marginLeft: "25px",
  },
  {
    id: 3,
    number: "03",
    bg: "#19071e",
    glowColor: "rgba(204,26,229,0.3)",
    glowColorEnd: "rgba(204,26,229,0)",
    category: "BRANDING",
    title: "Fruit Bounty",
    description: "Complete brand system\nfor EV mobility startup.",
    descriptionMultiline: true,
    marginLeft: "24px",
  },
  {
    id: 4,
    number: "04",
    bg: "#07161e",
    glowColor: "rgba(26,178,229,0.3)",
    glowColorEnd: "rgba(26,178,229,0)",
    category: "ERP DEVELOPMENT",
    title: "Chatbot",
    description: "Full ERP — 70% less\nmanual reporting time.",
    descriptionMultiline: true,
    marginLeft: "24px",
  },
  {
    id: 5,
    number: "04",
    bg: "#07161e",
    glowColor: "rgba(26,178,229,0.3)",
    glowColorEnd: "rgba(26,178,229,0)",
    category: "ERP DEVELOPMENT",
    title: "Chatbot",
    description: "Full ERP — 70% less\nmanual reporting time.",
    descriptionMultiline: true,
    marginLeft: "24px",
    showDiamond: true,
  },
   {
    id: 1,
    number: "01",
    bg: "#0c0c23",
    glowColor: "rgba(69,102,255,0.3)",
    glowColorEnd: "rgba(69,102,255,0)",
    category: "WEB DEVELOPMENT",
    title: "GraphuraBot",
    description: "It is ChatBot made by Graphura team",
    descriptionMultiline: false,
    marginLeft: "0px",
  },
  {
    id: 2,
    number: "02",
    bg: "#0a1c0c",
    glowColor: "rgba(26,178,77,0.3)",
    glowColorEnd: "rgba(26,178,77,0)",
    category: "DIGITAL MARKETING",
    title: "Hotel Shiv Ganga",
    description: "360° campaign driving\n3× revenue in 6 months.",
    descriptionMultiline: true,
    marginLeft: "25px",
  },
  {
    id: 3,
    number: "03",
    bg: "#19071e",
    glowColor: "rgba(204,26,229,0.3)",
    glowColorEnd: "rgba(204,26,229,0)",
    category: "BRANDING",
    title: "Fruit Bounty",
    description: "Complete brand system\nfor EV mobility startup.",
    descriptionMultiline: true,
    marginLeft: "24px",
  },
  {
    id: 4,
    number: "04",
    bg: "#07161e",
    glowColor: "rgba(26,178,229,0.3)",
    glowColorEnd: "rgba(26,178,229,0)",
    category: "ERP DEVELOPMENT",
    title: "Chatbot",
    description: "Full ERP — 70% less\nmanual reporting time.",
    descriptionMultiline: true,
    marginLeft: "24px",
  },
  {
    id: 5,
    number: "04",
    bg: "#07161e",
    glowColor: "rgba(26,178,229,0.3)",
    glowColorEnd: "rgba(26,178,229,0)",
    category: "ERP DEVELOPMENT",
    title: "Chatbot",
    description: "Full ERP — 70% less\nmanual reporting time.",
    descriptionMultiline: true,
    marginLeft: "24px",
    showDiamond: true,
  },
];

export const BrandsShowcaseSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -305, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 305, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-[linear-gradient(90deg,rgba(20,10,46,1)_0%,rgba(10,10,26,1)_60%,rgba(5,38,56,1)_100%)] overflow-hidden h-[400px] sm:h-[500px] md:h-[600px] lg:h-[665px]">
      {/* SELECTED WORK label */}
      <div className="absolute z-10 left-4 top-6 sm:left-10 sm:top-10 md:left-20 md:top-14 [font-family:'Inter',Helvetica] font-medium text-[#c8a84b] text-[10px] tracking-[5.00px] leading-[normal] whitespace-nowrap">
        SELECTED WORK
      </div>

      {/* Wave background image */}
      <img
        className="absolute w-full h-[40%] sm:h-[55%] md:w-[104.17%] md:h-[75.19%] top-[42%] left-0 pointer-events-none"
        alt="Wave"
        src="/wave-1-3.png"
      />

      {/* Divider line */}
      <div className="hidden md:block absolute top-[63px] left-[40px] md:left-[280px] w-[90vw] md:w-[1100px] h-px bg-[#c8a84b] opacity-[0.14]" />

      {/* Logo making subtitle */}
      <div className="absolute left-4 top-12 sm:left-10 sm:top-16 md:left-20 md:top-20 opacity-45 [font-family:'Inter',Helvetica] font-normal text-[#898999] text-xs tracking-[0.50px] leading-[normal] z-10">
        Logo making
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-8 left-4 sm:left-10 md:left-20 flex items-center gap-[6px] z-10">
        <div className="w-5 h-1.5 bg-[#c8a84be6] rounded-[10px]" />
        <div className="w-1.5 h-1.5 bg-[#c8a84b40] rounded-[3px]" />
        <div className="w-1.5 h-1.5 bg-[#c8a84b40] rounded-[3px]" />
        <div className="w-1.5 h-1.5 bg-[#c8a84b40] rounded-[3px]" />
      </div>

      {/* Drag to explore hint */}
      <div className="absolute bottom-4 right-4 sm:right-20 md:right-[240px] opacity-30 [font-family:'Inter',Helvetica] font-normal text-[#898999] text-[10px] tracking-[2.00px] leading-[normal] whitespace-nowrap z-10">
         drag to explore 
      </div>

      {/* Cards area */}
      <div className="absolute top-[80px] sm:top-[110px] md:top-[137px] left-0 w-full h-[220px] sm:h-[320px] md:h-[416px]">
        {/* Left fade gradient */}
        <div className="absolute top-0 left-0 w-[70px] h-[416px] bg-[linear-gradient(90deg,rgba(10,10,15,1)_0%,rgba(10,10,15,0)_100%)] z-10 pointer-events-none" />

        {/* Right fade gradient */}
        <div className="absolute top-0 right-0 w-[70px] h-[416px] bg-[linear-gradient(90deg,rgba(10,10,15,0)_0%,rgba(10,10,15,1)_100%)] z-10 pointer-events-none" />

        {/* Scrollable cards container */}
        <div
          ref={scrollRef}
          className="absolute top-0 left-[80px] right-[80px] h-[416px] overflow-x-auto overflow-y-hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex h-[416px]" style={{ width: "max-content" }}>
            {projectCards.map((card, index) => (
              <div
                key={card.id + "-" + index}
                className="w-[280px] h-[416px] relative flex-shrink-0 rounded-[3px] overflow-hidden border border-solid border-[#c8a84b1f]"
                style={{
                  backgroundColor: card.bg,
                  marginLeft: index === 0 ? "0px" : card.marginLeft,
                }}
              >
                {/* Radial glow */}
                <div
                  className="absolute w-[199px] h-[193px]"
                  style={{
                    top: index === 0 ? "35px" : "40px",
                    left: "50px",
                    background: `radial-gradient(50% 50% at 0% 0%, ${card.glowColor} 0%, ${card.glowColorEnd} 100%)`,
                  }}
                />

                {/* Diamond decoration for last card */}
                {card.showDiamond && (
                  <div className="absolute top-[90px] left-[90px] opacity-10 text-[80px] [font-family:'Inter',Helvetica] font-normal text-[#c8a84b] tracking-[0] leading-[normal]">
                    ◆
                  </div>
                )}

                {/* Card number */}
                <div
                  className="absolute left-5 opacity-35 [font-family:'Inter',Helvetica] font-medium text-[#c8a84b] text-[11px] tracking-[2.00px] leading-[normal] whitespace-nowrap"
                  style={{ top: index === 0 ? "15px" : "20px" }}
                >
                  {card.number}
                </div>

                {/* Divider line */}
                <div className="absolute top-[248px] left-0 w-[280px] h-px bg-[#c8a84b] opacity-[0.08]" />

                {/* Category */}
                <div className="absolute top-[264px] left-5 opacity-90 [font-family:'Inter',Helvetica] font-medium text-[#c8a84b] text-[8px] tracking-[2.50px] leading-[normal]">
                  {card.category}
                </div>

                {/* Title */}
                <div className="absolute top-[286px] left-5 opacity-[0.93] [font-family:'Inter',Helvetica] font-bold text-[#f5efe8] text-lg tracking-[-0.30px] leading-[normal]">
                  {card.title}
                </div>

                {/* Description */}
                <div className="absolute top-[316px] left-5 opacity-[0.68] [font-family:'Inter',Helvetica] font-normal text-[#898999] text-[11px] tracking-[0.20px] leading-[18px]">
                  {card.descriptionMultiline
                    ? card.description.split("\n").map((line, i, arr) => (
                        <span key={i}>
                          {line}
                          {i < arr.length - 1 && <br />}
                        </span>
                      ))
                    : card.description}
                </div>

                {/* Arrow button circle */}
                <div className="absolute top-[357px] left-[228px] w-8 h-8 rounded-2xl border border-solid border-[#c8a84b66]" />

                {/* Arrow icon */}
                <div
                  className="absolute left-[237px] opacity-90 [font-family:'Inter',Helvetica] font-normal text-[#c8a84b] text-[13px] tracking-[0] leading-[normal]"
                  style={{ top: index === 0 ? "365px" : "365px" }}
                >
                  ↗
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 w-[280px] h-[3px] bg-[linear-gradient(90deg,rgba(201,168,76,0)_0%,rgba(201,168,76,0.8)_50%,rgba(201,168,76,0)_100%)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Left navigation button */}
        <button
          onClick={scrollLeft}
          className="absolute top-[181px] left-[30px] w-10 h-10 flex items-center justify-center bg-[#111117] rounded-[20px] overflow-hidden border border-solid border-[#c8a84b66] z-20 cursor-pointer"
          aria-label="Scroll left"
        >
          <span className="[font-family:'Inter',Helvetica] font-normal text-[#c8a84b] text-base tracking-[0] leading-[normal]">
            ←
          </span>
        </button>

        {/* Right navigation button */}
        <button
          onClick={scrollRight}
          className="absolute top-[181px] right-[30px] w-10 h-10 flex items-center justify-center bg-[#111117] rounded-[20px] overflow-hidden border border-solid border-[#c8a84b66] z-20 cursor-pointer"
          aria-label="Scroll right"
        >
          <span className="[font-family:'Inter',Helvetica] font-normal text-[#c8a84b] text-base tracking-[0] leading-[normal]">
            →
          </span>
        </button>
      </div>
    </section>
  );
};