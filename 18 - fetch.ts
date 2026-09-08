type User = {
  name: string;
  phone: string;
  disposableToken: string;
  role: "user" | "admin" | "manager";
};

// get all
async function getUsers(url: string, jwt: string): Promise<User[]> {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwt}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) throw new Error(response.statusText);

  return (await response.json()) as User[];
}

// ********

// get one
async function getUser(id: number, url: string, jwt: string): Promise<User> {
  const response = await fetch(`${url}/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwt}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) throw new Error(response.statusText);

  return (await response.json()) as User;
}

// ********

// create
async function createUser(user: User, url: string, jwt: string): Promise<User> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${jwt}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) throw new Error(response.statusText);

  return (await response.json()) as User;
}

// ********

// update
async function editUser(
  id: number,
  user: User,
  url: string,
  jwt: string,
): Promise<User> {
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${jwt}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) throw new Error(response.statusText);

  return (await response.json()) as User;
}

// ********

// delete
async function deleteUser(id: number, url: string, jwt: string): Promise<User> {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${jwt}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) throw new Error(response.statusText);

  return (await response.json()) as User;
}
