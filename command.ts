class Light {
  on() {
    System.out.println('Light is on');
  }
  off() {
    System.out.println('Light is off');
  }
}

class LightOnCommand {
	public light: any;

  constructor(light) {
    this.light = null;

    this.light = this.light;
  }
  execute() {
    this.light.on();
  }
}

class LightOffCommand {
	public light: any;

  constructor(light) {
    this.light = null;

    this.light = this.light;
  }
  execute() {
    this.light.off();
  }
}

class Stereo {
  on() {
    System.out.println('Stereo is on');
  }
  off() {
    System.out.println('Stereo is off');
  }
  setCD() {
    System.out.println('Stereo is set ' + 'for CD input');
  }
  setDVD() {
    System.out.println('Stereo is set' + ' for DVD input');
  }
  setRadio() {
    System.out.println('Stereo is set' + ' for Radio');
  }
  setVolume(volume) {
    System.out.println('Stereo volume set' + ' to ' + volume);
  }
}

class StereoOffCommand {
	public stereo: any;

  constructor(stereo) {
    this.stereo = null;

    this.stereo = this.stereo;
  }
  execute() {
    this.stereo.off();
  }
}

class StereoOnWithCDCommand {
	public stereo: any;

  constructor(stereo) {
    this.stereo = null;

    this.stereo = this.stereo;
  }
  execute() {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(11);
  }
}

class SimpleRemoteControl {
	public slot: any;

  constructor() {
    this.slot = null;
  }
  setCommand(command) {
    this.slot = command;
  }
  buttonWasPressed() {
    this.slot.execute();
  }
}

class RemoteControlTest {}
RemoteControlTest.main = (args) => {
  let remote = new SimpleRemoteControl();
  let light = new Light();
  let stereo = new Stereo();
  remote.setCommand(new LightOnCommand(light));
  remote.buttonWasPressed();
  remote.setCommand(new StereoOnWithCDCommand(stereo));
  remote.buttonWasPressed();
  remote.setCommand(new StereoOffCommand(stereo));
  remote.buttonWasPressed();
};              
