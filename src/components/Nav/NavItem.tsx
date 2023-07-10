import { FC } from 'react';

export interface Item {
    lable: string;
    icon: JSX.Element;
    active?: boolean;
}

export interface NavItemProps {
    item: Item;
    onClick: () => void;
}

const NavItem: FC<NavItemProps> = ({ item, onClick }) => {
    const { lable, icon, active } = item;
    return (
        <li onClick={onClick}>
            <a
                href={`#${lable}`}
                className={`flex justify-start items-center pl-12 font-semibold h-20 text-xl cursor-pointer ${
                    active ? 'bg-primary text-white' : 'text-grey-white'
                }`}
            >
                {icon}
                <span>{lable}</span>
            </a>
        </li>
    );
};

export default NavItem;
