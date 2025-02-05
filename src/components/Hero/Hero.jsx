import { Header } from "../Header"
import { Title } from "./components/Title";

const Hero = () => {
    return (
      <div className="bg-dark px-18 py-5">
        {/* <img src="/Hero.svg" alt="" /> */}
            <Header />
            <Title/>
      </div>
    );
}

export {
    Hero
}