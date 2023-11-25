"use client";

import contactMeValidator from "@/utils/contactMeValidator";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import FormError from "../FormError/FormError";

const ContactMeForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    contactNumber: "",
    subject: "",
    message: "",
  });
  const [errorObject, setErrorObject] = useState({
    email: "",
    contactNumber: "",
    subject: "",
  });

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value.trimStart(),
    }));
  };

  const onChangeContactHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (value.length > 10) return;
    const isValidContact = isNumberKey(value) || value === "";
    if (isValidContact)
      setFormData((prevState) => ({
        ...prevState,
        [name]: value.trim(),
      }));
  };

  const isNumberKey = (value: string) => (!!+value ? true : false);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [isNotValid, errors] = contactMeValidator(formData);
    if (isNotValid) {
      setErrorObject(errors);
    } else {
      setErrorObject(errors);
    }
  };

  return (
    <section className="observe-me lg:w-[90%] lg:mx-auto" data-who="contactMe">
      <a id="contactMe" className=""></a>
      <div className="py-8 lg:py-16 px-4 lg:px-0 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-textColor">
          Get in touch
        </h2>
        <p className="mb-8 lg:mb-11 text-center sm:text-xl text-textColorMuted font-semibold">
          Let{"'"}s Connect and Create Amazing Projects Together
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="space-y-8 w-3/4 mx-auto lg:w-full lg:mx-0"
        >
          <div className="relative">
            <label className="block mb-2 text-sm font-medium text-textColor">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Enter Your Contact Email"
            />
            <FormError errorMessage={errorObject.email} />
          </div>
          <div className="relative">
            <label className="block mb-2 text-sm font-medium text-textColor">
              Contact No.
            </label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={onChangeContactHandler}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Number to give a ring"
            />
            <FormError errorMessage={errorObject.contactNumber} />
          </div>
          <div className="relative">
            <label className="block mb-2 text-sm font-medium text-textColor">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={onChangeHandler}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="What's Your Message About?"
            />
            <FormError errorMessage={errorObject.subject} />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-textColor">
              Message
            </label>
            <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={onChangeHandler}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 w-40 text-sm font-medium text-center text-badgeBg rounded-md bg-badgeText lg:w-full hover:bg-primary-800 flex justify-center items-center"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMeForm;
