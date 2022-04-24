import React from "react";
import "../../styles/HeroSecond.css";

export default function HeroSecond({ childern, hero }) {
  return <header className={hero}>{childern}</header>;
}

HeroSecond.defaulProps = {
  hero: "defaultHero",
};

