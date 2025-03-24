import React from "react";

function Contact() {
  return (
    <div>
      <h1 className="text-2xl font-bold p-2 m-2">Contact</h1>
      <form className="">
        <label className="mx-2">Name:</label>
        <input
          type="text"
          className="border border-black m-2 p-2 rounded-2xl"
          placeholder="Name"
        />
        <br/>
        <label className="mx-2">Message:</label>
        <input
          type="text"
          className="border border-black m-2 p-2 rounded-2xl"
          placeholder="Message"
        />
        <br/>

        <button className="border border-black p-2 m-2 bg-black text-white rounded-2xl">
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
}

export default Contact;
