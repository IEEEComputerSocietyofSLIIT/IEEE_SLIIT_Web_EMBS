/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Profile from "../assets/profile.jpg";

export default function Team() {
  return (
    <>
      <section class="max-w-screen-2xl px-10 mx-auto mb-32">
        <h1 class="mb-8 text-center font-sans text-4xl font-bold text-primary">
          Past executive board<span class="text-black">.</span>
        </h1>
        <p class=" text-gray-600 text-md text-center max-w mb-10">
          Recognizing the Past Executive Committee Members of IEEE EMBS Affinity
          Group 2022/23 of SLIIT, whose dedication and leadership paved the way
          for our organization's success.
        </p>
        <div class="mx-auto grid  grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-4 pb-24">
          <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
            <a href="#">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img src={Profile} alt="Hotel Photo" />
              </div>

              <div class="mt-1 p-2">
                <h2 class="text-gray-900 font-semibold text-lg">
                  Safni Mariyam
                </h2>
                <p class="text-primary mt-1 text-md font-semibold ">
                  Chairperson
                </p>
              </div>
            </a>
          </article>

          <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
            <a href="#">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img src={Profile} alt="Hotel Photo" />
              </div>

              <div class="mt-1 p-2">
                <h2 class="text-gray-900 font-semibold text-lg">
                  Bavatharani Janahiram
                </h2>
                <p class="text-primary mt-1 text-md font-semibold ">
                  Vice Chairperson
                </p>
              </div>
            </a>
          </article>

          <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
            <a href="#">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img src={Profile} alt="Hotel Photo" />
              </div>

              <div class="mt-1 p-2">
                <h2 class="text-gray-900 font-semibold text-lg">
                  Rozmin Zamha
                </h2>
                <p class="text-primary mt-1 text-md font-semibold ">
                  Secretary
                </p>
              </div>
            </a>
          </article>

          <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
            <a href="#">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img src={Profile} alt="Hotel Photo" />
              </div>

              <div class="mt-1 p-2">
                <h2 class="text-gray-900 font-semibold text-lg">
                  Oshini Wickrama
                </h2>
                <p class="text-primary mt-1 text-md font-semibold ">
                  Treasurer
                </p>
              </div>
            </a>
          </article>

          {/* <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
            <a href="#">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img src={Profile} alt="Hotel Photo" />
              </div>

              <div class="mt-1 p-2">
                <h2 class="text-gray-900 font-semibold text-lg">
                  Shavidini Ekanayake
                </h2>
                <p class="text-primary mt-1 text-md font-semibold ">
                  Webmaster
                </p>
              </div>
            </a>
          </article> */}
        </div>

        {/* <h1 class="mb-8 text-center font-sans text-4xl font-bold text-primary">
          Current executive board<span class="text-black">.</span>
        </h1>
        <p class=" text-gray-600 text-md text-center max-w mb-10">
          The Executive Board of IEEE WIE Affinity Group 2023/24 of SLIIT.
        </p> */}

        {/* <div class="mx-auto px-20 grid max-w-screen-xl grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-4">
          <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
            <a href="https://www.linkedin.com/in/yashodha-athapattu-883228235/">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img src={Yasodas} alt="Hotel Photo" />
              </div>

              <div class="mt-1 p-2">
                <h2 class="text-gray-900 font-semibold text-lg">
                  Yashoda Athapattu
                </h2>
                <p class="text-primary mt-1 text-md font-semibold ">
                  Chairperson
                </p>
              </div>
            </a>
          </article>

          <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
            <a href="https://www.linkedin.com/in/imethmakariyawasam">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img src={Imethma} alt="Hotel Photo" />
              </div>

              <div class="mt-1 p-2">
                <h2 class="text-gray-900 font-semibold text-lg">
                  Imethma Kariyawasam
                </h2>
                <p class="text-primary mt-1 text-md font-semibold ">
                  Vice Chairperson
                </p>
              </div>
            </a>
          </article>

          <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
            <a href="http://www.linkedin.com/in/owadibandara">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img src={Owadi} alt="Hotel Photo" />
              </div>

              <div class="mt-1 p-2">
                <h2 class="text-gray-900 font-semibold text-lg">
                  Owadi Bandara
                </h2>
                <p class="text-primary mt-1 text-md font-semibold ">
                  Secretary
                </p>
              </div>
            </a>
          </article>

          <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
            <a href="https://www.linkedin.com/in/nisuni-sineja-184414304">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img src={Nisuni} alt="Hotel Photo" />
              </div>

              <div class="mt-1 p-2">
                <h2 class="text-gray-900 font-semibold text-lg">
                  Nisuni Sineja
                </h2>
                <p class="text-primary mt-1 text-md font-semibold ">
                  Vice Secretary
                </p>
              </div>
            </a>
          </article>
        </div> */}
      </section>
    </>
  );
}
