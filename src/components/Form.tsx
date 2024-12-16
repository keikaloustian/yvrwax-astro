import { Formik, Form, useField, FormikErrors, FieldHookConfig } from "formik";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import InputMask from "react-input-mask";
import Spinner from "./Spinner";

import {
  useState,
  type ClassAttributes,
  type InputHTMLAttributes,
} from "react";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  gearQuantity: number;
  wax?: boolean;
  edges?: boolean;
  repairs?: boolean;
  message?: string;
}

interface LabelProp {
  label?: string;
}

type InputProps = LabelProp &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLTextAreaElement> &
  ClassAttributes<HTMLTextAreaElement> &
  FieldHookConfig<string>;

const ErrorMessageP = ({ message }: { message: string }) => {
  return (
    <p className="form-error md:text-lg">
      <ExclamationTriangleIcon className="h-4 w-4 md:h-5 md:w-5 inline-block mr-1" />
      {message}
    </p>
  );
};

// Text (or numbers) input component
const TextInput = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        htmlFor={props.id}
        className="font-sans dark:text-stone-50 dark:font-light text-start block mb-1 after:content-['*'] after:text-yellow-600 after:inline-block"
      >
        {label}{" "}
      </label>
      <input
        {...field}
        {...props}
        className="dark:bg-zinc-900 rounded-[1px] font-light italic dark:text-stone-50  pl-[0.25em] py-[.1em] placeholder:italic placeholder:dark:font-extralight xs:w-full "
      ></input>
      {meta.touched && meta.error ? (
        <ErrorMessageP message={meta.error} />
      ) : null}
    </div>
  );
};

// Masked phone number input component
const PhoneInput = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        htmlFor={props.id}
        className="font-sans dark:text-stone-50 dark:font-light text-start block mb-1 after:content-['*'] after:text-yellow-600 after:inline-block"
      >
        {label}{" "}
      </label>
      <InputMask
        mask={"(999) 999-9999"}
        maskChar={" "}
        {...field}
        {...props}
        className="dark:bg-zinc-900 rounded-[1px] font-light italic dark:text-stone-50  pl-[0.25em] py-[.1em] placeholder:italic placeholder:dark:font-extralight xs:w-full "
      ></InputMask>
      {meta.touched && meta.error ? (
        <ErrorMessageP message={meta.error} />
      ) : null}
    </div>
  );
};

// Checkbox + label component
const CheckToken = ({ children, ...props }: InputProps) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label className="font-sans dark:text-stone-50 font-light text-start px-2 py-1 rounded-md w-max flex dark:bg-zinc-900 bg-white hover:outline hover:outline-[1px] hover:outline-yellow-500">
        <input
          type="checkbox"
          {...field}
          {...props}
          className="accent-yellow-400 pl-2 mr-2"
        />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <p className="form-error">{meta.error}</p>
      ) : null}
    </>
  );
};

// Textarea component
const TextArea = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props);
  return (
    <div className="xs:col-span-2">
      <label
        htmlFor={props.id}
        className="font-sans dark:text-stone-50 dark:font-light text-start block mb-1"
      >
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        className="dark:bg-zinc-900 rounded-sm font-light italic pl-[0.25em] py-[.1em] placeholder:italic placeholder:font-extralight dark:text-stone-50 w-full"
      ></textarea>
      {meta.touched && meta.error ? (
        <p className="form-error">{meta.error}</p>
      ) : null}
    </div>
  );
};

// Validation function
const validateInputs = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {};

  // Name validation
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 2) {
    errors.name = "Name must be 2 to 15 characters";
  }

  // Phone validation
  // console.log(values.phone);
  if (!values.phone || values.phone === "(   )    -    ") {
    errors.phone = "Required";
  } else if (!/^\(\d{3}\)\s\d{3}-\d{4}/.test(values.phone)) {
    errors.phone = "Phone number must be 10 digits";
  }

  // Email validation
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  // Gear quantity validation
  if (!values.gearQuantity) {
    errors.gearQuantity = "Required";
  } else if (values.gearQuantity < 1 || values.gearQuantity > 99) {
    errors.gearQuantity = "Value must be between 1 and 99";
  }

  return errors;
};

