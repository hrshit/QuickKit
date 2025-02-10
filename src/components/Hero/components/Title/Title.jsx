import { motion } from "framer-motion";

const Title = () => {
  /* Title */

  /* Auto layout */
  // display: flex;
  // flex-direction: column;
  // align-items: flex-start;
  // padding: 0px;
  // gap: 32px;

  // position: absolute;
  // width: 836.92px;
  // height: 398px;
  // left: 260px;
  // top: 238px;

  return (
    <div className="w-4xl flex flex-col text-start  gap-8 mt-24">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-6xl text-white-color font-Roboto font-semibold "
      >
        Ready to take your{" "}
        <span className="text-light-green font-Roboto block">
          Business Growth{" "}
        </span>
        to the next level?
      </motion.h1>
      <div className="text-white-color flex gap-1 font-Dans w-md">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa
          libero egestas malesuada viverra gravida libero cursus nulla leo
          pulvinar.
        </motion.p>
      </div>
      <motion.button
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5, repeat: Infinity, repeateType: "reverse" },
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white-color w-[248px] H-[48px] text-black p-[10px] rounded-full  flex gap-1 font-Roboto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
        Start your Free trial
      </motion.button>
    </div>
  );
};

export { Title };
