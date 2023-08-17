import {
  forwardRef,
  type ComponentProps,
  type ForwardRefExoticComponent,
  type RefAttributes,
  type DetailedHTMLProps,
  type HTMLAttributes,
} from "react";
import clsx from "clsx";

const OuterContainer = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  function OuterContainer({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={clsx("sm:px-8", className)} {...props}>
        <div className="mx-auto w-full max-w-7xl lg:px-8">{children}</div>
      </div>
    );
  }
);

const InnerContainer = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  function InnerContainer({ className, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={clsx("relative px-4 sm:px-8 lg:px-12", className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    );
  }
);

interface ForwardedContainer
  extends ForwardRefExoticComponent<
    Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      "ref"
    > &
      RefAttributes<HTMLDivElement>
  > {
  Outer: typeof OuterContainer;
  Inner: typeof InnerContainer;
}

export const Container = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  function Container({ children, ...props }, ref) {
    return (
      <OuterContainer ref={ref as any} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    );
  }
) as ForwardedContainer;

export default function Bontainer() {
  return (
    <Container>
      <div></div>
    </Container>
  );
}

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;
