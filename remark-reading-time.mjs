import { readingTime } from 'reading-time-estimator';
import { toString } from 'mdast-util-to-string';

/* Adapted from https://docs.astro.build/en/recipes/reading-time/ */
export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const result = readingTime(textOnPage, 265);
    data.astro.frontmatter.minutesRead = result.text;
  };
}