export default function Hero() {
  return (
    <div className="hero flex flex-col items-center ms:max-h-screen py-4 gap-24">
      <div className="hero-content flex-col lg:flex-row">
        <img src="/hero.png" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Athena Empowerment Hub</h1>
          <p className="py-6">
            Elevate your skills, unleash your potential. Athena Empowerment Hub
            offers training and freelance opportunities in various domains like
            data entry, virtual assistance, content writing, and more. Uniquely
            designed for women, by women.
          </p>
          <button className="btn btn-primary">Join Now</button>
        </div>
      </div>
      <div className="stats bg-neutral w-full md:w-[80%] stats-vertical lg:stats-horizontal">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
      <div className="join gap-8 flex flex-col md:flex-row md:w-[80%]">
        <div className="card lg:card-side bg-neutral shadow-xl">
          <figure className="md:w-1/2 p-2">
            <img
              src="/logo.png"
              alt="Album"
            />
          </figure>
          <div className="card-body md:w-1/2">
            <h2 className="card-title">Learn New Skills with Athena</h2>
            <p>Athena Empowerment Hub offers a variety of courses to help you learn new skills and start your freelancing career. Whether you're interested in graphic design, web development, or social media marketing, we have a course for you.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Start learning today!</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-neutral shadow-xl">
          <figure className="md:w-1/2 p-2">
            <img
              src="/logo.png"
              alt="Album"
            />
          </figure>
          <div className="card-body md:w-1/2">
            <h2 className="card-title">Get Placed in Freelancing Jobs</h2>
            <p>Athena Empowerment Hub also provides placement assistance to help you find freelancing jobs. Our team of experts will work with you to create a portfolio and market your skills to potential employers.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Apply for placement today!</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-neutral shadow-xl">
          <figure className="md:w-1/2 p-2">
            <img
              src="/logo.png"
              alt="Album"
            />
          </figure>
          <div className="card-body md:w-1/2">
            <h2 className="card-title">Find Freelance Talent</h2>
            <p>Athena Empowerment Hub is the perfect place to find freelance talent. We have a pool of qualified and experienced freelancers who are ready to work on your projects.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Post a job today!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
