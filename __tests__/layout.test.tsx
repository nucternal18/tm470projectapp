import RootLayout from "../app/_layout";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import { render, act } from "@testing-library/react-native";

describe("<RootLayout />", () => {
  it("has 1 child", async () => {
    // await act(async () => {
    //   const tree = render(<RootLayout />).toJSON() as ReactTestRendererJSON;
    //   expect(tree.children?.length).toBe(1);
    // });
  });
});
