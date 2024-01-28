import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";

export default function Services() {
  const team = [
    {
      title: "Premium Ingredients",
      Icon: Unicons.UilAdjustCircle,
      subtext: "Our supplements are crafted using only the highest quality ingredients, sourced for their purity and potency.",
    },
    {
      title: "Scientifically Formulated",
      Icon: Unicons.UilCircuit,
      subtext: "Each product is meticulously developed based on scientific research to ensure optimal effectiveness and safety.",
    },
    {
      title: "Targeted Solutions",
      Icon: Unicons.UilFire,
      subtext: "We offer a range of specialized supplements tailored to specific fitness goals, including muscle gain, strength enhancement, and athletic performance improvement.",
    },
    {
      title: "Transparent Labeling",
      Icon: Unicons.UilShoppingBasket,
      subtext: "We believe in full transparency, so you'll always know exactly what you're putting into your body with our clearly labeled products.",
    },
    {
      title: "Trusted by Athletes",
      Icon: Unicons.UilFlower,
      subtext: "NeutroGain is trusted by athletes and fitness enthusiasts worldwide for its reliability, consistency, and ability to deliver real results.",
    },
    {
      title: "Customer Satisfaction",
      Icon: Unicons.UilFlipH,
      subtext: "We prioritize customer satisfaction above all else, providing exceptional support and guidance to help you achieve your fitness objectives effectively and confidently.",
    },
  ];

  return (
    <>
      {/* Start */}
      <section id="features" className="relative md:py-24 py-16">
        <div className="container lg mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pb-8 items-center">
            <div>
              <h6 className="text-orange-600 text-base font-medium uppercase mb-2">What We Do ?</h6>
              <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white md:mb-0">
                Perfect Solution For Your <br /> Muscle Gain
              </h3>
            </div>

            <div>
              <p className="text-slate-400 dark:text-slate-300 max-w-xl">NeutroGain provides cutting-edge supplements designed to optimize muscle growth, strength, and overall performance.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {team.map((item, key) => {
              const Icon = item.Icon;
              return (
                <div
                  key={key}
                  className={`features p-6 ${
                    key % 2 === 0 ? "hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800" : "shadow-xl shadow-slate-100 dark:shadow-slate-800"
                  } transition duration-500 rounded-3xl mt-8`}
                >
                  <div className="w-20 h-20 bg-orange-600/5 text-orange-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm">
                    <Icon width="30px" height="30px" />
                  </div>

                  <div className="content mt-7">
                    <Link href="#" className="text-lg hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-all duration-500 ease-in-out font-medium">
                      {item.title}
                    </Link>
                    <p className="text-slate-400 mt-3">{item.subtext}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-orange-600 text-base font-medium uppercase mb-2">Work Process</h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">Efficiency in Every Step: Our Streamlined Work Process</h3>

            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">At NeutroGain, we follow a streamlined approach to ensure the highest quality products and customer satisfaction</p>
          </div>

          <div className="grid grid-cols-1 mt-8">
            <div className="timeline relative">
              <div className="timeline-item">
                <div className="grid sm:grid-cols-2">
                  <div className="">
                    <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                      <Image src={"/images/svg/design-thinking.png"} className="h-64 w-64" alt="" width={500} height={500} />
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">Research & Development</h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                        Our journey begins with extensive research into the latest scientific advancements and nutritional insights to inform the development of our supplements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="md:order-1 order-2">
                    <div className="event event-description-left ltr:float-left rtl:float-right ltr:text-right rtl:text-left md:me-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">Formulation</h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                        Our team of experts meticulously formulates each product, carefully selecting premium ingredients known for their effectiveness in supporting muscle growth and performance.
                      </p>
                    </div>
                  </div>
                  <div className="md:order-2 order-1">
                    <div className="duration duration-right md:ms-7 relative">
                      <Image src={"/images/svg/coding.png"} className="h-64 w-64" alt="" width={500} height={500} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="mt-4 mt-sm-0">
                    <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                      <Image src={"/images/svg/office-desk.png"} className="h-64 w-64" alt="" width={500} height={500} />
                    </div>
                  </div>
                  <div className="mt-4 mt-sm-0">
                    <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">Testing & Quality Assurance</h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                        Before any product reaches our shelves, it undergoes rigorous testing and quality assurance protocols to guarantee safety, purity, and potency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
