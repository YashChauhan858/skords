import Image from "next/image";

const FormError = ({ errorMessage }: { errorMessage: string }) => {
  return (
    !!errorMessage && (
      <p className="flex gap-1 items-center text-red-500 absolute text-sm font-medium -bottom-[35%]">
        <Image src={"/error.svg"} alt="error-message" height={20} width={20} />
        {errorMessage}
      </p>
    )
  );
};

export default FormError;
