import {
  Formik,
  Form,
  useField,
  FormikErrors,
  FormikProps,
  FieldHookConfig,
} from "formik";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import InputMask from "react-input-mask";
import type { ClassAttributes, InputHTMLAttributes } from "react";

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
        htmlFor={props.id || props.name}
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
        htmlFor={props.id || props.name}
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

// Checkbox label component
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
        htmlFor={props.id || props.name}
        className="font-sans dark:text-stone-50 font-light text-start block mb-1"
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

const emptyPhoneRegEx = new RegExp("(   )    -    ");

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
  console.log(values.phone);
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
      validate={validateInputs}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="grid gap-y-4 xs:grid-cols-2 px-6 sm:px-10 md:px-14 xl:px-0 xs:gap-x-4 md:gap-x-6 xl:gap-x-8 mt-8 md:text-2xl xl:text-3xl">
          <TextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Your name"
            maxLength={15}
          />

          <PhoneInput
            label="Phone"
            name="phone"
            type="text"
            placeholder="(123) 456-7890"
          />

          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="your@email.com"
          />

          <TextInput
            label="How many skis/snowboards?"
            name="gearQuantity"
            type="number"
            min={1}
            max={99}
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
            disabled={isSubmitting}
            className="font-sans font-medium  py-[0.1em] text-zinc-950 bg-stone-300 hover:bg-yellow-600 mt-[1em] w-2/5 md:w-1/3 place-self-center xs:col-span-2"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
