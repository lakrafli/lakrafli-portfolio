import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [ " Étudiant en informatique-BioMédicale",
          "Futur ingénieur en systèmes médicaux",
          "Futur data scientist en santé",
          "Freelance",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
