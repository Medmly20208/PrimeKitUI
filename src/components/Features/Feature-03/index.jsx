import React from "react";

//components
import FeatureCard from "./FeatureCard";

const Features = () => {
  const openSourceProjectFeatures = [
    {
      title: "Responsive Design",
      description:
        "All components are built with a responsive design approach, ensuring they adapt and look great on various devices, such as desktops, tablets, and mobile phones.",
    },
    {
      title: "Mobile-First Approach",
      description:
        "The project follows a mobile-first approach, prioritizing mobile devices during development and progressively enhancing the user experience for larger screens.",
    },
    {
      title: "Media Queries and Breakpoints",
      description:
        "The CSS is organized using media queries and breakpoints from Tailwind CSS to create a smooth transition between different screen sizes.",
    },
    {
      title: "Flexibility and Customization",
      description:
        "Users can easily customize the appearance of components to fit their specific project needs by leveraging Tailwind CSS utility classes.",
    },
    {
      title: "Support for Different Viewports",
      description:
        "The project includes optimizations for various viewport sizes, ensuring that components maintain their usability and aesthetics across a wide range of resolutions.",
    },
    {
      title: "Browser Compatibility",
      description:
        "The components are tested and optimized to work seamlessly on different modern web browsers, providing a consistent experience for all users.",
    },
  ];

  return (
    <div className="mt-[100px]">
      <div className="mb-[50px]">
        <h1 className="text-3xl font-bold text-center">Features </h1>
        <p className="text-md text-gray-500 text-center pt-[0.2em]">
          Benefit from more then 6+ amazing features
        </p>
      </div>
      <div className="flex flex-wrap gap-[20px] mt-[40px] justify-center">
        {openSourceProjectFeatures.map((feature, index) => {
          return (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
