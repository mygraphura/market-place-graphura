import { BrandsShowcaseSection } from "./sections/BrandsShowcaseSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContactFooterSection } from "./sections/ContactFooterSection";
import { FeedbackSection } from "./sections/FeedbackSection";
import { HeroBannerSection } from "./sections/HeroBannerSection/HeroBannerSection";
import { ProjectsCarouselSection } from "./sections/ProjectsCarouselSection/ProjectsCarouselSection";
import { ProjectsGallerySection } from "./sections/ProjectsGallerySection/ProjectsGallerySection";

// Navigation items data
const navItems = [
  { label: "WORK", left: "left-11" },
  { label: "ABOUT", left: "left-[126px]" },
  { label: "GET IN TOUCH", left: "left-[214px]" },
];

// Decorative element images data
const decorativeElements = [
  {
    src: "/images/img_48cf00c7_2587_4_60x30.png",
    alt: "Element",
    className: "absolute top-[410px] left-[92px] w-[31px] h-[61px]",
  },
  {
    src: "/images/img_48cf00c7_2587_4_98x80.png",
    alt: "Element",
    className: "absolute top-[171px] left-[986px] w-[81px] h-[98px]",
  },
  {
    src: " /images/img_48cf00c7_2587_4_80x72.png",
    alt: "Element",
    className: "absolute top-[530px] left-[954px] w-[73px] h-[81px]",
  },
  {
    src: "/images/img_48cf00c7_2587_4.png",
    alt: "Element",
    className: "absolute top-[150px] left-[296px] w-[54px] h-[70px]",
  },
  {
    src: "/images/img_a8b32876_91f6_4.png",
    alt: "Ab f cab",
    className:
      "absolute top-[490px] left-[325px] w-[59px] h-[59px] object-cover",
  },
  {
    src: "/images/img_bb87b394_9410_4.png",
    alt: "Bbb",
    className:
      "absolute top-[185px] left-[68px] w-[91px] h-[91px] object-cover",
  },
];

export const HomePage = () => {
  return (
    <main className="bg-[#0a0a0f] overflow-hidden w-full flex flex-col">
      {/* Hero header area - fixed height to contain absolutely positioned elements */}
      <header className="relative w-full h-[700px]">
        {/* Background gradient blur */}
        <div className="absolute top-[333px] left-[-27px] w-[1468px] h-[421px] rounded-[25px] rotate-[0.14deg] blur-[175px] bg-[linear-gradient(270deg,rgba(20,10,46,1)_0%,rgba(10,10,26,1)_50%,rgba(5,38,56,1)_99%)] opacity-[0.18]" />

        {/* Background clip path image */}
        

        {/* Gradient overlay */}
        <div className="absolute top-[415px] left-[3px] w-[1439px] h-[663px] bg-[linear-gradient(180deg,rgba(10,10,15,0)_0%,rgba(10,10,15,0.45)_14%,rgba(10,10,15,1)_56%,rgba(10,10,15,1)_100%)]" />

        {/* "BUILDS FOR BRANDS" heading */}
        <h1 className="absolute top-[275px] left-[calc(50.00%_-_494px)] [font-family:'Inter',Helvetica] font-bold text-[#c8a84b] text-8xl tracking-[0] leading-[normal]">
          BUILDS FOR BRANDS
        </h1>

        {/* Horizontal divider lines */}
        <div className="absolute top-[684px] left-12 w-[386px] h-1 bg-[#d9d9d9] rounded-[21px]" />
        <div className="absolute top-[684px] left-[1004px] w-[386px] h-1 bg-[#d9d9d9] rounded-[21px]" />

        {/* Logo */}
        <img
          className="absolute top-[49px] left-12 w-[190px] h-[45px] object-cover"
          alt="Image"
          src="/images/img_image_2.png"
        />

        {/* Center brand image */}
        {/* <img
          className="absolute top-[209px] left-[calc(50.00%_-_183px)] w-[367px] h-[62px]"
          alt="Image"
          src="/images/image-3.png"
        /> */}

        {/* Navigation bar */}
        <nav className="absolute top-[49px] left-[calc(50.00%_-_211px)] w-[429px] h-[49px]">
          <div className="absolute top-0 left-[calc(50.00%_-_214px)] w-[423px] h-[49px]">
            <div className="absolute top-0 left-0 w-[423px] h-[49px] bg-[#b1996d] rounded-[32px] opacity-[0.12]" />
            <div className="absolute top-0 left-0 w-[423px] h-[49px] bg-[#b1996d33] rounded-[32px] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] opacity-20" />
          </div>

          {/* Nav items */}
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`absolute top-3 ${item.left} h-[25px] flex items-center [font-family:'Inter',Helvetica] font-bold text-white text-xs text-justify tracking-[0.54px] leading-[25px] whitespace-nowrap cursor-pointer hover:text-[#c8a84b] transition-colors`}
            >
              {item.label}
            </div>
          ))}

          {/* Search icon */}
          <img
            className="absolute top-[9px] left-[348px] w-[31px] h-[31px]"
            alt="Search"
            src="/images/Search.png"
          />
        </nav>

        {/* Top right group image */}
        <img
          className="absolute"
          style={{
            width: '425.47px',
            height: '71.47px',
            top: '0px',
            left: '1107.99px',
            opacity: 0.59,
            borderRadius: '37.87px',
            objectFit: 'cover',
          }}
          alt="Group"
          src="/images/img_group_19.png"
        />

        {/* "THAT AIM HIGHER" subtitle */}
        <p className="absolute top-[395px] left-[calc(50.00%_-_199px)] opacity-90 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#f5efe8] text-5xl tracking-[-0.39px] leading-[normal] whitespace-nowrap">
          THAT AIM HIGHER
        </p>

        {/* Gold accent lines */}
        <div className="absolute top-[421px] left-[232px] w-[266px] h-1.5 bg-[#c8a84b]" />
        <div className="absolute top-[418px] left-[948px] w-[266px] h-1.5 bg-[#c8a84b]" />

        {/* Decorative element images */}
        {decorativeElements.map((el, index) => (
          <img key={index} className={el.className} alt={el.alt} src={el.src} />
        ))}
      </header>

      {/* Page sections in order as shown in the image */}
      <HeroBannerSection />
      <ProjectsGallerySection />
      <ProjectsCarouselSection />
      <BrandsShowcaseSection />
      <CallToActionSection />
      <FeedbackSection />
      <ContactFooterSection />
    </main>
  );
};