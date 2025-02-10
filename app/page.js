"use client";
import React from "react";
import { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);
  const submit = (e) => {
    console.log(e);
    e.preventDefault();
    setmaintask([...maintask, { title, desc }]);
    console.log(maintask);
    setdesc("");
    settitle("");
  };
  const deleteh = (i) => {
    let copytask = [...maintask];
    copytask.splice(i, 1);
    setmaintask(copytask);
  };
  let tasks = <h1>No Task is Available</h1>;

  if (maintask.length > 0) {
    tasks = maintask.map((t, id) => {
      return (
        <li key={id}>
          <div className="flex justify-between m-6">
            <h1 className="text-2xl">{t.title}</h1>
            <h4 className="text-xl">{t.desc}</h4>
            <button
              onClick={(i) => {
                deleteh(i);
              }}
              className="bg-black px-4 py-2 rounded text-white"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }
  return (
    <>
      <div className="bg-black text-white text-center font-bold p-5 text-5xl">
        <h1>My ToDo list</h1>
      </div>

      <div>
        <form onSubmit={submit}>
          <input
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            type="text"
            id="id"
            name="name"
            placeholder="Add title here"
            className="w-[300px] border border-gray-700 rounded-lg py-3 px-5 outline-none	bg-transparent m-5"
          />
          <input
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            type="text"
            id="id"
            name="name"
            placeholder="Add description"
            className="w-[300px] border border-gray-700 rounded-lg py-3 px-5 outline-none	bg-transparent"
          />
          <button className="inline-flex items-center justify-center px-5 py-3 font-sans font-semibold tracking-wide text-white bg-black m-5 rounded  font-bold">
            Add Task
          </button>
        </form>
      </div>
      <div className="bg-slate-200 w-full p-5">
        <ul>{tasks}</ul>
      </div>
    </>
  );
};

export default page;
