import { describe, expect, test } from "vitest";
import { getAPIKey } from "./auth";


describe("getAPIKey", () => {
  test("returns null if no authorization header is present", () => {
    const headers = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null if authorization header is not in the correct format", () => {
    const headers = { authorization: "Bearer some-token" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns the API key if authorization header is in the correct format", () => {
    const headers = { authorization: "ApiKey my-secret-key" };
    expect(getAPIKey(headers)).toBe("my-secret-key");
  });
});
