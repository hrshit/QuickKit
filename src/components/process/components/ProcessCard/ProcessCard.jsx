
const ProcessBox =({src, title, desc}) => {
    return (
      <div className="my-8 relative w-82 h-54  flex gap-2">
        <img
          src="/process/line.svg"
          className="absolute w-72 h-auto top-8"
          alt="line"
        />
        <img
          src="/process/arrow.svg"
          className="absolute top-31 left-70"
          alt="arrow"
        />

        <h1 className="absolute top-4 left-40 font-Roboto text-3xl font-semibold w-8 ">
          {title}
        </h1>

        <img
          src={src}
          className="absolute w-16 h-16 top-0 left-16"
          alt=""
        />
        <div className="absolute top-20 left-10 font-DM-Sans font-normal text-base leading-5 w-50">
          {desc}
        </div>
      </div>
    );
}

export {ProcessBox}

/* Research is a critical component of the design process, helping designers understand the problem */

// width: 199px;
// height: 105px;

/* Body/RG-16 */
// font-family: 'DM Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 21px;
// letter-spacing: 0.03em;

/* Light Black */
// color: rgba(12, 12, 12, 0.9);


/* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;


