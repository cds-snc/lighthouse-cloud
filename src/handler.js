"use strict";

import { scanURL } from "./lib/";

export const handle = async url => {
  console.log("Checking", url);
  const report = await scanURL(url);
  return report;
};
