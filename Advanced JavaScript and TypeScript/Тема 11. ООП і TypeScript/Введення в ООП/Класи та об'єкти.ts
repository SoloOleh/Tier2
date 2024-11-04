class Zhiguli_8 {
  private needRepair = false;
  private maxEngineLoad = 5;

  private checkEngine() {
    if (this.needRepair) {
      throw new Error('Engine not work');
    }

    const engineLoad = Math.floor(Math.random() * this.maxEngineLoad) + 1;
    if (this.maxEngineLoad === engineLoad) {
      this.needRepair = true;
      throw new Error('Engine broken again');
    }
  }

  public startEngine() {
    this.checkEngine();
    console.log('Ta-ta-ta-ta');
  }

  public repairEngine() {
    this.needRepair = false;
    console.log('Engine rebuilt');
  }
}

const auto = new Zhiguli_8();

try {
  while (true) {
    auto.startEngine();
  }
} catch (e) {
  console.log(e);
  auto.repairEngine();
  while (true) {
    auto.startEngine();
  }
}