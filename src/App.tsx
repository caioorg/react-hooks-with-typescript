import React, { useState, useMemo, useCallback, useRef } from 'react';

interface IUser {
  name: string,
  loging: string,
  avatar_url: string
}

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [users, setUsers] = useState<[IUser]>()

  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users])

  const greeting = useCallback((name: string) => {
    alert(`Hello ${name}`)
  }, [])

  inputRef.current?.focus()

  return (
    <form>
      <input type='text' ref={inputRef} />
    </form>
  )
}

export default App;
