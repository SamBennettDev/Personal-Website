import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExperienceConfig } from "@/config/experiences";
import { CircleIcon } from "lucide-react";

export default function Experience() {
  return (
    <>
      <h2 className=" pt-5 px-5 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Experience
      </h2>
      <div className="flex items-center flex-col">
        {ExperienceConfig.map((experience) => {
          return (
            <>
              <div className="px-5 flex mt-[50px] gap-5">
                <Card className="hidden md:block bg-background border-none h-auto">
                  <CardHeader className="flex flex-nowrap flex-row items-center">
                    <CircleIcon className="h-5" />
                    <div className="px-2"></div>
                    <CardDescription className="text-foreground w-[70px]">
                      {experience.to}
                      <br />
                      {experience.from}
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="max-w-[600px] bg-background border-0 border-l-2">
                  <CardHeader>
                    <CardTitle>
                      <div>{experience.title}</div>
                    </CardTitle>
                    <CardDescription className="flex justify-between">
                      <div>{experience.company_name}</div>
                      <div className="flex md:hidden ">
                        {experience.from} - {experience.to}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="ml-4 list-disc [&>li]:mt-2">
                      {experience.points.map((point) => {
                        return <li>{point}</li>;
                      })}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
