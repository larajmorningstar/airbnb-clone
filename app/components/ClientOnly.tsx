/* Hi if you are here you are probably viewing the code of my project for potential hiring... I just wanted to explain this file:

Client Only file coded for hydration error that app folders have been recieving.

Without this file the interface is hit with a error when spamming reload and trying to interact with a button 

This error may be fixed in future next.js updates so this may become not needed.*/

'use client';

import React, { useState, useEffect } from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ 
  children
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
      setHasMounted(true);
  }, [])

  if (!hasMounted) return null;

  return (
    <>
      {children}
    </>
  );
};

export default ClientOnly;