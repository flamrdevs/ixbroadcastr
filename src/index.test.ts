import { describe, expect, it } from "vitest";

import ixbroadcastr from ".";

describe("ixbroadcastr", () => {
  it("Works", () => {
    type Data = "red" | "green" | "blue";

    let listenValue: Data = "red";
    let listenCalls: number = 0;

    const broadcastr = ixbroadcastr<Data>("name");

    const unlisten = broadcastr.listen((value) => {
      listenValue = value;
      ++listenCalls;
    });

    const expects = (equalListenValue: Data, equalListenCalls: number) => {
      expect(listenValue).toEqual(equalListenValue);
      expect(listenCalls).toEqual(equalListenCalls);
    };

    expects("red", 0);

    broadcastr.send("green");

    expects("green", 1);

    broadcastr.send("blue");

    expects("blue", 2);

    broadcastr.send("blue");

    expects("blue", 3);

    broadcastr.send("red");

    expects("red", 4);

    unlisten();

    broadcastr.send("red");

    expects("red", 4);
  });
});
