import { Link } from "react-router-dom";
import "./Breadcrumb.css";

export const Breadcrumb = ({ links }) => {
  return (
    <nav className="breadcrumb">
      {links.map((link, index) => (
        <span key={index}>
          <Link to={link.path}> {link.label}</Link>
        </span>
      ))}
    </nav>
  );
};
