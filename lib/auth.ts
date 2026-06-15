// In-memory user store for demo/dev (no database required)
export interface DemoUser {
  id: string;
  email: string;
  password: string;
  name: string;
  plan: "free" | "pro";
}

const users: DemoUser[] = [
  {
    id: "demo-user-1",
    email: "demo@demo.app",
    password: "demo123",
    name: "Demo User",
    plan: "pro",
  },
];

export function findUserByEmail(email: string): DemoUser | undefined {
  return users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );
}

export function createUser(email: string, password: string, name: string): DemoUser {
  const user: DemoUser = {
    id: `user-${Date.now()}`,
    email,
    password,
    name,
    plan: "free",
  };
  users.push(user);
  return user;
}

export function validatePassword(user: DemoUser, password: string): boolean {
  return user.password === password;
}
