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
        // trigger: descRef.current,
        start: "center bottom",
        // end: "bottom center",
        scrub: 1,
        // markers: true,
      },
    });
    // 1st
    tl.fromTo(
      ".desc-mint",
      {
        x: -300,
        y: 200,
      },
      {
        x: 500,
        y: 300,
        duration: 1,
      },
      "1st"
    );
    tl.fromTo(
      ".desc-seed",
      {
        x: 700,
      },
      {
        x: -100,
        y: 400,
        duration: 1,
      },
      "1st"
    );
    tl.fromTo(
      ".desc-olive",
      {
        x: -300,
      },
      {
        x: 500,
        y: 500,
        duration: 1,
      },
      "1st"
    );
    // flow
    tl.to(
      ".desc-mint",
      {
        y: 800,
        duration: 1,
      },
      "flow"
    );
    tl.to(
      ".desc-olive",
      {
        y: 1000,
        duration: 1,
      },
      "flow"
    );
    tl.to(
      ".desc-seed",
      {
        y: 1000,
        duration: 1,
      },
      "flow"
    );
    // 2nd
    tl.fromTo(
      ".desc-cheese",
      {
        x: 700,
        y: 800,
      },
      {
        x: -50,
        y: 1200,
        delay: 1,
        duration: 1,
      },
      "1st"
    );
    tl.fromTo(
      ".desc-sauce",
      {
        x: -300,
        y: 1300,
      },
      {
        x: 400,
        y: 1200,
        duration: 1,
        delay: 1,
      },
      "1st"
    );
    tl.fromTo(
      ".desc-bread",
      {
        x: 700,
        y: 1000,
      },
      {
        x: -50,
        y: 1300,
        delay: 1,
        duration: 1,
      },
      "1st"
    );
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
          <h2 className="text-3xl font-semibold text-[#F44B05]">
            Signature Tomato Sauce
          </h2>
          <p className="mt-5 w-1/2">
            Slow-cooked tomato base seasoned with herbs for rich, tangy warmth.
          </p>
        </div>
      </div>
      <SLicedParts />
      <div ref={descRef}>
        <div className="desc-seed">
          <h2 className="text-3xl font-semibold text-[#D5BA87]">
            Toasted Seeds
          </h2>
          <p className="mt-5 w-1/2">
            Nutty toasted seeds that bring a crunchy, earthy contrast. If this
            “bij” is something else, tell me and I will rewrite it.
          </p>
        </div>
        <div className="desc-cheese">
          <h2 className="text-3xl font-semibold text-[#FCDB5F]">
            Melted Cheese Blend
          </h2>
          <p className="mt-5 w-1/2">
            Creamy, stretchy, and indulgent cheese that holds everything
            together beautifully.
          </p>
        </div>
        <div className="desc-bread">
          <h2 className="text-3xl font-semibold text-[#EAB580]">
            Artisan Pizza Crust
          </h2>
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
