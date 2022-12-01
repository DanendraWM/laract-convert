import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";
const Card = ({ converter, convertPage }) => {
  const [search, setNewSearch] = useState("");

  const handleSearchChange = (text) => {
    setNewSearch(text.target.value);
  };
  const filtered = !search
    ? converter
    : converter.filter((convert) =>
        convert.title.toLowerCase().includes(search.toLowerCase())
      );
  return (
    <>
      <div className="relative w-full mx-5">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Converter..."
          required
          onChange={handleSearchChange}
          value={search}
        />
      </div>
      {search ? (
        filtered.length ? (
          filtered.map((data, i) => {
            return (
              <div
                key={i}
                className="card w-full lg:w-96 bg-base-100 shadow-xl"
              >
                <div className="card-body">
                  <h2 className="card-title">{data.title}</h2>
                  <p>{data.description}</p>
                  <div className="card-actions justify-center">
                    <Link
                      href={`/convert/${data.title}`}
                      className="btn btn-primary"
                    >
                      Convert Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="alert shadow-lg my-3 lg:w-1/2">
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
              <span className="text-sm">Converter tidak di temukan</span>
            </div>
          </div>
        )
      ) : (
        convertPage.map((data, i) => {
          return (
            <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>{data.description}</p>
                <div className="card-actions justify-center">
                  <Link
                    href={`/convert/${data.title}`}
                    className="btn btn-primary"
                  >
                    Convert Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Card;
