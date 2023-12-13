/*let someProp = {};

let someObject = Object.create({
    someFunc() {
        console.log("Some func from some object.");
    }
}, 
{
    propOne: {
        value: "Property One",
        enumerable: true,
        writable: true,
        configurable: true // delete someObject.propOne
    },
    propTwo: {
       value: 1
    },
propThree: {
    get() {
        return someProp;
    },
    set(value) {
        someProp = value;
    }
}
});

for (const key in someObject) {
    if (someObject.hasOwnProperty(key)) {
        const element = someObject[key];
        console.log(element)
    }
}

console.log(someObject)
*/
/*const testObject = {
    prop1: "On/Off",
    prop2: "Settings",
    propchannels: {
        prop3: "NextChannel",
        prop4: "PreviousChannel",
    },
    propvolume: {
        prop5: "Louder",
        prop6: "Quiter",
    },
    propnumbers: {
        prop7: 1,
        prop8: 2,
        prop9: 3,
        prop10: 4,
        prop11: 5,
        prop12: 6,
        prop13: 7,
        prop14: 8,
        prop15: 9,
        prop16: 0,
    },
    prop17: "Menu",
    proparrows: {
        prop18: "Up",
        prop19: "Left",
        prop20: "Right",
        prop21: "Down",
    }
};

testObject.prop2 = 2;
console.log(testObject);
console.log(testObject.prop2);
console.log(testObject.prop1.prop4);*/

const control = {
    power: false,
    volume: 0,
    channel: 1,
    minChannel: 1,
    maxChannel: 9,
    powerOff: function() {
        if (this.power) {
            this.power = false;
        } else {
            this.power = true;
        }

        return this.power;
    },
    searchChannel: function() {
        this.maxChannel = 88;
        return this.maxChannel;
    },
    volumeUp: function() {
        if (this.volume < 100) {
        this.volume += 1;
        }
        return this.volume;
    },
    volumeDown: function() {
        if (this.volume > 0) {
            this.volume -= 1;
        }
        return this.volume;
    },
    channelUp: function() {
        this.channel += 1;
        return this.channel;
    },
    channelDown: function() {
        if (this.channel == this.maxChannel) {
            this.channel = this.minChannel;
        } else {
            this.channel -= 1;
        }
    },
    goChannelOne: function() {
        this.channel = 1;
        return this.channel;
    },
    fullInfo: function() {
        return this.power + " " + this.channel + " " + this.volume;
    }
}

console.log(control.powerOff())
console.log(control.volumeUp())
console.log(control.volumeUp())
console.log(control.volumeUp())
console.log(control.volumeUp())
console.log(control.volumeUp())
console.log(control.searchChannel())
console.log(control.fullInfo())
console.log(control.channelUp())
console.log(control.channelUp())
console.log(control.channelDown())
console.log(control.fullInfo())