import ButtonSvg from "../assets/svg/ButtonSvg";

export default function Button({
  white,
  children,
  className,
  link,
  px,
  onClick,
}) {
  const classes = ` button relative inline-flex h-11 items-center justify-center transition-colors hover:text-color-1 ${white ? "text-n-8" : "text-n-1"} ${px ? px : "px-7"} ${className || ""}`;
  const renderLink = () => (
    <a href={link} className={classes}>
      <span className="relative z-10">{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className="relative z-10 ">{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  return link ? renderLink() : renderButton();
}
