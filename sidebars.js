/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  about: [{ type: "autogenerated", dirName: "about" }],
  work: [{ type: "autogenerated", dirName: "work-and-education" }],
  projects: [{ type: "autogenerated", dirName: "projects" }],
  other: [{ type: "autogenerated", dirName: "other" }],
};

module.exports = sidebars;
