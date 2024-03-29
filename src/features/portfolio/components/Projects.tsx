import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ProjectConfig } from "@/config/projects";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <h2 className=" pt-5 px-5 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Projects
      </h2>
      <div className="flex flex-wrap w-full gap-5 p-5 justify-center">
        {ProjectConfig.map((project) => {
          return (
            <>
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle className="flex justify-between content-center">
                    {project.name}
                    <Link to={project.source_code_link} target="_blank">
                      <project.icon className="h-6 w-6"></project.icon>
                    </Link>
                  </CardTitle>
                  <CardDescription className="flex gap-3">
                    {project.tags.map((tag) => {
                      return (
                        <>
                          <div className={tag.color}>{tag.name}</div>
                        </>
                      );
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardTitle>
                    <img
                      className="h-[200px] w-full object-cover rounded-lg"
                      src={project.image}
                    />
                  </CardTitle>
                  <CardContent></CardContent>
                  {project.description}
                </CardContent>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
}
