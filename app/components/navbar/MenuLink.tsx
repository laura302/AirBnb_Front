'use client';

interface ManuLinkProps {
    label: string;
    onClick: () => void;
}

const MenuLink: React.FC<ManuLinkProps> = ({
    label,
    onClick
}) => {
    return (
        <div 
        onClick={onClick}
        className="px-5 py-4 cursor-pointer hover:bg-gray-100 translate-x-0">
            {label}
        </div>
    )
}

export default MenuLink;