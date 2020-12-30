declare function waitValue<T>(fn: () => T, max?: number): Promise<T>;
export default waitValue;
