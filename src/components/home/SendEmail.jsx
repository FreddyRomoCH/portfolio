import { useId, useRef, useEffect, useState } from "react";

export function SendEmail({ onClickOpenMenu }) {
  const emailRef = useRef();
  const inputId = useId();
  const copyIcon = "/images/copy.png";
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  useEffect(() => {
    let copiedText;

    if (isEmailCopied) {
      copiedText = setTimeout(() => {
        setIsEmailCopied(false);
        onClickOpenMenu();
      }, 1500);
    }

    return () => {
      clearTimeout(copiedText);
    };
  }, [isEmailCopied]);

  const handleCopyEmail = async () => {
    if (emailRef.current) {
      try {
        await navigator.clipboard.writeText(emailRef.current.value);
        setIsEmailCopied(true);
      } catch (error) {
        console.error("Error copying email", error);
        setIsEmailCopied(false);
      }
    }
  };

  return (
    <div className="absolute flex flex-col justify-between items-start gap-1 top-0 bg-primary500 text-secondary900 font-thin font-inter text-base p-2 w-full md:w-auto z-20 transition-all duration-500 ease-linear left-0 md:group-hover:left-full invisible group-hover:visible opacity-0 group-hover:opacity-100">
      <label
        htmlFor={inputId}
        className={`text-base font-typewriter font-medium ${
          isEmailCopied &&
          "after:content-['Copied'] after:absolute after:right-1 after:bg-secondary900 after:text-neutral50 after:font-thin after:text-xs after:rounded-md after:p-1"
        }`}
      >
        Send me an Email
      </label>
      <div className="flex flex-row justify-between items-center w-full md:w-auto gap-2">
        <input
          ref={emailRef}
          type="text"
          name={inputId}
          defaultValue="fredyromochavez@gmail.com"
          className="px-3 py-1 rounded-md w-full md:w-64"
        />
        <picture>
          <img
            className="copy w-6 h-6 cursor-pointer"
            src={copyIcon}
            alt="Copy"
            onClick={handleCopyEmail}
          />
        </picture>
      </div>
    </div>
  );
}
