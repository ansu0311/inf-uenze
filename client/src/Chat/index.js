import React from "react";

const Chat = () => {
  return (
    <div className="h-screen w-screen bg-[#050509]">
      <div className="w-1/5 h-screen bg-[#0c0c15] text-white p-4">
        <div>
          <button className=" w-full h-[50px] border rounded hover:text-slate-600 hover:border-slate-600 cursor-pointer">New Chat</button>
        </div>
        <div className="h-[75%] mt-8">
          <div className="py-3 text-center mt-4 text-lg font-light flex justify-center items-center hover:bg-slate-600 cursor-pointer">
            <span className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-message"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 9h8" />
                <path d="M8 13h6" />
                <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
              </svg>
            </span>
            My chat history
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-4/5"></div>
    </div>
  );
};

export default Chat;
