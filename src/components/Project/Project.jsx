import { Container } from "../Container";
import { ProjectCard } from "./ProjectCard";

const Project = () => {
    return (
      <div className="my-5 flex justify-center ">
        <Container>
          <div className="flex  flex-col w-full self-center gap-20 mb-10">
            <h2 className="text-5xl text-dark font-Roboto font-bold text-center ">
              Recent Showcase
            </h2>
            <div className="flex gap-24 justify-center">
              <div className="flex flex-col gap-20">
                <ProjectCard
                  title={"Web Ui design"}
                  desc={"Creative Ui design"}
                  src={"/Project/Ui1.svg"}
                />
                <ProjectCard
                  title={"UI design"}
                  desc={"Creative Rebranding for logo"}
                  src={"/Project/Uilogo.svg"}
                />
              </div>
              <div className="flex flex-col gap-20">
                <div className="flex justify-end items-end mt-20">
                  <button className="bg-dark  text-white p-1 pr-5 rounded-full  flex gap-1 font-DM-Sans">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="14" cy="14" r="14" fill="#0C0C0C" />
                      <path
                        d="M12 9L16.6667 13.6667L12 18.3333"
                        stroke="#FBFBFB"
                        // stroke-width="1.55439"
                        // stroke-linecap="round"
                        // stroke-linejoin="round"
                      />
                    </svg>
                    Start your Free trial
                  </button>
                </div>
                <ProjectCard
                  title={"To design Digital Strategy"}
                  desc={"Social Media Marketing"}
                  src={"/Project/Social.svg"}
                />
                <ProjectCard
                  title={"UI design"}
                  desc={"Creative rebranding for logo"}
                  src={"/Project/Ui2.svg"}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
}

export {
    Project
}

/* Project */

