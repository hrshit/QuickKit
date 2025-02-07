import { Header } from "../Header"
import { Title } from "./components/Title";
import { BrandsLabel } from "./components/BrandsLabel";
import { Container } from "../Container";

const Hero = () => {
    return (
      <div className="bg-dark h-auto px-1 py-4 flex justify-center">
            <Container>
                <Header />
                  <Title/>
                  <img src="/Hero.svg" className="absolute w-[850px] h-[850px] top-[19px] left-[650px]" alt="" />
                <div className="mt-40">
                  <BrandsLabel/>
                </div>
            </Container>
      </div>
    );
}


export {
    Hero
}


