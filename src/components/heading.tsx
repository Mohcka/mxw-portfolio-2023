import clsx from "clsx";
import React from "react";

const Heading: React.FC<
  React.PropsWithChildren<React.ComponentProps<"h2">>
> = ({ children, className, ...props }) => {
  return (
    <h2
      className={clsx(
        "text-center text-3xl font-bold mb-10 sm:mb-24 mt-5 sm:mt-10",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
