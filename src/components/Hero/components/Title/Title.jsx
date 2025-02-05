const Title = () => {
    return (
      <div className="m-10 w-[609px] flex flex-col gap-10 ">
        <button className="bg-white-color w-[248px] H-[48px] text-black p-[10px] rounded-full  flex gap-1">
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
        </button>
        <div className="text-white-color flex gap-1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa
            libero egestas malesuada viverra gravida libero cursus nulla leo
            pulvinar.
          </p>
        </div>
        <div className="text-4xl text-white-color ">
          Ready to take your{" "}
          <span className="text-light-green">Business Growth </span> to the next
          level?
        </div>
      </div>
    );
}

export { Title }