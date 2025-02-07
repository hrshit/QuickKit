const ProjectCard = ({title, desc, src}) => {
    return (
        <div className="flex flex-col gap-4">
            <img src={src} alt="" />
            <div>
                <h1 className="text-3xl font-semibold font-Roboto ">{title}</h1>
                <p className="font-DM-sens">{desc}</p>
            </div>
       </div>
   )
}

export {
    ProjectCard
}

