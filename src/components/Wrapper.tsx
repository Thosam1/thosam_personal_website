import React, {ReactNode} from 'react';

export const Wrapper = ({children}: { children: ReactNode }) => {
    return (
        <div className="container mx-auto pt-16 pb-8 px-8">
            <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-2/3 ml-auto mr-auto text-left">
                    {children}
                </div>
            </div>
        </div>
    );
};