export default function ContactForm() {
  const [submissionResult, setSubmissionResult] = useState({
    error: false,
    message: "",
  });

//   return (
//     <Formik
//       initialValues={{
//         name: "",
//         phone: "",
//         email: "",
//         gearQuantity: 1,
//         wax: false,
//         edges: false,
//         repairs: false,
//         message: "",
//       }}
//       validate={validateInputs}
//       onSubmit={(values, { setSubmitting }) => {
//         const formData = {
//           ...values,
//           access_key: import.meta.env.PUBLIC_WEB3FORMS,
//         };
//         const payload = JSON.stringify(formData);

//         // Create new XMLHttpRequest object isntance
//         const xhr = new XMLHttpRequest();

//         // Define request options
//         xhr.open("POST", import.meta.env.PUBLIC_EMAIL!, true);
//         xhr.setRequestHeader("Content-type", "application/json");

//         // Define callback to handle response / errors
//         xhr.onreadystatechange = function () {
//           if (xhr.readyState === XMLHttpRequest.DONE) {
//             setSubmitting(false);
//             if (xhr.status === 200) {
//               // SUCCESS
//               setSubmissionResult({
//                 error: false,
//                 message: "Thank you. We'll be in touch shortly.",
//               });
//             } else if (xhr.status >= 400) {
//               // FAILURE
//               console.error(
//                 `An error occurred while sending your message. Status: ${xhr.status}`
//               );
//               setSubmissionResult({
//                 error: true,
//                 message: "Error - please try again later.",
//               });
//             }
//           }
//         };
//         // Send request
//         xhr.send(payload);
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form className="grid gap-y-4 xm:gap-y-5 xs:grid-cols-2 px-6 sm:px-10 md:px-14 xl:px-0 xs:gap-x-4 md:gap-x-6 xl:gap-x-8 mt-8 md:text-2xl xl:text-3xl">
//           <TextInput
//             label="Name"
//             name="name"
//             id="name"
//             type="text"
//             autoComplete="name"
//             placeholder="Your name"
//             maxLength={15}
//           />
//           <PhoneInput
//             label="Phone"
//             name="phone"
//             id="phone"
//             type="text"
//             autoComplete="tel-national"
//             placeholder="123 456 7890"
//           />
//           <TextInput
//             label="Email"
//             name="email"
//             id="email"
//             type="email"
//             autoComplete="email"
//             placeholder="your@email.com"
//           />
//           <TextInput
//             label="How many skis/snowboards?"
//             name="gearQuantity"
//             id="gearQuantity"
//             type="number"
//             min={1}
//             max={99}
//           />
//           <div className="flex flex-wrap gap-3 xs:col-span-2 mt-1">
//             <CheckToken name="wax">Wax</CheckToken>
//             <CheckToken name="edges">Edges</CheckToken>
//             <CheckToken name="repairs">Repairs</CheckToken>
//           </div>
//           <TextArea
//             label="Message"
//             name="message"
//             id="message"
//             type="text"
//             placeholder="Anything else?"
//           />

//           {/* Honeypot for spam prevention */}
//           <input type="checkbox" name="botcheck" className="hidden"></input>

//           {/* If form hasn't been submitted, display button */}
//           {!submissionResult.message && (
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`font-sans font-medium py-[0.1em]  mt-[1em] w-2/5 md:w-1/3 place-self-center xs:col-span-2 pb-1 xl:pb-2 text-md sm:text-lg md:text-2xl ${
//                 isSubmitting
//                   ? "bg-stone-400 text-stone-800"
//                   : "text-zinc-950 bg-yellow-600 hover:bg-yellow-500 dark:bg-yellow-600 dark:hover:bg-yellow-500"
//               }`}
//             >
//               {isSubmitting ? <Spinner /> : "Submit"}
//             </button>
//           )}

//           {/* If submitted and error, display button and message */}
//           {submissionResult.message && submissionResult.error ? (
//             <>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`font-sans font-medium py-[0.1em]  mt-[1em] w-2/5 md:w-1/3 place-self-center xs:col-span-2 pb-1 xl:pb-2 text-md sm:text-lg md:text-2xl ${
//                   isSubmitting
//                     ? "bg-stone-400 text-stone-800"
//                     : "text-zinc-950 bg-yellow-600 hover:bg-yellow-500"
//                 }`}
//               >
//                 {isSubmitting ? <Spinner /> : "Submit"}
//               </button>
//               <p className="dark:text-stone-300 font-sans dark:font-light mt-[0.5em] underline decoration-yellow-500 underline-offset-2 text-md xs:text-lg lg:text-2xl xs:col-span-2 text-center">
//                 {submissionResult.message}
//               </p>
//             </>
//           ) : (
//             // If successful, display just message
//             <p className="text-zinc-900 bg-stone-200 max-w-max rounded-[2px] font-sans mt-[0.5em] text-md xs:text-lg lg:text-2xl xs:col-span-2 justify-self-center px-2 underline decoration-yellow-400 underline-offset-2 decoration-2">
//               {submissionResult.message}
//             </p>
//           )}
//         </Form>
//       )}
//     </Formik>
//   );
// }

