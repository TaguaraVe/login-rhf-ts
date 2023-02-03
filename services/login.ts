type LoginProps = {
  email: string;
  password: string;
};
export const login = async (data: LoginProps) => {
  const fetchUsers = async (data: LoginProps) => {
    const response = await fetch('http:172.16.0.17:3500/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const a = await response.json();
    return a;
  };

  const respuesta = await fetchUsers(data);
  console.log('que esta retornando', respuesta);

  return respuesta;
};
