import { motion } from "framer-motion";

const Slider = () => {
  const fadeInRightVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };

  const fadeInLeftVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  };

  return (
        <div className="p-5 m-5">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInRightVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="spacer-10"></div>
            <div className="h1 ">
              Help to improve focus
              <br />
              for more
            </div>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
            <div className="spacer-20"></div>

            <div className="mb-sm-30"></div>
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInLeftVariants}
            transition={{ duration: 0.5 }}
            className=" text-center"
          >
          </motion.div>
      </div>
  );
};

export default Slider;