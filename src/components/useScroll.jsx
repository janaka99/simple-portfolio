import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = (thresh = 0.2) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: thresh });

  if (view) {
    console.log("startted")
    controls.start("show");
  } else {
    console.log("stopeed")

    controls.start("hidden");
  }

  return [element, controls];
};

