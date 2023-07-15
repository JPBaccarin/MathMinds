import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiCalendar } from 'react-icons/fi';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [birthdateError, setBirthdateError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    // Verificar se todos os campos estão preenchidos
    let formIsValid = true;

    if (!name) {
      setNameError('Por favor, preencha o nome');
      formIsValid = false;
    } else {
      setNameError('');
    }

    if (!birthdate) {
      setBirthdateError('Por favor, selecione a data de nascimento');
      formIsValid = false;
    } else {
      setBirthdateError('');
    }

    if (!email) {
      setEmailError('Por favor, preencha o email');
      formIsValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Por favor, preencha a senha');
      formIsValid = false;
    } else {
      setPasswordError('');
    }

    if (!formIsValid) {
      return;
    }

    // Lógica para criação de conta usando Axios e backend

    // Exemplo simplificado
    console.log('Conta criada com sucesso!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-300 dark:bg-gray-900 accent-red-600">
      <div className="max-w-md w-full mx-auto p-8 bg-stone-100 dark:bg-gray-800 rounded-md shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-4">Criar Conta</h1>
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="flex items-center dark:border-gray-600 dark:bg-gray-700 border rounded-md p-2 transition duration-300 dark:text-white">
            <FiUser className="text-gray-500 dark:text-gray-300" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="ml-2 flex-grow focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 dark:bg-gray-700"
              placeholder="Nome"
            />
          </div>
          {nameError && (
            <p className="text-red-500 text-sm">{nameError}</p>
          )}
          <div className="flex items-center dark:border-gray-600 dark:bg-gray-700 border rounded-md p-2 transition duration-300 dark:text-white">
            <FiCalendar className="text-gray-500 dark:text-gray-300" />
            <input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
              className="ml-2 flex-grow focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 dark:bg-gray-700"
            />
          </div>
          {birthdateError && (
            <p className="text-red-500 text-sm">{birthdateError}</p>
          )}
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
          {emailError && (
            <p className="text-red-500 text-sm">{emailError}</p>
          )}
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
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}
          <button
            type="submit"
            className="block w-full bg-red-500 hover:bg-red-600 focus:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 transform-gpu hover:scale-105 focus:scale-105 mt-4"
          >
            Criar Conta
          </button>
        </form>
        <p className="text-center mt-4 text-gray-700 dark:text-gray-300">
          Já tem uma conta?{' '}
          <Link to="/login" className="text-red-500 hover:text-red-700 font-bold">
            Faça Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
