import { useId, useRef, useEffect, useState } from "react";

export function SendEmail() {
  const emailRef = useRef();
  const inputId = useId();
  const copyIcon = "/images/copy.png";
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  useEffect(() => {
    let copiedText;

    if (isEmailCopied) {
      copiedText = setTimeout(() => {
        setIsEmailCopied(false);
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
    <div className="absolute flex flex-col justify-center items-start gap-1 top-0 bg-primary500 text-secondary900 font-thin font-inter text-base p-1 w-full md:w-full h-full z-20 left-0">
      <label
        htmlFor={inputId}
        className={`text-xs font-typewriter font-medium after:content-['Copied'] after:absolute after:top-0 after:right-0 after:bg-secondary900 after:text-neutral50 after:font-thin after:text-xs after:rounded-md after:p-2 after:transition-transform after:duration-[1.5s] after:ease-in ${
          !isEmailCopied
            ? "after:translate-y-0 after:opacity-0"
            : "after:-translate-y-4 after:opacity-100"
        }`}
      >
        Send me an Email
      </label>
      <div className="relative flex flex-row justify-between items-center w-full gap-1">
        <input
          ref={emailRef}
          type="text"
          name={inputId}
          defaultValue="fredyromochavez@gmail.com"
          className="px-3 py-1 rounded-md w-full text-sm font-thin"
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
