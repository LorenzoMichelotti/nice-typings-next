export function TextInput({ children, ...input }) {
  return <input
  className='p-2 w-full my-1 border-2 rounded outline-none transition-all focus:ring-4 ring-opacity-50 ring-gray-200'
  {...input}
  type="text"
  />;
}

export function PasswordInput({ ...input }) {
  return <input
  className='p-2 w-full my-1 border-2 rounded outline-none transition-all focus:ring-4 ring-opacity-50 ring-gray-200'
  {...input}
  type="password"
  placeholder='password' />;
}

export function EmailInput({ ...input }) {
    return <input
    className='p-2 w-full my-1 border-2 rounded outline-none transition-all focus:ring-4 ring-opacity-50 ring-gray-200'
    {...input}
    type="email"
    placeholder='email' />;
  }