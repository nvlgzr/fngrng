import baldwin from "./jamesBaldwinATalkToTeachers"
import bronte from "./emilyBrontëWutheringHeights"
import dorian from "./passageFromDorianGray"
import gettysburg from "./gettysburg"

export default () => {
  const all = [baldwin, bronte, dorian, gettysburg]
  return all[Math.floor(Math.random() * all.length)]
}