import { Container } from "../Container"

const footer = () => {
    return (
      <div className="flex justify-center ">
        <Container>
          <div className="flex p-10 gap-10">
            <div className="flex flex-col gap-8">
              <div>
                <img
                  src="/logo.svg"
                  className="w-[154px] h-[33.97px]"
                  alt="Quickit Logo"
                />
              </div>
            </div>
            <div></div>
          </div>
        </Container>
      </div>
    );
}

export {
    footer
}