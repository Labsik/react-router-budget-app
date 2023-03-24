import React from "react";
import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

export function dashboardLoader() {
  const userName = fetchData("userName");

  return { userName };
}

export const Dashboard = () => {
  const { userName } = useLoaderData();
  return (
    <div>
      <h1>Hello {userName}</h1>
    </div>
  );
};
