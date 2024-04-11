import React from 'react';

interface SkillCardProps {
    name: string;
    image: string;
    link: string;
    description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, image, link, description }) => {
    return (
        <div className='flex flex-row items-center border rounded-xl p-2 transition-transform ease-out hover:scale-95'>
            <img src={image} alt={name} className="w-10 h-10 ml-2 mr-6" />

            <div className='flex flex-col'>
                <p className='font-bold'>{name}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SkillCard;
