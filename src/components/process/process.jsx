import { Container } from "../Container";
import { ProcessBox } from "./components/processbox/processbox";

const Process = () => {
    return (
            <div className="my-5 flex justify-center">
                <Container>
                    <div className="flex  flex-col w-xl self-center gap-6 mb-10">
                        <p className="text-xl text-light-green font-Roboto font-semibold mt-14px text-center">Process</p>
                        <h2 className="text-5xl text-dark font-Roboto font-semibold text-center ">
                            Process that  moves
                            <br />
                            things forward
                        </h2>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mb-10">
                        <ProcessBox/>            
                        <ProcessBox/>            
                        <ProcessBox/>            
                        <ProcessBox/>            
                    </div>
                </Container>

            </div>
    )
}

export {
    Process
}