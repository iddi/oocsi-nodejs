# OOCSI nodejs client

This OOCSI client allows access to OOCSI from Node.js via the websocket protocol. 

# How to use

First, include the JavaScript source (either as the [source library](https://github.com/iddi/oocsi-nodejs/blob/master/dist/oocsi-nodejs.js) or as the [minified library](https://github.com/iddi/oocsi-nodejs/blob/master/dist/oocsi-nodejs.min.js)) into your node application.

Then connect to an OOCSI server (which needs to be running a websocket adapter):

```javascript
OOCSI.connect("ws://_SERVER_ADDRESS_/ws");

// or with specified client handle
OOCSI.connect("ws://_SERVER_ADDRESS_/ws", "client_handle");
```
 

You can send data to a channel or individual client (here: "John"): 

```javascript
// JSON data object with two items, position and color
var data = {'position' : 90, 'color': 255};

// send data object to client "John"
OOCSI.send("John", data);
```

You can subscribe to a channel with a handler to handle messages:

```javascript
OOCSI.subscribe("testchannel", function(msg) {
	// handle message on “test channel"
	var position = msg.data.position;
	var color = msg.data.color;
});
```
