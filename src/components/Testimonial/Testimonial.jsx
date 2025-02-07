import { Container } from "../Container"

export { Container} from "../Container"

const Testimonial = () => {
    return (
      <div className="flex justify-center mb-20">
        <Container>
          <div className="flex flex-col items-center gap-9 bg-light-grey p-6 rounded-3xl">
            <img src="/testimonial/user.svg" className="" alt="" />
            <h1 className="font-Roboto text-2xl font-extrabold text-center">
              “Be genuine in your assessment, and provide constructive feedback
              to benefit both potential customers and the company providing the
              product or service.”
            </h1>
            <div className="flex flex-col items-center">
              <h1 className="font-Roboto font-bold text-xl">
                Jacqueline Miller
              </h1>
             <p>CEO of an edupart</p>
            
                <img src="/testimonial/direction.svg" className="mt-5" alt="" />               
                        
            </div>
          </div>
        </Container>
      </div>
    );
}

export {
   Testimonial
}



