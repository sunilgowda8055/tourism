import React from "react";

function Image() {
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center mt-5"
        style={{ position: "relative", height: "450px" }}
      >
        <img
          src="https://images.unsplash.com/photo-1699521892394-6f00f737343e?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
          alt=""
          style={{
            height: "450px",
            opacity: 0.2,
            width: "100%",
            position: "absolute",
          }}
        />
        <p>
          <svg
            style={{
              cursor: "pointer",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            class="bi bi-skip-end-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407L9.5 8.972V10.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v1.528z" />
          </svg>
        </p>
      </div>
    </div>
  );
}

export default Image;
