import { Container } from "../Container";
import { ProcessBox } from "./components/ProcessCard/ProcessCard";
import { easeOut, motion } from "framer-motion";
const Process = () => {
  const container = {
    hidden: { opacity: 0 }, // Keep container visible
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.3, // Base stagger effect (optional)
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 1,
      transition: {
        duration: 0.5,
        ease: easeOut, // Progressively increase delay
      },
    },
  };
  return (
    <div className="my-5 flex justify-center">
      <Container>
        <motion.div
          className="flex flex-col w-xl self-center gap-6 mb-10"
          initial={{ opacity: 0 }} // Initial state for the whole container
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }} // Final state for the whole container
          transition={{
            // Transition for the container itself
            duration: 0.8, // Overall duration of the container's fade-in (adjust as needed)
            staggerChildren: 0.2, // Stagger delay for children elements
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl text-light-green font-Roboto font-semibold mt-14px text-center"
          >
            Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl text-dark font-Roboto font-semibold text-center "
          >
            Process that moves
            <br />
            things forward
          </motion.h2>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-4 gap-6 mb-10"
        >
          <motion.div variants={item}>
            <ProcessBox
              title={"Ideate"}
              src={"/process/ideate.svg"}
              desc={
                "The Identification process is crucial phase in the design process where creative thinking and brainstorming"
              }
            />
          </motion.div>
          <motion.div variants={item}>
            <ProcessBox
              title={"Research"}
              src={"/process/research.svg"}
              desc={
                "Research is the critical component of the design process, helping designers understand the problem"
              }
            />
          </motion.div>
          <motion.div variants={item}>
            <ProcessBox
              title={"Create"}
              src={"/process/create.svg"}
              desc={
                "Designing a process involves several key steps to ensure clarity, efficiency, successful implementation"
              }
            />
          </motion.div>
          <motion.div variants={item}>
            <ProcessBox
              title={"Testing"}
              src={"/process/testing.svg"}
              desc={
                "Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements"
              }
            />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export { Process };
