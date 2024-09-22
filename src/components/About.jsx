import React from "react";
import bg from "../assets/bg2.jpg";

export default function About() {
  return (
    <section class="pb-10 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col items-center justify-center space-y-8">
          <h2 class="text-4xl font-bold text-center text-primary">
            Who are we?
          </h2>
          <p class="text-gray-600 text-md text-center max-w-2xl">
            The IEEE EMBS Chapter is a vibrant community of individuals
            passionate about integrating engineering with medical and biological
            sciences. Aligning with the mission, vision, and core values of the
            IEEE Engineering in Medicine and Biology Society, the EMBS chapter
            serves as a platform for undergraduates, graduates, researchers, and
            industry professionals to collaborate, innovate, and contribute to
            the advancement of healthcare technologies.
          </p>
        </div>
      </div>

      <div class="container mx-auto px-4 mt-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="flex flex-col items-center justify-center space-y-6 p-10 bg-gray-200 rounded-xl">
            <h3 class="text-3xl font-bold text-primary">Our Vision</h3>
            <p class="text-gray-600 text-md text-center">
              To advance the field of biomedical engineering by encouraging
              creativity and quality, and to empower individuals to create
              healthcare solutions that have a positive and lasting impact on
              society.{" "}
            </p>
          </div>

          <div class="flex flex-col items-center justify-center space-y-6 p-10 bg-gray-200 rounded-xl">
            <h3 class="text-3xl font-bold text-primary">Our Mission</h3>
            <p class="text-gray-600 text-md text-center">
              Our mission is to build a community that excels in both academic
              and professional efforts, as well as actively contributes to the
              improvement of healthcare through technological innovation. We aim
              to facilitate knowledge sharing, industry collaboration, skill
              development, community engagement, and the promotion of ethical
              practices in biomedical engineering.
            </p>
          </div>
        </div>
      </div>
      <div className="my-20 w-full mx-auto">
        <div
          className="relative grid gap-10 md:px-40 sm:px-32  max-[640px]:px-14 bg-cover filter "
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>
          <div className="relative z-10 my-20">
            <h3 className="text-3xl font-bold text-white text-center py-10">
              Game changer for you!!
            </h3>
            <div className="grid grid-cols-2 gap-32">
              <div>
                <p className=" text-md text-white" >
                  Joining EMBS can significantly enhance your personal and
                  professional development. In EMBS, you will have the opportunity
                  to contribute, collaborate, and drive positive changes in the
                  healthcare industry and society by
                </p>
                <ul className="mt-5 pb-5  text-white">
                  <li>Enhancing your Knowledge</li>
                  <li>Providing Networking Opportunities</li>
                  <li>Skill Development</li>
                  <li>Providing opportunities for Leadership</li>
                  <li>Contributing to technological Advancements</li>
                  {/* <hr className="bg-white my-4 w-full" /> */}
                </ul>
              </div>
              <div className="flex flex-col  text-white">
                <h3 className="pb-5 text-2xl">
                  By being a part of us, you will:{" "}
                </h3>
                <ul className="pb-5">
                  <li>Attend conferences and seminars at the national, regional, and international levels.</li>
                  <li>Gain access to valuable professional publications.</li>
                  <li>Join technical departments and committees.</li>
                  <li>Connect with a global network of professionals.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
