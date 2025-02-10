import { Header } from "../Header"
import { Title } from "./components/Title";
import { BrandsLabel } from "./components/BrandsLabel";
import { Container } from "../Container";
import { motion } from "framer-motion";

const Hero = () => {
    return (
      <div className="bg-dark h-auto px-1 py-4 flex justify-center">
        <Container>
          <Header />
          <Title />
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 1, delay: .5, ease: "easeOut" }}
            src="/Hero.svg"
            className="absolute w-[850px] h-[850px] top-[19px] left-[850px]"
            alt=""
          />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 1, delay: .3, ease: "easeOut" }}
            className="mt-40"
          >
            <BrandsLabel />
          </motion.div>
        </Container>
      </div>
    );
}


export {
    Hero
}


