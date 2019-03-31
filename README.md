test websocket:

```
let msg = {
  name: 'channel add',
  data: {
    name: 'Hardware Support'
  }
};

let ws = new WebSocket('ws://localhost:4000');

ws.onopen = () => {
  ws.send(JSON.stringify(msg))
}

ws.onmessage = (e) => {
  console.log(JSON.parse(e.data))
}
```