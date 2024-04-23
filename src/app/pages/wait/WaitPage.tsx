import { CheckCircleOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

const WaitPage = () => {
  // https://i.etsystatic.com/40957748/r/il/e4efaa/4810125152/il_fullxfull.4810125152_23ir.jpg
  const backgroundImageUrl =
    "https://i0.wp.com/halcyonrealms.com/blogpics/japgifB.gif?resize=500%2C291&ssl=1";
  return (
    <div
      className="flex items-center justify-center min-h-screen w-full"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="flex flex-col gap-10 items-center justify-center relative shadow-md  drop-shadow-2xl rounded-sm bg-[#ffffff]
      overflow-hidden w-[1200px] max-w-[100%] min-h-[480px] h-[65%] mx-96 py-28  text-center"
      >
        <CheckCircleOutlined className="text-9xl text-[#77B0AA]" />
        <div className="text-4xl">Your Application has been sent!</div>
        <div>
          It will take some time for us to review your application, please wait
          for our response via email
        </div>
        <Link to={`/login`}>Go Back</Link>
      </div>
    </div>
  );
};

export default WaitPage;
