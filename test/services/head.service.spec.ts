import { describe, it, expect, beforeEach } from "vitest";
import HeadCardService from "../../src/services/headcard.service";

describe("HeadCardService", () => {
  let headCardService: HeadCardService;

  beforeEach(() => {
    headCardService = new HeadCardService();
  });

  it("debe inicializar el valor del showHelp en false", () => {
    expect(headCardService.getShowHelp()).toBe(false);
  });

  it("debe establecer el valor del showHelp en true al invocar toggleHelp()", () => {
    headCardService.toggleHelp();
    expect(headCardService.getShowHelp()).toBe(true);
  });

  it("debe establecer el valor del showHelp en false al invocar toggleHelp() de nuevo", () => {
    headCardService.toggleHelp();
    headCardService.toggleHelp();
    expect(headCardService.getShowHelp()).toBe(false);
  });
});
