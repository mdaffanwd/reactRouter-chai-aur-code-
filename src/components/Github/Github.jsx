import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData()
  return (
    <>
    <div className="flex flex-col items-center bg-slate-600 text-white text-3xl font-bold p-5">

      <img src={data.avatar_url} alt="Profile Image" width={300}/>
      <h1>Username: {data.login}</h1>
      <h1>Github Followers: {data.followers}</h1>
      <a href={data.html_url} target="_blank" className="text-xl text-underline">Go To Github</a>
    </div>
    </>
  );
}

export default Github;

export async function githubInfoLoader() {
  const data = await fetch("https://api.github.com/users/mdaffanwd")
  return data.json()

}
