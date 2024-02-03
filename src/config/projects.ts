import { Agario, AlgoSort, Spreadsheet, WorkoutTracker } from "@/assets/images";
import { Icons } from "@/components/icons";

export const ProjectConfig = [
  {
    name: "Workout Tracker",
    description:
      "A workout tracker I developed to track store my workout data in a simple and easy to use UI.",
    tags: [
      {
        name: "JS",
        color: "text-blue-500/60",
      },
      {
        name: "HTML/CSS",
        color: "text-green-500/60",
      },
      {
        name: "Firebase",
        color: "text-pink-500/60",
      },
    ],
    image: WorkoutTracker,
    source_code_link: "https://github.com/SamBennettDev/workout-tracker",
    icon: Icons.gitHub,
  },
  {
    name: "AlgoSort",
    description:
      "An education application that teaches sorting algorithms in a fun interactive way. Written as a group over 5 weeks using source control and sprints.",
    tags: [
      {
        name: "C++",
        color: "text-blue-500/60",
      },
      {
        name: "Qt Creator",
        color: "text-green-500/60",
      },
      {
        name: "Box2D",
        color: "text-pink-500/60",
      },
    ],
    image: AlgoSort,
    source_code_link:
      "https://vimeo.com/manage/videos/831628922?embedded=false&source=video_title&owner=181630258",
    icon: Icons.vimeo,
  },
  {
    name: "Spreadsheet",
    description:
      "Fully functional spreadsheet application with formula evaluation, custom file extensions, and 2,574 cells.",
    tags: [
      {
        name: ".Net",
        color: "text-blue-500/60",
      },
      {
        name: "Visual Studio",
        color: "text-green-500/60",
      },
      {
        name: "Windows Forms",
        color: "text-pink-500/60",
      },
    ],
    image: Spreadsheet,
    source_code_link:
      "https://vimeo.com/735094339?embedded=true&source=video_title&owner=181630258",
    icon: Icons.vimeo,
  },
  {
    name: "Agar.io Clone",
    description:
      "This project contains the client code for the agar.io clone under a time restraint of one week. Includes a web server built to communicate between clients and server.",
    tags: [
      {
        name: ".Net",
        color: "text-blue-500/60",
      },
      {
        name: "Visual Studio",
        color: "text-green-500/60",
      },
      {
        name: "Windows Forms",
        color: "text-pink-500/60",
      },
    ],
    image: Agario,
    source_code_link:
      "https://vimeo.com/735121765?embedded=true&source=video_title&owner=181630258",
    icon: Icons.vimeo,
  },
];
