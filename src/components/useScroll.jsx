import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({  });

  if (view) {
    console.log("startted")
    controls.start("show");
  } else {
    console.log("stopeed")

    controls.start("hidden");
  }

  return [element, controls];
};

