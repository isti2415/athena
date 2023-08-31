import React from "react";
import Nav from "../components/nav.js";
import Footer from "@/components/footer.js";

export default function Marketplace() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Nav />
      <div className="container mx-auto px-4 mt-10">
        <span className="text-5xl font-bold mb-4">Marketplace - Freelancers</span>
        <p className="text-lg font-medium text-gray-600 mt-4">
          Welcome to the Athena Marketplace, your one-stop destination for exciting job opportunities. Whether
          you're looking to get hired, we've got something for you.
        </p>

        <div className="mt-10">
          <span className="text-3xl font-bold">For Employers</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="card glass bordered">
              <figure>
                <img src="/girl.jpg" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">John Doe</h2>
                <p>Graphic Designer</p>
                <div className="justify-end card-actions">
                  <button className="btn btn-secondary">View Profile</button>
                </div>
              </div>
            </div>
            <div className="card glass bordered">
              <figure>
                <img src="/girl.jpg" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">John Doe</h2>
                <p>Graphic Designer</p>
                <div className="justify-end card-actions">
                  <button className="btn btn-secondary">View Profile</button>
                </div>
              </div>
            </div>
            <div className="card glass bordered">
              <figure>
                <img src="/girl.jpg" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">John Doe</h2>
                <p>Graphic Designer</p>
                <div className="justify-end card-actions">
                  <button className="btn btn-secondary">View Profile</button>
                </div>
              </div>
            </div>
            <div className="card glass bordered">
              <figure>
                <img src="/girl.jpg" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">John Doe</h2>
                <p>Graphic Designer</p>
                <div className="justify-end card-actions">
                  <button className="btn btn-secondary">View Profile</button>
                </div>
              </div>
            </div>
            <div className="card glass bordered">
              <figure>
                <img src="/girl.jpg" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">John Doe</h2>
                <p>Graphic Designer</p>
                <div className="justify-end card-actions">
                  <button className="btn btn-secondary">View Profile</button>
                </div>
              </div>
            </div>
            <div className="card glass bordered">
              <figure>
                <img src="/girl.jpg" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">John Doe</h2>
                <p>Graphic Designer</p>
                <div className="justify-end card-actions">
                  <button className="btn btn-secondary">View Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
