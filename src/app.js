export function greeting(name) {
  if (!name || !name.trim()) throw new Error('A name is required');
  return `Hello, ${name.trim()}!`;
}

// trigger test
