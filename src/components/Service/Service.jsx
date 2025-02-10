
import { Container } from "../Container";
import { ServiceBox } from "./Components/ServiceBox/ServiceBox";
import { motion } from "framer-motion";

const Service = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      //   transition: { when: "afterChildren", staggerChildren: 0.5 },
      transition: {
        // when: "afterChildren",
        duration: 1,
        delayChildren: 2,
        staggerChildren: 1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      transition: { duration: 2 },
    },
    show: { opacity: 1,  transition: { duration: 2 } },
  };
 
  return (
    <div className="my-5 flex justify-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", staggerChildren: 1 }}
          className="flex  flex-col w-xl self-center gap-6 mb-10"
        >
          <motion.p className="text-xl text-light-green font-Roboto font-semibold mt-14px text-center">
            Our Service
          </motion.p>
          <motion.h2 className="text-5xl text-dark font-Roboto font-semibold text-center ">
            High-impact services
            <br />
            for your business
          </motion.h2>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mb-10"
        >
          <ServiceBox
            variants={item}
            title={"Content Marketing"}
            src={"/serviceIcon/contentMarketing.svg"}
            desc={
              "Our team creates engaging and shareable content that resonates with your audience, drives organic traffic"
            }
          />
          <ServiceBox
            variants={item}
            title={"Graphic Design "}
            src={"/serviceIcon/graphic.svg"}
            desc={
              "Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate."
            }
          />
          <ServiceBox
            variants={item}
            title={"Digital Marketing "}
            src={"/serviceIcon/DigitalMarketing.svg"}
            desc={
              "Elevate your brand's online presence with our data-driven digital marketing strategies. From SEO and content marketing"
            }
          />
        </motion.div>
        <motion.div className="grid grid-cols-3 gap-4 mb-10">
          <ServiceBox
            title={"Web design"}
            src={"/serviceIcon/webDesign.svg"}
            desc={
              "We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional."
            }
          />
          <ServiceBox
            title={"IT Consulting"}
            src={"/serviceIcon/ItConsult.svg"}
            desc={
              "IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services"
            }
          />
          <ServiceBox
            title={"Brand Identity "}
            src={"/serviceIcon/brandIdentification.svg"}
            desc={
              "It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience."
            }
          />
        </motion.div>
      </Container>
    </div>
  );
};

export { Service };
