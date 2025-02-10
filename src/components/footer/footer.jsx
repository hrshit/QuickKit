import { Container } from "../Container";

const Footer = () => {
  return (
    <div className="flex justify-center bg-dark ">
      <Container>
        <div className="flex flex-col p-10 gap-10">
          <div className="grid grid-cols-6 gap-10">
            <div className="flex flex-col col-span-2  gap-9">
              <img
                src="/logo.svg"
                className="w-[154px] h-[33.97px]"
                alt="Quickit Logo"
              />
              <p className="text-white">
                We’re a team of strategic creator and digital innovator, united
                focus in our pursuit of mastery and joyful.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-white font-semibold text-xl font-Roboto">
                Pages
              </h1>
              <p className="text-white  text-sm ">Pages</p>
              <p className="text-white  text-sm ">Home 2</p>
              <p className="text-white  text-sm ">About</p>
              <p className="text-white  text-sm ">Contact us</p>
              <p className="text-white  text-sm ">Portfolio</p>
              <p className="text-white  text-sm ">Portfolio Single</p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-white font-semibold text-xl font-Roboto">
                Utility Pages
              </h1>
              <p className="text-white  text-sm">Style Guide</p>
              <p className="text-white  text-sm ">Instruction</p>
              <p className="text-white  text-sm ">License</p>
              <p className="text-white  text-sm ">Changelog</p>
              <p className="text-white  text-sm ">Error 404</p>
              <p className="text-white  text-sm ">Password Protected</p>
            </div>
            <div className="relative flex flex-col gap-4 col-span-2">
              <h1 className="text-white font-semibold text-xl font-Roboto">
                Subscribe
              </h1>
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Enter text..."
                  className="w-full border border-gray-300 rounded-lg py-2 pr-12 bg-white pl-4 focus:ring-2 rounded-full focus:dark focus:outline-none"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-dark text-white px-3 py-1 rounded-full hover:grey ">
                  subscribe
                </button>
              </div>
            </div>
                  </div>
          <br className="bg:white" />
          <div className="grid grid-cols-4 gap-14"></div>
        </div>
      </Container>
    </div>
  );
};

export { Footer };

/* About */

// width: 48px;
// height: 21px;

// /* Body/RG-16 */
// font-family: 'DM Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 21px;
// /* identical to box height */
// letter-spacing: 0.03em;

// /* Light Grey */
// color: #F4F4F4;


// /* Inside auto layout */
// flex: none;
// order: 2;
// flex-grow: 0;
