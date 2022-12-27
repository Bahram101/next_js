import Head from "next/head";
import React from "react";
import A from "./A";
// import styles from "../styles/A.module.css";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keyword={"ulbi tv, " + keywords} />
      </Head>
      <div className="navbar">
        <A href="/" text="Главная" />
        <A href="/users" text="Пользователи" />
      </div>
      <div>{children}</div>
      <style>
        {`
        .navbar {
          background: orange;
          padding: 15px;
        }`}
      </style>
    </>
  );
};

export default MainContainer;
