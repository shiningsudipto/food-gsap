"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SLicedParts from "./SLicedParts";

gsap.registerPlugin(ScrollTrigger);

const PizzaSlice = () => {
  const descRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: descRef.current,
        start: "top 80%",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.from(".desc-left", {
      x: -200,
      opacity: 0,
      stagger: 0.3,
    }).from(
      ".desc-right",
      {
        x: 200,
        opacity: 0,
        stagger: 0.3,
      },
      "<"
    ); // "<" means run at same time with previous group
  }, []);

  return (
    <section className="grid grid-cols-3">
      <div ref={descRef} className="">
        <div className="desc-mint desc-left">
          <h2 className="text-3xl font-semibold text-[#4C780E]">
            Fresh Mint Leaves
          </h2>
          <p className="mt-5 w-1/2">
            A refreshing herbal touch that lifts the aroma and adds a hint of
            coolness to every bite.
          </p>
        </div>
        <div className="desc-olive desc-left">
          <h2 className="text-3xl font-semibold text-[#836A61]">
            Premium Olives
          </h2>
          <p className="mt-5 w-1/2">
            Rich and briny slices that deepen the flavor profile with
            Mediterranean charm.
          </p>
        </div>
        <div className="desc-sauce desc-left">
          <h2 className="text-3xl font-semibold">Signature Tomato Sauce</h2>
          <p className="mt-5 w-1/2">
            Slow-cooked tomato base seasoned with herbs for rich, tangy warmth.
          </p>
        </div>
      </div>
      <SLicedParts />
      <div ref={descRef}>
        <div className="desc-seed">
          <h2 className="text-3xl font-semibold text-[#DEC24F]">
            Toasted Seeds
          </h2>
          <p className="mt-5 w-1/2">
            Nutty toasted seeds that bring a crunchy, earthy contrast. If this
            “bij” is something else, tell me and I will rewrite it.
          </p>
        </div>
        <div className="desc-cheese">
          <h2 className="text-3xl font-semibold">Melted Cheese Blend</h2>
          <p className="mt-5 w-1/2">
            Creamy, stretchy, and indulgent cheese that holds everything
            together beautifully.
          </p>
        </div>
        <div className="desc-bread">
          <h2 className="text-3xl font-semibold">Artisan Pizza Crust</h2>
          <p className="mt-5 w-1/2">
            Crispy on the outside, soft inside, and baked to golden perfection
            for the perfect foundation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PizzaSlice;
