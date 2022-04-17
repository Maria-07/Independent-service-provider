import React from "react";
import aboutImage from "../../../../images/about/about-1.png";

const About = () => {
  return (
    <div className=" text-slate-200 bg-black py-40">
      <div className="container">
        <h1 className=" text-center text-4xl mb-32">ABOUT EMMA</h1>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <img src={aboutImage} className="mx-auto h-96" alt="" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className=" p-10 text-left">
              <h3 className=" font-semibold text-3xl">Emma Watson</h3>
              <h6 className="text-slate-400 text-2xl">
                Actor and UN Women Goodwill Ambassador
              </h6>
              <p className="mt-8">
                Emma Watson is a British actress, model and activist. She rose
                to prominence through her role as Hermione Granger in the Harry
                Potter films.In January 2016, she started the feminist Goodreads
                book club: Our Shared Shelf, which aims to raise the topic of
                gender inequality by discussing scientific articles and books on
                the subject. Emma joined One Young World as a Counsellor in 2016
                and attended the Summit in Ottawa with ten young leaders who had
                won the One Young World Emma Watson Scholarship. This
                scholarship was for people who had shown positive activism and
                were leading change in gender equality through their own work
                and leading positive change in this field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
