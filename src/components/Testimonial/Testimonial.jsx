import { Container } from "../Container";
import { easeOut, motion } from "framer-motion";

const Testimonial = () => {
  const container = {
    hidden: { opacity: 1 }, // Keep container visible
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.5, // Base stagger effect (optional)
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 1,
      transition: {
        duration: 0.1,
        ease: easeOut,
        // Progressively increase delay
      },
    },
  };
  return (
    <div className="flex justify-center mb-20">
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-9 bg-light-grey p-6 rounded-3xl"
        >
          <motion.img
            variants={item}
            src="/testimonial/user.svg"
            className=""
            alt=""
          />
          <motion.h1
            variants={item}
            className="font-Roboto text-2xl font-extrabold text-center"
          >
            “Be genuine in your assessment, and provide constructive feedback to
            benefit both potential customers and the company providing the
            product or service.”
          </motion.h1>
          <div className="flex flex-col items-center">
            <motion.h1
              variants={item}
              className="font-Roboto font-bold text-xl"
            >
              Jacqueline Miller
            </motion.h1>
            <motion.p variants={item}>CEO of an edupart</motion.p>

            <motion.img
              variants={item}
              src="/testimonial/direction.svg"
              className="mt-5"
              alt=""
            />
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export { Testimonial };
