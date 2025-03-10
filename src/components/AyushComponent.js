import React from "react";
import app_image from "./Profile Images/a_pp.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function AyushComponent() {
  return (
    <div className="w-full rounded-lg shadow-md lg:max-w-sm">
      <div className="grid place-content-around ">
        <img
          className="object-cover flex justify-center w-48 h-48 rounded-full"
          src={app_image}
          alt="image"
        />
      </div>
      <div className="p-4">
        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
          Ayush Kumar Srivastava
        </h4>
        <p className="mb-2 leading-normal">
          react tailwind css card with image It is a long established fact that
          a reader will be distracted by the readable content.
        </p>
        <div className="flex flex-row">
          <button className="text-4xl rounded shadow m-2 hover:text-grey-500">
            <a href="https://github.com/heroaks" target="blank">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </button>

          <button className="text-4xl rounded shadow m-2 hover:text-blue-900">
            <a
              href="https://www.linkedin.com/in/ayush-srivastava-150/"
              target="blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
