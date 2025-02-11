import { Container } from "../Container";
import { motion } from "framer-motion"


const About = () => {
       
  const imageParent = {
    hidden: { opacity: 0 }, // Keep container visible
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1 ,
        staggerChildren: 0.5, // Base stagger effect (optional)
      },
    },
  };
  
  const imageChild = {
    hidden: { opacity: 0, x : -100 , },
    show: {
      opacity: 1,
      x: 1,
      transition: {
        duration: 0.2, // Progressively increase delay
      },
    },
  };

  const container = {
    hidden : {opacity : 0},
    show : {
      opacity : 1,
      transition : {
        delayChildren : .3,
        staggerChildren : .5
      }
    }
  }

   const Item = {
    hidden : {
      opacity : 0 ,
      y : 50
    },
    show : {
      opacity :1,
      y: 1,
      transition : {
        duration : 0.3
      }
    }
   }


  

        return (
            <div className="flex justify-center my-5 bg-dark pt-24">
                <Container>
                    <div className="flex flex-row gap-56">

                    <motion.div variants={imageParent} 
                           initial="hidden"
                           whileInView="show"
                           viewport={{ once: true }} className="relative h-[744px] w-[703px]">
                      <motion.div variants={imageChild}>
                            <img  src="/about/third.svg"  className="absolute top-8 left-16 h-auto w-xl" alt="" />
                      </motion.div>
                      <motion.div variants={imageChild}>
                            <img src="/about/second.svg"  className="absolute top-14 left-22 h-auto w-xl" alt="" />
                      </motion.div>
                      <motion.div variants={imageChild} >
                            <img src="/about/first.svg"  className="absolute top-20 left-28 h-auto w-xl" alt="" />
                      </motion.div>
                    </motion.div>
                    <motion.div variants={container} 
                           initial="hidden"
                           whileInView="show"
                           viewport={{ once: true }} 
                           className="flex flex-col gap-10 mt-7"
                    >                      
                        <motion.h5 variants={Item} className="text-3xl text-light-green">About us</motion.h5>
                        <motion.h1  variants ={Item} className="text-6xl text-white leading-16 font-Roboto">The Core Mission <br /> behind all your <br /> work</motion.h1>
                        <motion.p variants ={Item} className="font-DM-Sans font-normal text-white-color">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.
                        </motion.p>
                        <motion.div variants={Item} className="flex gap-14">
                            <div>
                                <h1 className="text-5xl font-Roboto text-light-green font-semibold leading-10">330+</h1>
                                <p className="font-DM-Sans text-base text-white-color">Companies helped</p>
                            </div>
                            <div>
                                <h1 className="text-5xl font-Roboto text-light-green font-semibold leading-10">230 +</h1>
                                <p className="font-DM-Sans text-base text-white-color">Revenue generated</p>
                            </div>
                        </motion.div>
                        <motion.button variants={Item} className="bg-white-color w-[248px] H-[48px] text-black p-[10px] rounded-full  flex gap-1 font-Roboto">
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
                    </motion.div>
                  </div>
        </Container>
        </div>
        )
}

export {
    About
}