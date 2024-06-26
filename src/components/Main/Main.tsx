"use client";
import React from "react";
import SideMenu from "../SideMenu/SideMenu";
import Dashboard from "@/app/dashboard/page";
import Login from "../Login/Login";
import { useSession } from "next-auth/react";

function Main() {
  const { data: session } = useSession();

  return (
    <>
      {session && <Dashboard />}
      {!session && <Login />}
    </>
  );
}

export default Main;
