#!/usr/bin/env node

var OOCSI = require("oocsi")

OOCSI.connect("ws://localhost:9000/ws", "nodejs_test_client");

OOCSI.subscribe("testchannel", function(e) { 
    console.log(e.sender);
    console.log(e.data);        
});
