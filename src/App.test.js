import React from "react";
import App from "./App";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Dashboard from "./pages/Dashboard";

afterEach(cleanup);
test("Should render", () => {
  render(<App />);
});

test("Login Text Should Comes Up", () => {
  const { container } = render(<App />);
  let login = container.querySelector("div > div > div > h1");
  expect(login.innerHTML).toEqual("Log In");
});

test("Login Button Should Comes Up", () => {
  const { container } = render(<App />);
  let loginBtn = container.querySelector("div > div > div > div > button");
  expect(loginBtn).toBeDefined();
});

test("Dashboard Should Comes Up When User Login", () => {
  const { container } = render(<App />);
  let loginBtn = container.querySelector("div > div > div > div > button");
  let inputText = container.querySelector(
    "div > div > div > input:nth-child(3)"
  );
  let dashboardTitle = container.querySelector(
    "div > div.MuiPaper-root.MuiPaper-elevation2.MuiPaper-rounded > div.MuiToolbar-root.MuiToolbar-regular.MTableToolbar-root-255.MuiToolbar-gutters > div.MTableToolbar-title-259 > h6"
  );
  fireEvent.change(inputText, {
    target: {
      value: "IndianChef"
    }
  });
  let inputPassword = container.querySelector(
    "div > div > div > input:nth-child(6)"
  );
  fireEvent.change(inputPassword, {
    target: {
      value: "IndianChef"
    }
  });
  console.log(loginBtn);
  fireEvent.click(loginBtn);
  expect(dashboardTitle.innerHTML).toHaveBeenCalledTimes(
    5000
  );
});
