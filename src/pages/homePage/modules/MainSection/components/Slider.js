import { motion } from "framer-motion";
import CustomButton from "../../../../../common/CustomButton";

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
            className="text-white"
          >
           <div className='my-2 mb-3 text-uppercase spacing'>Khawaja Yanni</div>
            <div className="font-50 display-font">
             The new
              <br />
            era of luxury
            </div>
            <p className="lead mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ut labore.
            </p>
           <div className='my-4 mb-3 '>
            <CustomButton title='Book reservation now' isArrow={true} classname='w-lg-50 w-100' />
           </div>

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