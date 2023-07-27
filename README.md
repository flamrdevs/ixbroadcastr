<p align="center">
  <a title="license" href="https://github.com/flamrdevs/ixbroadcastr/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/core/badge?t=dark&v=MIT">
      <img alt="license" src="https://flamrdevs.cyclic.app/core/badge?t=light&v=MIT" hspace="1">
    </picture>
  </a>
  <a title="version" href="https://www.npmjs.com/package/ixbroadcastr">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/npm/version?t=dark&n=ixbroadcastr">
      <img alt="version" src="https://flamrdevs.cyclic.app/npm/version?t=light&n=ixbroadcastr" hspace="1">
    </picture>
  </a>
  <a title="size" href="https://bundlejs.com/?q=ixbroadcastr">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/bundlejs/size?t=dark&n=ixbroadcastr">
      <img alt="size" src="https://flamrdevs.cyclic.app/bundlejs/size?t=light&n=ixbroadcastr" hspace="1">
    </picture>
  </a>
</p>

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
