import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import Card from "@/Components/Card";
import Sidebar from "@/Components/Sidebar";
import Footer from "@/Components/Footer";
import Paginator from "@/Components/Paginator";
export default function HomePage(props) {
  return (
    <div className=" min-h-screen bg-slate-50 ">
      <Head title="Home" />
      <Navbar user={props.auth.user} />
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content overflow-hidden">
          <div className="m-6">
            <label
              htmlFor="default-search"
              className="text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
          </div>
          <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 m-4">
            <Card
              converter={props.converter}
              convertPage={props.convertColl.data}
            />
          </div>
          <div className="flex justify-center items-center my-5">
            <Paginator meta={props.convertColl.meta} />
          </div>
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}
