const ProjectCard = ({title, desc, src}) => {
    return (
        <div className="flex flex-col gap-4">
            <img src={src} alt="" />
            <div>
                <h1 className="text-3xl font-semibold font-Roboto ">{title}</h1>
                <p className="font-DM-sens">{ desc}</p>
            </div>
       </div>
   )
}

export {
    ProjectCard
}

/* Web UI design */

// width: 216px;
// height: 35px;

/* Heading/H4-30 */
// font-family: 'Roboto Serif';
// font-style: normal;
// font-weight: 600;
// font-size: 30px;
// line-height: 35px;
// text-align: center;

/* Black */
// color: #0C0C0C;


/* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
