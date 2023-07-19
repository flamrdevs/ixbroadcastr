const createBroadcastChannel = () => {
  type MessageEventListener = <T>(ev: { data: T }) => void;

  return class {
    private readonly name: string;
    private readonly listeners: Set<MessageEventListener>;

    constructor(name: string) {
      this.name = name;
      this.listeners = new Set();
    }

    addEventListener(type: string, listener: MessageEventListener) {
      if (type === "message") this.listeners.add(listener);
    }

    removeEventListener(type: string, listener: MessageEventListener) {
      if (type === "message") this.listeners.delete(listener);
    }

    postMessage(message: any) {
      const event = { data: message };
      this.listeners.forEach((listener) => listener(event));
    }
  };
};

(global as any).BroadcastChannel = createBroadcastChannel();
