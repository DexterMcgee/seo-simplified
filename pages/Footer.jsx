import Image from "next/image";
import { ArrowUpCircle } from "react-bootstrap-icons";
import github from "../public/img/github.svg";
import email from "../public/img/email.svg";
import folder from "../public/img/folder.svg";

export default function Footer() {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="footer" id="footer">
        <div>
          <p className="last">
            <small>Author:&nbsp;Victor Oloyede</small>
          </p>
        </div>
        <div className="outbound">
          <a
            href="https://personal-portfolio-psi-seven.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={folder} width={40} height={40} />
          </a>
          &ensp;
          <a href="mailto:victorzemail@gmail.com">
            <Image src={email} width={40} height={40} />
          </a>
          &ensp;
          <a
            href="https://github.com/DexterMcgee"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={github} width={40} height={40} />
          </a>
        </div>
        <ArrowUpCircle size={55} className="clickme" onClick={toTop} />
      </div>
    </div>
  );
}
