import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[600px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about-1.jpg"
                alt="about image"
                fill
                className="mx-auto bg-center bg-no-repeat object-cover aspect-[25/24] max-w-full lg:mr-0"

              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[570px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  About Us
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Choose your cruise from Scuba Diving, to free diving or Kite
                  surfing to satisfy your desires. Discover the best coral reefs
                  in the world and see one of the world’s most mesmerizing marine
                  environments, flourish nearly every species of coral and
                  incredible fish life. Thrill-seekers, Kite-surfers will enjoy
                  the drift built-up by hacking through the blue lagoons powered
                  only by the wind. You will find our diving team to be
                  professional, friendly, helpful and ready to take care of you on
                  your new Red Sea adventure. Trusted professional brand name
                  scuba diving manufacturers manufacture all of our diving
                  equipment, tanks and diving gear. Our gear is meticulously
                  maintained to ensure your comfort and safety. On our liveaboard
                  dive safaris to the Red Sea, our main priorities on our boats
                  are your safety and comfort. We cater for vegetarian and
                  non-vegetarians, and any other special needs you require.
                </p>
              </div>
              {/* <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Premier support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Next.js
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  consectetur adipiscing elit setim.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
