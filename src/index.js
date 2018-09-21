// @flow
import changeCase from "change-case";
import curry from "curry";

export type CaseType =
  | "camel"
  | "constant"
  | "dot"
  | "header"
  | "lower"
  | "lcFirst"
  | "no"
  | "param"
  | "pascal"
  | "path"
  | "sentence"
  | "snake"
  | "swap"
  | "title"
  | "upper"
  | "ucFirst";

type ChangeKeyCase = ((caseType: CaseType) => (o: Object) => Object) &
  ((caseType: CaseType, o: Object) => Object);

export const changeKeyCase: ChangeKeyCase = curry(function changeKeyCase(
  caseType: CaseType,
  o: Object
): Object {
  return Object.keys(o).reduce(
    (lastValue, key) => ({
      ...lastValue,
      [changeCase[caseType + "Case"](key)]: o[key]
    }),
    {}
  );
});
