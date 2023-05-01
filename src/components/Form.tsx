export default function Form() {
  return (
    <form className="grid px-6 mt-8 md:text-2xl xl:text-3xl">
      <label
        htmlFor="name"
        className="font-sans dark:text-stone-50 font-light text-start"
      >
        Name
      </label>
      <input
        id="name"
        type="text"
        className="dark:bg-zinc-900 rounded-[1px] font-light italic dark:text-stone-50  pl-[0.25em] py-[.1em] placeholder:italic placeholder:font-extralight"
        placeholder="Your name"
      />

      <label
        htmlFor="phone"
        className="font-sans dark:text-stone-50 font-light text-start"
      >
        Phone
      </label>
      <input
        id="phone"
        type="text"
        className="dark:bg-zinc-900 rounded-[1px] font-light italic dark:text-stone-50  pl-[0.25em] py-[.1em] placeholder:italic placeholder:font-extralight"
        placeholder="123 456 7890"
      />

      <label
        htmlFor="email"
        className="font-sans dark:text-stone-50 font-light text-start"
      >
        Email
      </label>
      <input
        id="email"
        type="text"
        className="dark:bg-zinc-900 rounded-[1px] font-light italic dark:text-stone-50  pl-[0.25em] py-[.1em] placeholder:italic placeholder:font-extralight"
        placeholder="your@email.com"
      />

      <label
        htmlFor="gearQuantity"
        className="font-sans dark:text-stone-50 font-light text-start"
      >
        How many skis/snowboards?
      </label>
      <input
        id="gearQuantity"
        type="number"
        className="dark:bg-zinc-900 rounded-[1px] font-light italic pl-[0.25em] py-[.1em] placeholder:italic placeholder:font-extralight text-stone-50"
        min={1}
      />

      {/* Wax checkbox */}
      <div className="rounded-md w-max flex items-center gap-2 dark:bg-zinc-900 px-2 py-1 hover:outline hover:outline-[1px] hover:outline-yellow-500">
        <input id="wax" type="checkbox" className="accent-yellow-400" />
        <label
          htmlFor="wax"
          className="font-sans dark:text-stone-50 font-light text-start"
        >
          Wax
        </label>
      </div>

      {/* Edges checkbox */}
      <div className="rounded-md w-max flex items-center gap-2 dark:bg-zinc-900 px-2 py-1 hover:outline hover:outline-[1px] hover:outline-yellow-500">
        <input id="edges" type="checkbox" className="accent-yellow-400" />
        <label
          htmlFor="edges"
          className="font-sans dark:text-stone-50 font-light text-start"
        >
          Edges
        </label>
      </div>

      {/* Message textarea */}
      <label
        htmlFor="message"
        className="font-sans dark:text-stone-50 font-light text-start"
      >
        Message
      </label>
      <textarea
        id="message"
        className="dark:bg-zinc-900 rounded-[1px] font-light italic pl-[0.25em] py-[.1em] placeholder:italic placeholder:font-extralight text-stone-50 "
        placeholder="Anything else to add?"
      />

      <button className="font-sans text-zinc-950 bg-yellow-500 mt-[4em]">
        Send
      </button>
    </form>
  );
}
