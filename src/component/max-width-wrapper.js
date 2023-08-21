
export default function MaxWidthWrapper({
  className,
  children,
}) {
  return (
    <div
      className={
        "mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 " +
        className
      }
    >
      {children}
    </div>
  );
}
