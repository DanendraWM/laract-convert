import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import Card from "@/Components/Card";
import Sidebar from "@/Components/Sidebar";
import Footer from "@/Components/Footer";
export default function HomePage(props) {
  const [search, setSearch] = useState("");
  console.log(props.message);
  return (
    <div className=" min-h-screen bg-slate-50 ">
      <Head title="Home" />
      <Navbar />
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="m-8">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            {/* <div className="relative">
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
                placeholder="Search Mockups, Logos..."
                required
                onChange={(cari) => setSearch(cari.target.value)}
                value={search}
              />
            </div> */}
          </div>
          <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 m-4">
            <Card title="HBO" desc="hbo menggunakan format xls" />
            <Card
              title="Translate"
              desc="translate dari bahasa inggris ke indonesia menggunakan format xls"
            />
            <Card title="TVN" desc="tvn menggunakan format xlsx" />
            <Card title="WARNER" desc="warner menggunakan format xls" />
            <Card title="HORIZON" desc="Horizon menggunakan format xlsx" />
            <Card title="NATGEO" />
            <Card title="ANIMAX" />
            <Card title="HISTORY" desc="tvn menggunakan format xlsx" />
            <Card
              title="DREAMWORKS"
              desc="dreamworks menggunakan format xlsx"
            />
            <Card title="SPOTV" />
          </div>
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}
