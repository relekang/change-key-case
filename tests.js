// @flow
import { changeKeyCase } from "./src";

test("changeKeyCase should change the case of every key in the object with partial application", () => {
  expect(
    changeKeyCase("sentence")({
      accountType: "standard",
      amount: 200,
      transactionTypeCode: 1
    })
  ).toEqual({
    "Account type": "standard",
    Amount: 200,
    "Transaction type code": 1
  });
});

test("changeKeyCase should change the case of every key in the object", () => {
  expect(
    changeKeyCase("sentence", {
      accountType: "standard",
      amount: 200,
      transactionTypeCode: 1
    })
  ).toEqual({
    "Account type": "standard",
    Amount: 200,
    "Transaction type code": 1
  });
});

const testObject = {
  transactionTypeCode: 1,
  account_type: "standard"
};

[
  "camel",
  "constant",
  "dot",
  "header",
  "lower",
  "no",
  "param",
  "pascal",
  "path",
  "sentence",
  "snake",
  "swap",
  "title",
  "upper"
].forEach(type => {
  test("changeKeyCase(" + type + ")(TestObject)", () => {
    expect(changeKeyCase(type)(testObject)).toMatchSnapshot();
  });
});
