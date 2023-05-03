import { Formik, Form, useField } from "formik";

interface Values {
  name: string;
  phone: string;
  email: string;
  gearQuantity: number;
  wax?: boolean;
  edges?: boolean;
  repairs?: boolean;
  message?: string;
}

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        htmlFor={props.id || props.name}
        className="font-sans dark:text-stone-50 font-light text-start block mb-1"
      >
        {label}{" "}
      </label>
      <input
        {...field}
        {...props}
        className="dark:bg-zinc-900 rounded-[1px] font-light italic dark:text-stone-50  pl-[0.25em] py-[.1em] placeholder:italic placeholder:font-extralight xs:w-full"
      ></input>
      {meta.touched && meta.error ? <p>{meta.error}</p> : null}
    </div>
  );
};

const CheckToken = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label className="font-sans dark:text-stone-50 font-light text-start px-2 py-1 rounded-md w-max flex dark:bg-zinc-900  hover:outline hover:outline-[1px] hover:outline-yellow-500">
        <input
          type="checkbox"
          {...field}
          {...props}
          className="accent-yellow-400 pl-2 mr-2"
        />
        {children}
      </label>
      {meta.touched && meta.error ? <p>{meta.error}</p> : null}
    </>
  );
};

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="xs:col-span-2">
      <label
        htmlFor={props.id || props.name}
        className="font-sans dark:text-stone-50 font-light text-start block mb-1"
      >
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        className="dark:bg-zinc-900 rounded-sm font-light italic pl-[0.25em] py-[.1em] placeholder:italic placeholder:font-extralight text-stone-50 w-full"
      ></textarea>
      {meta.touched && meta.error ? <p>{meta.error}</p> : null}
    </div>
  );
};

export default function ContactForm() {
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        gearQuantity: 1,
        wax: false,
        edges: false,
        repairs: false,
        message: "",
      }}
      // validate={}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      <Form className="grid gap-y-4 xs:grid-cols-2 px-6 sm:px-10 md:px-16 xl:px-0 xs:gap-x-4 md:gap-x-6 xl:gap-x-8 mt-8 md:text-2xl xl:text-3xl">
        <TextInput
          label="Name"
          name="name"
          type="text"
          placeholder="Your name"
        />

        <TextInput
          label="Phone"
          name="phone"
          type="text"
          placeholder="123 456 7890"
        />

        <TextInput
          label="Email"
          name="email"
          type="text"
          placeholder="your@email.com"
        />

        <TextInput
          label="How many skis/snowboards?"
          name="gearQuantity"
          type="number"
        />

        <div className="flex flex-wrap gap-3 xs:col-span-2 mt-1">
          <CheckToken name="wax">Wax</CheckToken>
          <CheckToken name="edges">Edges</CheckToken>
          <CheckToken name="repairs">Repairs</CheckToken>
        </div>

        <TextArea
          label="Message"
          name="message"
          type="text"
          placeholder="Anything else?"
        />

        <button
          type="submit"
          className="font-sans font-semibold text-zinc-950 bg-yellow-500 hover:bg-yellow-600 mt-[1em] w-1/2 place-self-center xs:col-span-2"
        >
          Send
        </button>
      </Form>
    </Formik>
  );
}
