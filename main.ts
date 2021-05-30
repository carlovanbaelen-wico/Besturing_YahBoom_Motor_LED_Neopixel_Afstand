radio.onReceivedNumberDeprecated(function (receivedNumber) {
    item = receivedNumber
    if (item == 0) {
        maqueen.motorStop(maqueen.aMotors.M1)
        maqueen.motorStop(maqueen.aMotors.M2)
    }
    if (item == 1) {
        if (maqueen.sensor(PingUnit.Centimeters) > 10) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        } else {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        }
    }
    if (item == 2) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 255)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 255)
    }
    if (item == 3) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 199)
    }
    if (item == 4) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 199)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
    }
    if (item == 5) {
        Color.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (item == 6) {
        Color.showColor(neopixel.colors(NeoPixelColors.White))
    }
    if (item == 7) {
        Color.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (item == 8) {
        Color.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (item == 9) {
        Color.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
let item = 0
let Color: neopixel.Strip = null
led.plot(2, 0)
radio.setGroup(1)
Color = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
