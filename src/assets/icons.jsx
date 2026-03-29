import { DiVisualstudio } from "react-icons/di";
import { FaJava, FaReact, FaGitAlt, FaLinux} from "react-icons/fa";
import { SiSpringboot, SiOracle, SiPostman, SiSwagger } from "react-icons/si";

export const techIcons = {
  java: () => <FaJava color="#fca311" size={40} />,
  "spring boot": () => <SiSpringboot color="#00e676" size={40} />,
  oracle: () => <SiOracle color="#ff6b6b" size={40} />,
  react: () => <FaReact color="#00e5ff" size={40} />,
  git: () => <FaGitAlt color="#ff8c00" size={40} />,
  linux: () => <FaLinux color="#f6c400" size={40} />,
  postman: () => <SiPostman color="#ff8c00" size={40} />,
  swagger:() => <SiSwagger color="#00e676" size={40}/>
};