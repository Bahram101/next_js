 
import React from "react";
import A from "../components/A";

const Index = () => {
  return (
    <div>
      <div className="navbar">
        <A href="/" text="Главная" />
        <A href="/users" text="Пользователи" />
      </div>
      <h1>Home page</h1>
      <style jsx>
        {`        
          .navbar {
            background: orange;
            padding: 15px;
          }        
        `}
      </style>
    </div>
  );
};

export default Index;
