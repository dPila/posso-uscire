import { ALL_REGIONS } from "./Constants";
import zonaArancione from "./zonaArancione";
import zonaGialla from "./zonaGialla";
import zonaRossa from "./zonaRossa";
import _ from "lodash";
import { Province } from "../lib/types";

const allRules = [...zonaGialla, ...zonaArancione, ...zonaRossa];

const rulesComparator = (thisRule, thatRule) => {
  return (
    thisRule &&
    thatRule &&
    _.isEqual(thisRule.name, thatRule.name) &&
    _.isEqual(thisRule.details, thatRule.details) &&
    _.isEqual(thisRule.moreDetails, thatRule.moreDetails)
  );
};

const sameRulesReducer = (
  rulesToOutput,
  currentRule,
  currentRuleIndex,
  rules
) => {
  const prevRule = rules[currentRuleIndex - 1];
  if (_.isEqualWith(currentRule, prevRule, rulesComparator)) {
    rulesToOutput.pop();
    rulesToOutput.push({ ...prevRule, to: currentRule.to });
  } else {
    rulesToOutput.push(currentRule);
  }
  return rulesToOutput;
};

export function getActiveRules(selectedProvince: Province) {
  const rulesBySelectionFilter = (rule) =>
    rule.regions === ALL_REGIONS ||
    (rule.regions && rule.regions.includes(selectedProvince.regione)) ||
    (rule.cities && rule.cities.includes(selectedProvince.sigla));

  const now = Date.now();
  return allRules
    .filter((rule) => !rule.to || new Date(rule.to).getTime() > now)
    .filter(rulesBySelectionFilter)
    .sort(
      (first, second) =>
        new Date(first.from).getTime() - new Date(second.from).getTime()
    )
    .reduce(sameRulesReducer, []);
}
