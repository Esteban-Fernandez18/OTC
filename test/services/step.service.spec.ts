import { describe, it, expect, beforeEach } from "vitest";
import StepService from "../../src/services/step.service";

describe("StepService", () => {
  let stepService: StepService;

  beforeEach(() => {
    stepService = new StepService();
  });

  it("debe inicializar el paso actual en 1 si no se proporciona un valor inicial", () => {
    expect(stepService.getCurrentStep()).toBe(1);
  });

  it("debe inicializar el paso actual al valor proporcionado", () => {
    const customStepService = new StepService(5);
    expect(customStepService.getCurrentStep()).toBe(5);
  });

  it("debe establecer un nuevo valor para el paso actual con setCurrentStep()", () => {
    stepService.setCurrentStep(3);
    expect(stepService.getCurrentStep()).toBe(3);
  });

  it("debe incrementar el paso actual en 1 con incrementStep()", () => {
    stepService.incrementStep();
    expect(stepService.getCurrentStep()).toBe(2);
  });

  it("debe reiniciar el paso actual a 1 con resetStep()", () => {
    stepService.setCurrentStep(5);
    stepService.resetStep();
    expect(stepService.getCurrentStep()).toBe(1);
  });
});
