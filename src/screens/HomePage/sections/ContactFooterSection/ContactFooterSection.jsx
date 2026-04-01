const footerLinks = [
  { label: "Privacy" },
  { label: "Terms" },
  { label: "Instagram" },
  { label: "LinkedIn" },
];

const contactItems = [
  {
    label: "Email us",
    value: "hello@graphura.com",
  },
  {
    label: "Based in",
    value: "India",
  },
  {
    label: "Ready to start?",
    value: "Start a Project",
  },
];

export const ContactFooterSection = () => {
  return (
    <footer className="relative w-full bg-[#0a0a0f] overflow-hidden">
      {/* Top gold divider */}
      <div className="w-full h-px bg-[#c8a84b] opacity-10" />

      {/* Wave + GRAPHURA hero area */}
      <div className="relative w-full h-[120px] sm:h-[160px] md:h-[200px]">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Wave"
          src="/wave-1.png"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="[font-family:'Inter',Helvetica] font-bold text-[#c8a84b] text-[clamp(32px,6vw,134px)] tracking-[0] leading-[normal] select-none">
            GRAPHURA
          </span>
        </div>
      </div>

      {/* Radial gradient decoration */}
      <div
        className="absolute top-[30px] left-1/4 w-[300px] sm:w-[400px] md:w-[600px] h-[150px] sm:h-[200px] md:h-[300px] rounded-[300px/150px] pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 0% 0%, rgba(201,168,76,0.07) 0%, rgba(10,10,15,0) 100%)",
        }}
      />

      {/* GET IN TOUCH label */}
      <div className="flex justify-center mt-4 sm:mt-6">
        <span className="opacity-70 [font-family:'Inter',Helvetica] font-medium text-[#c8a84b] text-[10px] tracking-[5.00px] leading-[normal] whitespace-nowrap">
          GET IN TOUCH
        </span>
      </div>

      {/* Headline */}
      <div className="flex flex-col items-center mt-1 sm:mt-2">
        <span className="opacity-90 [font-family:'Inter',Helvetica] font-light text-[#f5efe8] text-[clamp(18px,4vw,40.3px)] tracking-[-0.39px] leading-[normal]">
          Let&apos;s build something
        </span>
        <span className="[font-family:'Inter',Helvetica] font-bold text-[#c8a84b] text-[clamp(18px,4vw,40.3px)] tracking-[-0.39px] leading-[normal]">
          extraordinary together.
        </span>
      </div>

      {/* Thin gold divider below headline */}
      <div className="w-full h-px bg-[#c8a84b] opacity-[0.06] mt-2 sm:mt-4" />

      {/* Small gold square decoration */}
      <div className="ml-8 sm:ml-[60px] mt-2 sm:mt-4 w-1.5 h-1.5 bg-[#c8a84b80] rounded-[3px]" />

      {/* Contact info row */}
      <div className="flex flex-col sm:flex-row justify-between items-start px-4 sm:px-12 md:px-[196px] mt-4 pb-4 sm:pb-8 gap-4 sm:gap-0">
        {contactItems.map((item) => (
          <div
            key={item.label}
            className="[font-family:'Inter',Helvetica] font-light text-transparent text-[13px] sm:text-[15px] tracking-[-0.38px] leading-[normal]"
          >
            <span className="text-white tracking-[-0.06px]">
              {item.label}
              <br />
            </span>
            <span className="text-[#c8a84b] text-base sm:text-xl tracking-[-0.10px]">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom bar divider */}
      <div className="w-full h-px bg-[#c8a84b] opacity-[0.06]" />

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-20 py-2 sm:py-4 gap-2 sm:gap-0">
        <span className="opacity-50 [font-family:'Inter',Helvetica] font-normal text-white text-[10px] sm:text-[11px] tracking-[0.50px] leading-[normal] whitespace-nowrap">
          © 2026 Graphura — Built for Brands That Aim Higher.
        </span>
        <nav className="flex flex-row items-center gap-4 sm:gap-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="opacity-50 [font-family:'Inter',Helvetica] font-normal text-white text-[10px] sm:text-[11px] tracking-[0.50px] leading-[normal] whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};