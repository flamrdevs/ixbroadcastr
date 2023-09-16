type IXBroadcastr<T extends any> = {
  /**
   *
   * @param data data
   * @returns data
   */
  send: (data: T) => T;
  /**
   *
   * @param callback callback
   * @returns unlisten function
   */
  listen: (callback: (data: T) => void) => () => void;
};

/**
 *
 * @param name name
 * @returns broadcast actions
 */
const ixbroadcastr = <T extends any>(name: string): IXBroadcastr<T> => {
  const bc = new BroadcastChannel(name);

  return {
    send: (data) => {
      bc.postMessage(data);
      return data;
    },
    listen: (callback) => {
      const listener = (event: MessageEvent<T>) => {
        callback(event.data);
      };

      bc.addEventListener("message", listener);
      return () => {
        bc.removeEventListener("message", listener);
      };
    },
  };
};

export type { IXBroadcastr };
export default ixbroadcastr;
