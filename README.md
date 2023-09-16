<p align="center">
  <a title="license" href="https://github.com/flamrdevs/ixbroadcastr/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/npm/l/ixbroadcastr?t=dark">
      <img alt="license" src="https://none.deno.dev/npm/l/ixbroadcastr?t=light" hspace="1">
    </picture>
  </a>
  <a title="version" href="https://www.npmjs.com/package/ixbroadcastr">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/npm/v/ixbroadcastr?t=dark">
      <img alt="version" src="https://none.deno.dev/npm/v/ixbroadcastr?t=light" hspace="1">
    </picture>
  </a>
  <a title="size" href="https://bundlejs.com/?q=ixbroadcastr">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/bundlejs/mz/ixbroadcastr?t=dark">
      <img alt="size" src="https://none.deno.dev/bundlejs/mz/ixbroadcastr?t=light" hspace="1">
    </picture>
  </a>
</p>

<h1 id="ixbroadcastr">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/ui/icon/lucide?t=dark&i=rocket">
    <img alt="lucide rocket" src="https://none.deno.dev/ui/icon/lucide?t=light&i=rocket" hspace="1">
  </picture>
  <span>
    ixbroadcastr
  </span>
</h1>

simple broadcast channel

<h2 id="usage">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/ui/icon/lucide?t=dark&i=code">
    <img alt="lucide code" src="https://none.deno.dev/ui/icon/lucide?t=light&i=code" hspace="1">
  </picture>
  <span>
    usage
  </span>
</h2>

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

<h2 id="license">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/ui/icon/lucide?t=dark&i=scale">
    <img alt="lucide scale" src="https://none.deno.dev/ui/icon/lucide?t=light&i=scale" hspace="1">
  </picture>
  <span>
    license
  </span>
</h2>

MIT
