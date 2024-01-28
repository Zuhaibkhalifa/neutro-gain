import React, { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

export default function About() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="about">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <Image
                  src={"/images/about.png"}
                  className="rounded-lg shadow-lg relative"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }} // optional
                />
              </div>
            </div>
            {/* end col */}

            <div className="lg:col-span-7">
              <div className="lg:ms-7">
                <h6 className="text-orange-600 text-base font-medium uppercase mb-2">Who We Are ?</h6>

                <p className="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">
                  At NeutroGain, we&apos;re more than just a supplement company – we&apos;re your partners in fitness. Committed to excellence and driven by innovation, we are a team of fitness enthusiasts,
                  nutrition experts, and scientists dedicated to helping you unlock your full potential. With a passion for health and a mission to empower individuals on their fitness journeys, we
                  pride ourselves on transparency, quality, and customer satisfaction. Get to know the faces behind NeutroGain and join us in revolutionizing the way you approach muscle gain.
                </p>

                <div className="relative mt-10">
                  <Link to="Verify" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">
                    Verify Product <i className="mdi mdi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End --> */}
      <ModalVideo channel="youtube" isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
    </>
  );
}
