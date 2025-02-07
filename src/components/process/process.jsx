import { Container } from "../Container";
import { ProcessBox } from "./components/ProcessCard/ProcessCard";

const Process = () => {
    return (
      <div className="my-5 flex justify-center">
        <Container>
          <div className="flex  flex-col w-xl self-center gap-6 mb-10">
            <p className="text-xl text-light-green font-Roboto font-semibold mt-14px text-center">
              Process
            </p>
            <h2 className="text-5xl text-dark font-Roboto font-semibold text-center ">
              Process that moves
              <br />
              things forward
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-6 mb-10">
            <ProcessBox
              title={"Ideate"}
              src={"/process/ideate.svg"}
              desc={
                "The Identification process is crucial phase in the design process where creative thinking and brainstorming"
              }
            />
            <ProcessBox
              title={"Research"}
              src={"/process/research.svg"}
              desc={
                "Research is the critical component of the design process, helping designers understand the problem"
              }
            />
            <ProcessBox
              title={"Create"}
              src={"/process/create.svg"}
              desc={
                "Designing a process involves several key steps to ensure clarity, efficiency, successful implementation"
              }
            />
            <ProcessBox
              title={"Testing"}
              src={"/process/testing.svg"}
              desc={
                "Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements"
              }
            />
          </div>
        </Container>
      </div>
    );
}

export {
    Process
}