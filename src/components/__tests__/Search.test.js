import { render } from "@testing-library/react";
import Body from "../Body";
import { data } from "react-router";
import MOCK_Data from "../Mocks/MockresListData.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_Data);
    },
  });
});

it("should render the body component with search", () => {
  render(<Body />);
});
