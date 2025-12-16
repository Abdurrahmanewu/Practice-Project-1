import SubService from "../SubService/SubService";
import feature1 from "../../../assets/features/feature-1.png";
import feature2 from "../../../assets/features/feature-2.png";

const Service1 = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <SubService
          title="Work with tools you already use"
          description="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
          bulletPoints={[
            "Continuous integration and deployment",
            "Development workflow",
            "Knowledge management",
          ]}
          footerText="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
          imageSrc={feature1}
          imageAlt="feature image 1"
          imagePosition="right"
        />
        <SubService
          title="We invest in the world’s potential"
          description="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
          bulletPoints={[
            "Dynamic reports and dashboards",
            "Templates for everyone",
            "Development workflow",
            "Limitless business automation",
            "Knowledge management",
          ]}
          footerText="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
          imageSrc={feature2}
          imageAlt="feature image 2"
          imagePosition="left"
        />
      </div>
    </section>
  );
};

export default Service1;
