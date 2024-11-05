"use client";

import { DVD } from "./DVD";

export const DVDContainer = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-full">
      <p>src/app/Components/DVD haraad uz</p>
      {/* //! Static bish Relative shuu */}
      <div className="w-[800px] h-[600px] bg-black relative">
        <DVD w={800} h={600} speed={[1, 1]}></DVD>
      </div>
    </div>
  );
};
