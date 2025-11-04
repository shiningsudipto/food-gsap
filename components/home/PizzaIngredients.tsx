"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const PizzaIngredients = () => {
  const ingredientsRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const commonScrollTrigger = {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        // markers: true,
      };

      // Animate ingredients on scroll - using the common configuration
      gsap.to(".onion", {
        y: 100,
        x: 80,
        duration: 1,
        scrollTrigger: commonScrollTrigger,
      });

      gsap.to(".mint", {
        y: 80,
        x: 90,
        duration: 1,
        scrollTrigger: commonScrollTrigger,
      });

      gsap.to(".flour", {
        y: 50,
        x: 520,
        duration: 1,
        scrollTrigger: commonScrollTrigger,
      });

      gsap.to(".bij", {
        y: -50,
        x: 340,
        duration: 1,
        scrollTrigger: commonScrollTrigger,
      });

      gsap.to(".garlic", {
        y: 550,
        x: 620,
        scale: 0.9,
        duration: 1,
        scrollTrigger: commonScrollTrigger,
      });

      gsap.to(".chilli", {
        x: 320,
        duration: 1,
        scrollTrigger: commonScrollTrigger,
      });

      gsap.to(".capsicum", {
        y: -140,
        x: 500,
        duration: 1,
        scrollTrigger: commonScrollTrigger,
      });

      gsap.to(".tomato", {
        y: -200,
        x: 170,
        duration: 1,
        scrollTrigger: commonScrollTrigger,
      });

      gsap.to(".bread", {
        y: -130,
        x: 80,
        duration: 1,
        scrollTrigger: commonScrollTrigger,
      });
    }, ingredientsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-[180vh]">
      <div className="grid grid-cols-2 h-screen sticky top-0">
        <div ref={ingredientsRef} className="relative ingredients">
          {/* ... Your Image components ... */}
          <Image
            src={"/img/onion.png"}
            alt="pizza"
            width={150}
            height={150}
            className="absolute top-0 right-20 onion"
          />
          <Image
            src={"/img/section_1_02.webp"}
            alt="pizza"
            width={150}
            height={150}
            className="absolute top-[80px] right-[240px] mint"
          />
          <Image
            src={"/img/section_1_03.webp"}
            alt="pizza"
            width={150}
            height={150}
            className="absolute top-[210px] right-[500px] flour"
          />
          <Image
            src={"/img/section_1_04.webp"}
            alt="pizza"
            width={150}
            height={150}
            className="absolute top-[370px] right-[450px] bij"
          />
          <Image
            src={"/img/section_1_05.webp"}
            alt="pizza"
            width={150}
            height={150}
            className="absolute top-0 left-0 garlic"
          />
          <Image
            src={"/img/section_1_06.webp"}
            alt="pizza"
            width={150}
            height={150}
            className="absolute top-[250px] right-[550px] chilli"
          />
          <Image
            src={"/img/section_1_07.webp"}
            alt="pizza"
            width={150}
            height={150}
            className="absolute bottom-[240px] right-[500px] capsicum"
          />
          <Image
            src={"/img/section_1_08.webp"}
            alt="pizza"
            width={150}
            height={150}
            className="absolute bottom-[130px] right-[260px] tomato"
          />
          <Image
            src={"/img/section_1_09.webp"}
            alt="pizza"
            width={200}
            height={200}
            className="absolute bottom-0 right-20 bread"
          />
        </div>
        {/* 💡 FIX 2: Made the inner content h-screen and sticky so the visual content 
           stays in view while the user scrolls over the tall parent section. */}
        <div className="my-auto">
          <Image
            src={"/img/sliced-pizza-right-side.png"}
            quality={100}
            alt="pizza"
            width={500}
            height={500}
            className="h-[600px] w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default PizzaIngredients;
