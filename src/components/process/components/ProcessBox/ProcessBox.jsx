import { Title } from "../../../Hero/components/Title"

const ProcessBox =({src}) =>{
    return (
        <div>
            <div className="relative">
            <img src="/process/line.svg" className="absolute w-80 h-56" alt=""/>  
            <img src="/process/arrow.svg" className="absolute" alt=""/>  

        <div className="relative flex items-center bg-white p-6 rounded-lg  w-80">
      {/* Left Icon */}
      <div className="absolute -top-6 left-6 w-14 h-14 bg-black flex items-center justify-center rounded-full">
    <img src={src} alt="" />
      </div>

      {/* Content */}
      <div className="ml-10 w-44">
        <h2 className="text-lg font-semibold">{Title}</h2>
        <p className="text-gray-600 text-sm mt-2 font-DM-Sans ">
          The ideation process is a crucial phase in the design process where
          creative thinking and brainstorming happen.
        </p>
      </div>

      {/* Right Arrow */}
      {/* <div className="absolute right-4 text-gray-300 text-2xl">
        ➝
      </div> */}
    </div>
            </div>
        </div>
    )
}

export {ProcessBox}

