import React, { useState } from "react";

export default function Contact() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: any) => {
    setError(false);
    setSent(false);
    setLoading(true);
    e.preventDefault();
    console.log(name , email , message);
    
    if (!name || !email || !message) {
      setError(true);
      setLoading(false);
      return;
    }
    // 
    fetch("https://testar-server.herokuapp.com/davidkristek/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then((data) => {
        if (data.msg === "success") {
          setSent(true);
          setname("");
          setEmail(""); 
          setMessage(""); 
        }

        setLoading(false);
      })
      .catch((error) => {
        setError(false);
        setLoading(false);
      });
  };
  return (
    <section className="text-gray-300 body-font relative mb-[216px]">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Napište mi
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-textl">
            Budu se těšit na naši další spolupráci.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          {error && <p className="text-red-600">Vyplňte všechny údaje!</p>}
          {sent && (
            <p className="text-green-500">Zpráva byla úspěšně odeslána!</p>
          )}
          <form className="flex flex-wrap -m-2" onSubmit={onSubmit}>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-textl">Jméno</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-blue-200 bg-opacity-50 rounded border border-gray-300 focus:border-darkpurple focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-textl">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-blue-200 bg-opacity-50 rounded border border-gray-300 focus:border-darkpurple focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-textl">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-blue-200 bg-opacity-50 rounded border border-gray-300 focus:border-darkpurple focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full flex justify-center">
              <button
                type="submit"
                className="mx-auto text-white bg-purple border-0 py-2 px-8 active:scale-95 hover:scale-110 rounded text-lg transition-all"
              >
                {loading ? "Odesílám ..." : "Odeslat"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
