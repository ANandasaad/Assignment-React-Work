import React, { useState } from "react";

const Section = ({ title, des, isVisible, setVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3>{title}</h3>

      {isVisible ? (
        <button
          className="cursor-pointer underline"
          onClick={() => setVisible(false)}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => setVisible(true)}
        >
          Show
        </button>
      )}

      {isVisible && <p>{des}</p>}
    </div>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: true,
    showTeam: false,
    showCareer: true,
  });
  return (
    <div>
      <h1 className="text-3xl font-bold p-2 m-2">Instamart</h1>
      <Section
        title={"About InstaMart"}
        des={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        isVisible={sectionConfig.showAbout}
        setVisible={() =>
          setSectionConfig({
            showAbout: true,
            showTeam: false,
            showCareer: false,
          })
        }
      />
      <Section
        title={"Details Team"}
        des={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        isVisible={sectionConfig.showTeam}
        setVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeam: true,
            showCareer: false,
          })}
        
      />
      <Section
        title={"Careers"}
        des={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        isVisible={sectionConfig.showCareer}
        setVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeam: false,
            showCareer: true,
          })}
      />
    </div>
  );
};
export default Instamart;
