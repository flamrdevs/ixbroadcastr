# ixbroadcastr

simple broadcast channel

## Usage

```ts
import ixbroadcastr from "ixbroadcastr";

const broadcastr = ixbroadcastr<{ hello: string }>("name");

const unlisten = broadcastr.listen((value) => {
  console.log(value);
});

broadcastr.send({ hello: "ixbroadcastr" });

// { hello: "ixbroadcastr" }

unlisten();
```

## License

MIT
