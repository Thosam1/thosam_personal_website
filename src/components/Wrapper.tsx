import React, {ReactNode} from 'react';

export const Wrapper = ({children}: { children: ReactNode }) => {
    return (
        <div className="container max-w-300 mx-auto pt-16 pb-8 px-8">
            <div className="items-center flex flex-wrap">
                <div className="w-full ml-auto mr-auto text-left no-underline"> 
                    {children}
                </div>
            </div>
        </div>
    );
};
