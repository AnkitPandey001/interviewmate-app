import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="text-xl font-bold text-neutral-800 tracking-tight">
        InterviewMate
      </span>
    </Link>
  );
};
