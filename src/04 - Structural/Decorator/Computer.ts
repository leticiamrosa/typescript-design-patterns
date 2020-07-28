class Computer {
 public boot(): void {
    console.log("Computer is booting");
  };

  public shutDown(): void {
    console.log("Computer is shutting down");
  };

  public display(): void {
    console.log("Displaying content in one screen");
  };

  public print(): void {
    console.log("No printer found");
  };

  public renderVideo(): void {
    console.log("Cannot render video wihtout a dedicate graphics card");
  };
};

class ComputerComponentDecorator extends Computer {
  constructor(private _computer: Computer) {
    super();
  };

  boot() {
    return this._computer.boot();
  };

  shutDown() {
    return this._computer.shutDown();
  };

  display() {
    return this._computer.display();
  };

  print() {
    return this._computer.print();
  }

  renderVideo() {
    return this._computer.renderVideo();
  };
};

class ServerComputer extends Computer {
  boot() {
    console.log("Booting server");
  };

  shutDown() {
    console.log("Server is shutting down");
  };
};

class ComputerWithPrinterDecorator extends ComputerComponentDecorator {
  constructor(computer: Computer) {
    super(computer);
  };

  print(): void {
    console.log("Printing....");
  };
};


class ComputerWithDedicateGPU extends ComputerComponentDecorator {
  constructor(computer: Computer) {
    super(computer);
  };

  renderVideo() {
    console.log("Rendering video with dedicate GPU")
  };
};

let server = new ServerComputer();
let serverWithPrinter = new ComputerWithPrinterDecorator(server);
let serverWithPrinterAndDedicatedGpu = new ComputerWithDedicateGPU(serverWithPrinter);


serverWithPrinter.print();
serverWithPrinterAndDedicatedGpu.renderVideo();