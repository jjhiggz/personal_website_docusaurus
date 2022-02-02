import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Coding",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        <div>
          <span style={{ fontStyle: "italic" }}>"to code is to kick ass"</span>{" "}
          - me
        </div>
        Truly though, I really enjoy coding. I find an elegance and peace
        associated with clean mantainable code.
      </>
    ),
  },
  {
    title: "Music",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        I love making music! In fact right before I learned how to code, I was
        trying to make a living off music{" "}
        <span style={{ fontStyle: "italic" }}>(It wasn't very fruitful)</span>
      </>
    ),
  },
  {
    title: "Girlfriend and Dog",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Most of my free time goes towards my girlfriend, and my dog. They are
        both amazing, she is a nurse in training, and he is a Corgi/Heeler mix
        named doomslayer
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
