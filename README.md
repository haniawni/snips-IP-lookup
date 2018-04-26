# IP-Lookup

This is a simple SNIPS backend which replies to hermes/intent/haniawni:IpLookup messages with the local device's IP address.

## Installation

### Clone repo to your raspberry pi
I reccomend using `git clone` from the terminal of a pi after sshing in or the like.

### Configure to run on boot

On a raspberry pi, add this line to your /etc/rc.local to run this program on boot
```
node /home/pi/snips-IP-lookup/ip-lookup-listener.js &
```
(note that you may need to modify the file path to match the local you've installed this in.)
