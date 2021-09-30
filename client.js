var mqtt = require("mqtt");
// var client = mqtt.connect("mqtt://localhost:13217");
// var client = mqtt.connect("mqtt://44.198.112.35:13217");
var client = mqtt.connect("mqtt://44.198.112.35:13217");

client.on("connect", function () {
  client.subscribe("test");
  var paket = {
    temp: (Math.random() * 100).toFixed(2),
    ppg: (Math.random() * 100).toFixed(2),
    ekg: (Math.random() * 100).toFixed(2),
    nivac: (Math.random() * 100).toFixed(2),
    listAlatId: 1,
  };
  client.publish("test", JSON.stringify(paket));
});

client.on("message", function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  client.end();
});
