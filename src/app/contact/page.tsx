import { LoaderCircle } from 'lucide-react';
import React, { Suspense } from 'react';
import CreateMessageModule from './_components/CreateMessageModule';

const CreateMessage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex size-full min-h-dvh items-center justify-center">
          <LoaderCircle className="animate-spin transition-all duration-300 ease-in-out" />
        </div>
      }
    >
      <CreateMessageModule />
    </Suspense>
  );
};

export default CreateMessage;
