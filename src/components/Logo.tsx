import logo from "../assets/logo.png";

const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return <img src={logo} alt="Logo" className={className} />;
};

export default Logo;
