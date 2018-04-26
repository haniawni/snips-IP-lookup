var ip = require("ip");
var mqtt = require('mqtt');
var mqtt_options = {
	servers: [{
		host: 'localhost',
		port: 1883
	}],
	will: {
		topic: "/snips/ip-lookup/RIP",
		payload: "ip-lookup lost connection",
		qos: 0,
		retain: 0
	}
};
var client = mqtt.connect(mqtt_options);

function endDialogue(sessionId,text){
	client.publish('hermes/dialogueManager/endSession',JSON.stringify(text));
}

function intentCallback(topic, msg){
	var body = JSON.parse(msg);

	console.log("IP-lookup: intent recieved. Responding." + ip.address());
	endDialogue(body.sessionId,"My I.P.: " + ip.address());
}

client.on('connect', function() {
	console.log("IP-lookup: CONNECTED & SUBSCRIBED SUCCESSFULLY");
	client.subscribe('hermes/intent/haniawni:IpLookup');
});

client.on('error',function(err){
	console.log("ERROR: "+err);
});

client.on('message', intentCallback);
