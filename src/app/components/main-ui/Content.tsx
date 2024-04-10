import { Content } from "antd/es/layout/layout";
import React from "react";

export default function MyContent({ children }: { children: React.ReactNode }) {
  return (
    <Content className="px-3 py-5">
      <main className=" px-5 py-5 rounded-sm h-[85vh] bg-[#f3f3f3] mt-14">
        {children}
      </main>
    </Content>
  );
}
