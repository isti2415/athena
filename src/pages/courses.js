import React from "react";
import Nav from "../components/nav.js";
import Footer from "@/components/footer.js";

export default function Courses() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mt-10">
          Courses at Athena Empowerment Hub
        </h1>
        <h1 className="text-lg mt-4 text-secondary">
          Tailored for Freelancers and Beginners
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          <div className="card glass bordered">
            <div className="card-body">
              <h2 className="card-title">Excel Mastery</h2>
              <p>
                Unlock the full potential of Excel for data analysis and
                reporting.
              </p>
              <button className="btn btn-primary mt-4">Find A Course Now</button>
            </div>
          </div>
          <div className="card glass bordered">
            <div className="card-body">
              <h2 className="card-title">Data Entry Techniques</h2>
              <p>
                Learn efficient data entry skills to improve your freelance
                career.
              </p>
              <button className="btn btn-primary mt-4">Find A Course Now</button>
            </div>
          </div>
          <div className="card glass bordered">
            <div className="card-body">
              <h2 className="card-title">Graphics Design Fundamentals</h2>
              <p>
                Master the basics of graphics design to expand your freelance
                offerings.
              </p>
              <button className="btn btn-primary mt-4">Find A Course Now</button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <span className="text-3xl font-bold">Featured Course</span>
          <div className="card glass w-full mt-4">
            <div className="card-body">
              <h2 className="card-title text-2xl">
                Freelancer's Financial Management
              </h2>
              <p>
                Gain essential financial skills to manage and grow your
                freelance income.
              </p>
              <button className="btn btn-primary mt-4">Enroll Now</button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <span className="text-3xl font-bold mb-4">
            Why Freelancers and Beginners Choose Athena Empowerment Hub
          </span>
          <div className="stats glass w-full stats-vertical lg:stats-horizontal shadow mt-4">
            <div className="stat">
              <div className="stat-figure text-secondary text-3xl text-3xl">
                <i className="fas fa-tools inline-block"></i>
              </div>
              <div className="stat-title text-lg">
                Practical Skill Development
              </div>
              <div className="stat-desc text-md">
                Learn skills that matter in the real world.
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary text-3xl">
                <i className="fas fa-clock inline-block"></i>
              </div>
              <div className="stat-title text-lg">Flexible Course Timing</div>
              <div className="stat-desc text-md">
                Fit learning into your busy schedule.
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary text-3xl">
                <i className="fas fa-users inline-block"></i>
              </div>
              <div className="stat-title text-lg">
                Like-minded Community
              </div>
              <div className="stat-desc text-md">
                Connect, collaborate, and grow together.
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary text-3xl">
                <i className="fas fa-dollar-sign inline-block"></i>
              </div>
              <div className="stat-title text-lg">Excellent Value</div>
              <div className="stat-desc text-md">
                Affordable courses with top-notch content.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <span className="text-3xl font-bold">Frequently Asked Questions</span>
          <div className="join glass join-vertical w-full mt-4">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                How beginner-friendly are these courses?
              </div>
              <div className="collapse-content">
                <p>
                  All our courses are designed with beginners in mind, and we
                  provide extensive support throughout.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                What are the prerequisites?
              </div>
              <div className="collapse-content">
                <p>
                  There are no prerequisites. Just bring your willingness to
                  learn!
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Do you offer any certificates?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, we offer completion certificates for all our courses.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <span className="text-3xl font-bold">Testimonials</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="card bordered glass p-4">
              <figure>
                <img
                  src="https://placekitten.com/128/128"
                  className="rounded-full w-20 h-20"
                />
              </figure>
              <blockquote className="mb-4">
                <p>
                  "The Excel Mastery course changed the game for me. Highly
                  recommend!"
                </p>
                <footer>- Sarah, Freelancer</footer>
              </blockquote>
            </div>

            <div className="card bordered glass p-4">
              <figure>
                <img
                  src="https://placekitten.com/128/129"
                  className="rounded-full w-20 h-20"
                />
              </figure>
              <blockquote className="mb-4">
                <p>
                  "The Graphics Design Fundamentals course was exactly what I
                  needed to start my freelance career."
                </p>
                <footer>- John, Beginner</footer>
              </blockquote>
            </div>

            <div className="card bordered glass p-4">
              <figure>
                <img
                  src="https://placekitten.com/128/130"
                  className="rounded-full w-20 h-20"
                />
              </figure>
              <blockquote className="mb-4">
                <p>
                  "The instructors are super helpful and the community is
                  excellent!"
                </p>
                <footer>- Emily, Data Entry Specialist</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
