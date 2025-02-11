import { motion } from "framer-motion";


const  Box = ({ title, desc, src }) => {
  return (
    <div className="flex flex-col w-[400px]  h-auto gap-16 p-11 rounded-2xl bg-grey">
      <div>
        <img src={src} className="h-20 w-20" alt="" />
      </div>
      <div className="w-80 h-32 flex flex-col gap-5">
        <motion.h3  className="font-Roboto font-semibold text-2xl leading-7">
          {title}
        </motion.h3>
        <motion.p className="font-DM-Sans font-normal text-lg leading-6"> {desc}</motion.p>
      </div>
    </div>
  );
};

const ServiceBox = motion(Box);

export { ServiceBox };
