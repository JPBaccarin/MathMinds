import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica para autenticação de usuário usando Axios e backend

    // Exemplo simplificado
    if (email === 'user@example.com' && password === 'password') {
      // Redirecionar para a página do perfil do aluno
      console.log('Usuário autenticado com sucesso!');
    } else {
      console.log('Credenciais inválidas!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-300 dark:bg-gray-900">
      <div className="max-w-md w-full mx-auto p-8 bg-stone-100 dark:bg-gray-800 rounded-md shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-4">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex items-center dark:border-gray-600 dark:bg-gray-700 border rounded-md p-2 transition duration-300 dark:text-white">
            <FiMail className="text-gray-500 dark:text-gray-300" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="ml-2 flex-grow focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 dark:bg-gray-700"
              placeholder="Email"
            />
          </div>
          <div className="flex items-center dark:border-gray-600 dark:bg-gray-700 border rounded-md p-2 transition duration-300 dark:text-white">
            <FiLock className="text-gray-500 dark:text-gray-300" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="ml-2 flex-grow focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 dark:bg-gray-700"
              placeholder="Senha"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-red-500 hover:bg-red-600 focus:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 transform-gpu hover:scale-105 focus:scale-105"
          >
            Entrar
          </button>
        </form>
        <p className="text-center mt-4 text-gray-700 dark:text-gray-300">
          Ainda não tem uma conta?{' '}
          <Link to="/signup" className="text-red-500 hover:text-red-700 font-bold">
            Registre-se
          </Link>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
