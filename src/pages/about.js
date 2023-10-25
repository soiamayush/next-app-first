import React from "react";
import "../app/styles/about.modules.css";
import Image from "next/image";

const About = () => {
  return (
    <div className="about">
      <h1 className="headingabout">This is aboutus page.</h1>
      <Image src="/download.jpg" width="300" height="250"></Image>
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQ5rl0J8n2myZkotIPC6Ay5DWIB0UcVXgW-I68792t41c5y4X9GhqnEBEsH6J5trX7Is"
        width="300"
        height="250"
      ></Image>
      <p className="aboutpara">
        sdhf sdh fusdhuifl sdugfu guf usdigfu sugfusguf su fusgd
        fgsudogfuosdgfuogucu dufvusdgvugsd uyguysdgfuyg suyfgyudsdgfuygsdufy
        gsyugfuydsgfuysgdufygsugfuydsgdofgsyfoygsodgfosduy f sdf gusdfsd fgsd
        ufog.
      </p>
      <style jsx>
        {`
          .headingabout {
            color: cyan;
          }
        `}
      </style>
    </div>
  );
};

export default About;
