interface IContactFormValidator {
  email: string;
  contactNumber: string;
  subject: string;
}

export const contactMeValidator = (
  formData: IContactFormValidator
): [boolean, IContactFormValidator] => {
  const errorObject = {
    email: "",
    contactNumber: "",
    subject: "",
  };
  if (formData.email === "") {
    errorObject.email = "Please add a valid email address";
  }
  if (formData.contactNumber.length < 10 || formData.contactNumber === "") {
    errorObject.contactNumber = "Please add a valid contact address";
  }
  if (formData.subject === "") {
    errorObject.subject = "Please add a subject to discuss";
  }
  if (Object.values(errorObject).some((e) => e !== "")) {
    return [true, errorObject];
  }
  return [false, errorObject];
};

export const isNumberKey = (value: string) => (!!+value ? true : false);
