import React from "react";
import { Link, Head, useForm, Inertia } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import Footer from "@/Components/Footer";
import { FaArrowLeft } from "react-icons/fa";

export default function HomePage(props) {
  const { data, setData, errors, post, progress } = useForm({
    file: null,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(`/convert/${props.nama_script}`);
    setData("file", null);
  };
  return (
    <div className=" min-h-screen bg-slate-50 ">
      <Head title="Convert" />
      <Navbar />
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Link
            className="btn btn-success lg:w-1/12 hover:bg-lime-400 ml-10 mt-10"
            href="/"
          >
            <FaArrowLeft className="text-slate-50" />
          </Link>
          <div
            className="m-4 flex flex-col items-center 
              justify-center mt-8"
          >
            <div className="flex lg:text-2xl bold text-slate-900">
              Page Convert | <p> {props.nama_script}</p>
            </div>
            <hr className="bg-black w-9 my-3 h-1" />
            {props.message && (
              <div className="alert shadow-lg my-3 lg:w-1/4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="text-sm">{props.message}</span>
                </div>
              </div>
            )}
          </div>
          {!props.file_new ? (
            <form name="createForm" onSubmit={handleSubmit}>
              <div
                className="m-4 flex flex-col items-center 
              justify-center"
              >
                {errors.file && (
                  <div className="alert alert-error shadow-lg my-3 w-1/2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{errors.file}</span>
                    </div>
                  </div>
                )}
                <input
                  type="file"
                  name="file"
                  className="text-sm text-center text-slate-700
              p-2
              w-1/2
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-100 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-100
            hover:file:text-amber-700
            border-slate-700
            border
            hover:bg-slate-300
            hover:cursor-pointer

            rounded-lg
          "
                  onChange={(e) => setData("file", e.target.files[0])}
                />

                {progress && (
                  <div className="bg-gray-200 rounded-full dark:bg-gray-700 my-3 w-1/3">
                    <div
                      className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                      width={progress.percentage}
                    >
                      {" "}
                      {progress.percentage}%
                    </div>
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-success w-1/3 btn-outline my-3"
                >
                  Go
                </button>
              </div>
            </form>
          ) : (
            <div
              className="flex flex-col items-center 
              justify-center"
            >
              <Link
                href={route("HomePage")}
                className="text-sm md:text-base text-slate-800"
              >
                Home
              </Link>
              <a href={`/excel/${props.file_new}.xls`} target="_blank">
                <button className="btn btn-primary my-4">Download</button>
              </a>
            </div>
          )}
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}
