import { describe, it, expect, beforeEach } from "vitest";
import toggleChevron from "../../src/services/button.service";

describe("toggleChevron", () => {
  let toggleChevronService: toggleChevron;

  beforeEach(() => {
    toggleChevronService = new toggleChevron();
  });

  it("debe inicializar el valor del toggleChevron en false", () => {
    expect(toggleChevronService.isChevronToggled.value).toBe(false);
  });

  it("debe establecer el valor del toggleChevron en true al invocar toggleChevron()", () => {
    toggleChevronService.toggleChevron();
    expect(toggleChevronService.isChevronToggled.value).toBe(true);
  });

  it("debe establecer el valor del toggleChevron en false al invocar toggleChevron() de nuevo", () => {
    toggleChevronService.toggleChevron();
    toggleChevronService.toggleChevron();
    expect(toggleChevronService.isChevronToggled.value).toBe(false);
  });
});
