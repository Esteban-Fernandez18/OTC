class HeadCardService {
  private showHelp: boolean;

  constructor(initialShowHelp: boolean = false) {
    this.showHelp = initialShowHelp;
  }

  getShowHelp(): boolean {
    return this.showHelp;
  }

  setShowHelp(showHelp: boolean): void {
    this.showHelp = showHelp;
  }

  toggleHelp(): void {
    this.showHelp = !this.showHelp;
  }
}
export default HeadCardService;
