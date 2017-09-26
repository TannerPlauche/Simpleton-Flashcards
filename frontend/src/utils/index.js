import _ from "lodash";

/**
 * 
 * @param {Array} categories
 * Removes category letter duplicates 
 */
export const getCategoriesByLetter = (categories) => {
  let matchedLetters = [];
  return _.reduce(
    categories.slice(),
    (categoriesArray, item) => {
      if (matchedLetters.indexOf(item.letter) < 0) {
        matchedLetters.push(item.letter);
        categoriesArray.push(item);
      }
      return categoriesArray;
    },
    [])
    .sort()
}

export const getCategoryPosition = (char) => {
  switch (char) {
    case "I":
      return "Initial";
    case "M":
      return "Middle";
    case "F":
      return "Final";
    default:
      return "Unknown Position"
  }
};
