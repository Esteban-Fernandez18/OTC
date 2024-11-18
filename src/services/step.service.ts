class StepService {
  private currentStep: number;

  constructor(initialStep: number = 1) {
    this.currentStep = initialStep;
  }

  getCurrentStep(): number {
    return this.currentStep;
  }

  setCurrentStep(step: number): void {
    this.currentStep = step;
  }

  incrementStep(): void {
    this.currentStep += 1;
  }

  resetStep(): void {
    this.currentStep = 1;
  }
}

export default StepService;
