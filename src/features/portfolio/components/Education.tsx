import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { EducationConfig } from "@/config/education";

export default function Education() {
  return (
    <div>
      <h2 className=" pt-5 px-5 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Education
      </h2>

      <div className="flex items-center flex-col mb-[50px]">
        {EducationConfig.map((edu) => {
          return (
            <div
              key={edu.school_name}
              className="px-5 flex flex-col items-center md:flex-row mt-[50px] gap-5"
            >
              <img src={edu.school_seal} className="w-[100px] h-[100px]"></img>
              <Card className="max-w-[600px] bg-background border-0 border-l-2">
                <CardHeader>
                  <CardTitle>
                    <div>
                      {edu.degree} in {edu.major}
                    </div>
                  </CardTitle>
                  <CardDescription className="flex md:flex-col justify-between">
                    <div>{edu.school_name}</div>
                    <div>{edu.to}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="ml-4 list-disc [&>li]:mt-2">
                    {edu.points.map((point, index) => {
                      return <li key={index}>{point}</li>;
                    })}
                  </ul>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="mt-4">
                        View Transcript
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-full w-full h-full flex justify-center items-center">
                      <iframe
                        src="https://drive.google.com/file/d/1KHZw2gn2QTLVNUtCSs5n5iyGxdySD1Yk/preview"
                        allow="autoplay"
                        width="95%"
                        height="95%"
                        className="rounded-lg"
                      ></iframe>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
