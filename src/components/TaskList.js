import React, { useState } from "react";
import "../styles/TaskList.css";

function TaskList({ data }) {
  const [activeTaskIndex, setActiveTaskIndex] = useState(null);
  const [tasks, setTasks] = useState(data.task);

  const handleMoreClick = (index) => {
    setActiveTaskIndex(activeTaskIndex === index ? null : index);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setActiveTaskIndex(null);
  };

  return (
    <div className="task-list w-full md:w-1/4 ">
      <h2 className="pl-1 font-light text-xs text-gray-semibold mb-1">
        {data.quarter}
      </h2>
      <h3 className="pl-1 font-semibold text-gray-semibold text-sm">
        {data.month}
      </h3>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div key={index} className="task-container">
            <div className="task">
              <p className="pl-1 pb-4 font-semibold text-gray-2bold text-sm">
                {task.title}
              </p>
              <div className="progsec flex items-center justify-between">
                <div className="progress flex-1">
                  <svg
                    className="pl-1"
                    width="23"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99999 3.20001C8.56578 3.20001 9.10841 3.42477 9.50848 3.82485C9.90856 4.22493 10.1333 4.76755 10.1333 5.33335C10.1333 5.72268 10.032 6.08535 9.84532 6.40001H11.2C11.7067 6.40001 12.1333 6.75735 12.24 7.23201C13.312 11.504 13.3333 11.616 13.3333 11.7333C13.3333 12.0162 13.2209 12.2876 13.0209 12.4876C12.8209 12.6876 12.5496 12.8 12.2667 12.8H3.73332C3.45043 12.8 3.17911 12.6876 2.97908 12.4876C2.77904 12.2876 2.66666 12.0162 2.66666 11.7333C2.66666 11.616 2.68799 11.504 3.75999 7.23201C3.86666 6.75735 4.29332 6.40001 4.79999 6.40001H6.15466C5.96401 6.07702 5.86448 5.7084 5.86666 5.33335C5.86666 4.76755 6.09142 4.22493 6.4915 3.82485C6.89157 3.42477 7.43419 3.20001 7.99999 3.20001ZM7.99999 4.26668C7.71709 4.26668 7.44578 4.37906 7.24574 4.5791C7.0457 4.77914 6.93332 5.05045 6.93332 5.33335C6.93332 5.61624 7.0457 5.88755 7.24574 6.08759C7.44578 6.28763 7.71709 6.40001 7.99999 6.40001C8.28289 6.40001 8.5542 6.28763 8.75424 6.08759C8.95428 5.88755 9.06666 5.61624 9.06666 5.33335C9.06666 5.05045 8.95428 4.77914 8.75424 4.5791C8.5542 4.37906 8.28289 4.26668 7.99999 4.26668Z"
                      fill="#B7BDC9"
                    />
                  </svg>
                  <span className="pl-2 text-gray-500 text-xs">
                    {task.progress}
                  </span>
                </div>
                <button
                  className="more-button text-gray-500 ml-4"
                  onClick={() => handleMoreClick(index)}
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_0_993)">
                      <mask
                        id="mask0_0_993"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="36"
                        height="36"
                      >
                        <rect width="36" height="36" rx="4" fill="white" />
                      </mask>
                      <g mask="url(#mask0_0_993)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.8984 20.025C11.2969 20.025 10.7884 19.8245 10.373 19.4234C9.95768 19.0224 9.75 18.5354 9.75 17.9625C9.75 17.3896 9.95768 16.9026 10.373 16.5016C10.7884 16.1005 11.2969 15.9 11.8984 15.9C12.5 15.9 13.0085 16.1005 13.4238 16.5016C13.8392 16.9026 14.0469 17.3896 14.0469 17.9625C14.0469 18.5354 13.8392 19.0224 13.4238 19.4234C13.0085 19.8245 12.5 20.025 11.8984 20.025ZM18 20.025C17.3984 20.025 16.89 19.8245 16.4746 19.4234C16.0592 19.0224 15.8516 18.5354 15.8516 17.9625C15.8516 17.3896 16.0592 16.9026 16.4746 16.5016C16.89 16.1005 17.3984 15.9 18 15.9C18.6016 15.9 19.11 16.1005 19.5254 16.5016C19.9408 16.9026 20.1484 17.3896 20.1484 17.9625C20.1484 18.5354 19.9408 19.0224 19.5254 19.4234C19.11 19.8245 18.6016 20.025 18 20.025ZM24.1016 20.025C23.5 20.025 22.9915 19.8245 22.5762 19.4234C22.1608 19.0224 21.9531 18.5354 21.9531 17.9625C21.9531 17.3896 22.1608 16.9026 22.5762 16.5016C22.9915 16.1005 23.5 15.9 24.1016 15.9C24.7031 15.9 25.2116 16.1005 25.627 16.5016C26.0423 16.9026 26.25 17.3896 26.25 17.9625C26.25 18.5354 26.0423 19.0224 25.627 19.4234C25.2116 19.8245 24.7031 20.025 24.1016 20.025Z"
                          fill="#B7BDC9"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_0_993">
                        <rect width="36" height="36" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            {activeTaskIndex === index && (
              <div className="menu bg-gray-100 rounded-2xl m-3">
                <button
                  onClick={() => handleDelete(index)}
                  className="px-4 py-2 text-left text-red-600 text-base hover:bg-gray-300"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-200 pl-1 mt-4 mb-2 text-sm">
          No Task Available
        </p>
      )}
      <div className="flex leading-3">
        <button className="create-button pl-2">+</button>
        <p className="pl-2 text-sm text-gray-2bold">Create new task</p>
      </div>
    </div>
  );
}

export default TaskList;
