import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
const SLicedParts = () => {
  const sliceRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const commonScrollTrigger = {
      trigger: sliceRef.current,
      start: "top 10%",
      end: "bottom center",
      scrub: 1,
      markers: true,
    };
    gsap.to(".slice-mint", {
      y: 1200,
      scrollTrigger: commonScrollTrigger,
    });
    gsap.to(".slice-bij", {
      y: 1080,
      x: -15,
      scale: 1.1,
      scrollTrigger: commonScrollTrigger,
    });
    gsap.to(".slice-olive", {
      y: 810,
      scrollTrigger: commonScrollTrigger,
    });
    gsap.to(".slice-cheese", {
      y: 570,
      scrollTrigger: commonScrollTrigger,
    });
    gsap.to(".slice-sauce", {
      y: 300,
      scrollTrigger: commonScrollTrigger,
    });
  }, []);
  return (
    <div
      ref={sliceRef}
      className="flex flex-col justify-center items-center space-y-10 h-[210vh]"
    >
      <Image
        src={"/img/section_3_01.webp"}
        alt="slice-mint"
        width={150}
        height={150}
        className="slice-mint z-6"
      />
      <Image
        src={"/img/section_3_02.webp"}
        alt="slice-bij"
        width={300}
        height={300}
        className="slice-bij z-5"
      />
      <Image
        src={"/img/section_3_03.webp"}
        alt="slice-olive"
        width={300}
        height={300}
        className="slice-olive z-4"
      />
      <Image
        src={"/img/section_3_04.webp"}
        alt="slice-cheese"
        width={350}
        height={350}
        className="slice-cheese z-3"
      />
      <Image
        src={"/img/section_3_05.webp"}
        alt="slice-sauce"
        width={400}
        height={400}
        className="slice-sauce z-2"
      />
      <Image
        src={"/img/section_3_06.webp"}
        alt="slice-bread"
        width={450}
        height={450}
        className="slice-bread"
      />
    </div>
  );
};

export default SLicedParts;
