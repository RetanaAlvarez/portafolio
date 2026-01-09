import { FaJava, FaReact, FaGitAlt, FaLinux} from "react-icons/fa";
import { SiSpringboot, SiOracle, SiPostman } from "react-icons/si";

export const techIcons = {
  Java: () => <FaJava color="#fca311" size={40} />,
  "Spring Boot": () => <SiSpringboot color="#00e676" size={40} />,
  Oracle: () => <SiOracle color="#ff6b6b" size={40} />,
  React: () => <FaReact color="#00e5ff" size={40} />,
  Git: () => <FaGitAlt color="#ff8c00" size={40} />,
  Linux: () => <FaLinux color="#f6c400" size={40} />,
  Postman: () => <SiPostman color="#ff8c00" size={40} />
};
