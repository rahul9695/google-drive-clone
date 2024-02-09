import ModalProvider from "@/components/providers/modal-provider";
import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
import React from "react";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="w-full min-h-[90vh] relative top-[10vh] bg-[#F6F9FC] dark:bg-[#1F1F1F] pl-64 pt-2 pr-4 pb-4"> {/*p-4*/}
        <div className="min-h-[85vh] h-max rounded-xl bg-white dark:bg-black p-8">{children}</div> {/*ml-4 */}
      </main>
    </div>
  );
};

export default RootLayout;
