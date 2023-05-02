export default function Form() {
  return (
    <form className="grid gap-y-4 xs:grid-cols-2 px-6 sm:px-10 md:px-16 xl:px-0 xs:gap-x-4 mt-8 md:text-2xl xl:text-3xl">
      {/* NAME */}
      <div>
        <label
          htmlFor="name"
          className="font-sans dark:text-stone-50 font-light text-start block mb-1"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          className="dark:bg-zinc-900 rounded-[1px] font-light italic dark:text-stone-50  pl-[0.25em] py-[.1em] placeholder:italic placeholder:font-extralight xs:w-full"
          placeholder="Your name"
        />
      </div>

      {/* PHONE */}
      <div>
        <label
          htmlFor="phone"
          className="font-sans dark:text-stone-50 font-light text-start block mb-1"
        >
          Phone
        </label>
        <input
          id="phone"
          type="text"
          className="dark:bg-zinc-900 rounded-[1px] font-light italic dark:text-stone-50  pl-[0.25em] py-[.1em] placeholder:italic placeholder:font-extralight xs:w-full"
          placeholder="123 456 7890"
        />
      </div>

      {/* EMAIL */}
      <div>
        <label
          htmlFor="email"
          className="font-sans dark:text-stone-50 font-light text-start block mb-1"
        >
          Email
        </label>
        <input
          id="email"
          type="text"
          className="dark:bg-zinc-900 rounded-[1px] font-light italic dark:text-stone-50  pl-[0.25em] py-[.1em] placeholder:italic placeholder:font-extralight xs:w-full"
          placeholder="your@email.com"
        />
      </div>

      {/* GEAR QUANTITY */}
      <div>
        <label
          htmlFor="gearQuantity"
          className="font-sans dark:text-stone-50 font-light text-start block mb-1"
        >
          How many skis/snowboards?
        </label>
        <input
          id="gearQuantity"
          type="number"
          className="dark:bg-zinc-900 rounded-[1px] font-light italic dark:text-stone-50  pl-[0.25em] py-[.1em] placeholder:italic placeholder:font-extralight xs:w-full"
          min={1}
        />
      </div>

      <div className="flex flex-wrap gap-3 xs:col-span-2 mt-1">
        {/* WAX CHECKBOX */}
        <label
          htmlFor="wax"
          className="font-sans dark:text-stone-50 font-light text-start px-2 py-1 rounded-md w-max flex dark:bg-zinc-900  hover:outline hover:outline-[1px] hover:outline-yellow-500"
        >
          <input
            id="wax"
            type="checkbox"
            className="accent-yellow-400 pl-2 mr-2"
          />
          Wax
        </label>

        {/* EDGES CHECKBOX */}
        <label
          htmlFor="edges"
          className="font-sans dark:text-stone-50 font-light text-start px-2 py-1 rounded-md w-max flex dark:bg-zinc-900  hover:outline hover:outline-[1px] hover:outline-yellow-500"
        >
          <input
            id="edges"
            type="checkbox"
            className="accent-yellow-400 mr-2"
          />
          Edges
        </label>

        {/* REPAIRS CHECKBOX */}
        <label
          htmlFor="repairs"
          className="font-sans dark:text-stone-50 font-light text-start px-2 py-1 rounded-md w-max flex dark:bg-zinc-900  hover:outline hover:outline-[1px] hover:outline-yellow-500"
        >
          <input
            id="repairs"
            type="checkbox"
            className="accent-yellow-400 mr-2"
          />
          Repairs
        </label>
      </div>

      {/* MESSAGE */}
      <div className="xs:col-span-2">
        <label
          htmlFor="message"
          className="font-sans dark:text-stone-50 font-light text-start block mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          className="dark:bg-zinc-900 rounded-sm font-light italic pl-[0.25em] py-[.1em] placeholder:italic placeholder:font-extralight text-stone-50 w-full"
          placeholder="Anything else to add?"
        />
      </div>

      <button className="font-sans font-semibold text-zinc-950 bg-yellow-500 hover:bg-yellow-600 mt-[1em] w-1/2 place-self-center xs:col-span-2">
        Send
      </button>
    </form>
  );
}
