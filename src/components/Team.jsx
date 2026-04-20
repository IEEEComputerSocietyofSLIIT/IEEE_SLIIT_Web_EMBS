/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Dayanita from "../assets/dayanita.jpg";
import Savidya from "../assets/savidya.jpg";
import Sanuli from "../assets/sanuli.jpg";
import Sakithma from "../assets/sakithma.jpg";
import Kaveesha from "../assets/kaveesha.jpg";
import Indumini from "../assets/indumini.jpg";

export default function Team() {
  const members = [
    {
      name: "Dayanita Goonewardane",
      position: "Chairperson",
      imgUrl: Dayanita,
      linkedinUrl: "https://www.linkedin.com/in/dayanita-goonewardanerdane-9a29672ab?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
      name: "Savidya Deneth",
      position: "Vice Chairperson",
      imgUrl: Savidya,
      linkedinUrl: "http://www.linkedin.com/in/savidya-deneth-542200361"
    },
    {
      name: "Sanuli Samarasinghe",
      position: "Secretary",
      imgUrl: Sanuli,
      linkedinUrl: "https://lk.linkedin.com/in/sanuli-samarasinghe-335536326"
    },
    {
      name: "Sakithma Rajapaksha",
      position: "Treasurer",
      imgUrl: Sakithma,
      imgClass: "lg:object-top",
      linkedinUrl: "http://www.linkedin.com/in/sakithma-rajapaksha-85a274343"
    },
    {
      name: "Kaveesha Rahubadda",
      position: "Editor",
      imgUrl: Kaveesha,
      linkedinUrl: "https://www.linkedin.com/in/kaveesha-rahubadda?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
      name: "Indumini Minradha",
      position: "Assistant Secretary",
      imgUrl: Indumini,
      linkedinUrl: "https://www.linkedin.com/in/indumini-minradha-02b4b7377?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    }
  ];

  return (
    <>
      <section class="max-w-screen-2xl px-10 mx-auto mb-32">
        <h1 class="mb-8 text-center font-sans text-4xl font-bold text-primary">
          Executive Board 2026/27<span class="text-black">.</span>
        </h1>
        <p class=" text-gray-600 text-md text-center max-w mb-10">
          The Executive Board of IEEE EMBS Affinity Group 2026/27 of SLIIT.
        </p>

        <div class="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pb-24">
          {members.map((member, index) => (
            <article key={index} class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
              <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <div class="relative flex items-end overflow-hidden rounded-xl bg-gray-50">
                  <img src={member.imgUrl} alt={`${member.name} - ${member.position}`} className={`w-full h-80 object-cover object-top ${member.imgClass || "lg:object-[center_10%]"}`} />
                </div>

                <div class="mt-1 p-2">
                  <h2 class="text-gray-900 font-semibold text-lg">
                    {member.name}
                  </h2>
                  <p class="text-primary mt-1 text-md font-semibold ">
                    {member.position}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
