import { kebabCase } from 'lodash';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export interface NavItemType {
    lable: string;
    icon: JSX.Element;
}

export interface NavItemProps {
    item: NavItemType;
    isActive: boolean;
    onClick: () => void;
}

const NavItem: FC<NavItemProps> = ({ item, isActive, onClick }) => {
    const { lable, icon } = item;
    const homeHashtag = kebabCase(lable);

    return (
        <li className="nav-item" onClick={onClick}>
            <a
                href={`/#${homeHashtag}`}
                className={`flex justify-start items-center pl-12 font-semibold h-20 text-xl cursor-pointer ${
                    isActive ? 'bg-primary text-white' : 'text-grey-white'
                }`}
            >
                {icon}
                <span>{lable}</span>
            </a>
        </li>
    );
};

export default NavItem;
