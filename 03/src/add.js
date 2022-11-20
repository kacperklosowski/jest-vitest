// the implementation
export function add(...args) {
  return args.reduce((a, b) => a + b, 0)
}

// Vitest also provides a way to run tests within your source code along side the implementation, similar to Rust's module tests.

if (import.meta.vitest) { // for production build you set this to undefined, so it's not included in the bundle
  const { it, expect } = import.meta.vitest
  it('add', () => {
    expect(add()).toBe(0)
    expect(add(1)).toBe(1)
    expect(add(1, 2, 3)).toBe(6)
  })
}
