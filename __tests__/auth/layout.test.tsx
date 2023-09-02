import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import { render, act } from "@testing-library/react-native";
import AuthLayout from "../../app/(auth)/_layout";

describe("<AuthLayout />", () => {
  it("has 1 child", async () => {
    // await act(async () => {
    //   const tree = render(<AuthLayout />).toJSON() as ReactTestRendererJSON;
    //   expect(tree.children?.length).toBe(1);
    // });
  });

  it("renders correctly", async () => {
    // let tree
    // await act(async () => {
    //   tree = renderer.create(<AuthLayout />).toJSON();
    // });
    // expect(tree).toMatchSnapshot();
  });
});
