import { FC, useState } from 'react';
import NavItem, { NavItemType } from './NavItem';
import { BiCalendar, BiCameraMovie, BiGroup, BiHome, BiLogOut, BiMoviePlay } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const items: Array<NavItemType> = [
    { lable: 'Home', icon: <BiHome size="1.4rem" className="mx-1" /> },
    { lable: 'Movies', icon: <BiCameraMovie size="1.4rem" className="mx-1" /> },
    { lable: 'TV Series', icon: <BiMoviePlay size="1.4rem" className="mx-1" /> },
    { lable: 'Upcoming', icon: <BiCalendar size="1.4rem" className="mx-1" /> },
    { lable: 'Friends', icon: <BiGroup size="1.4rem" className="mx-1" /> },
    { lable: 'Log out', icon: <BiLogOut size="1.4rem" className="mx-1" /> },
];

const ContainerNavItems: FC = () => {
    const [indexActive, setActive] = useState<number>(() => 0);
    return (
        <>
            {items.map((item, index) => {
                return (
                    <NavItem
                        item={item}
                        key={index}
                        isActive={indexActive === index}
                        onClick={() => setActive(index)}
                    />
                );
            })}
        </>
    );
};

const Nav: FC = () => {
    return (
        <div className="nav-container col-span-2 bg-light-black">
            <nav className="sticky top-0 left-0 ">
                <Link to="/" className="uppercase text-2xl text-primary flex justify-center py-8 cursor-pointer">
                    Movies
                </Link>
                <ul>
                    <ContainerNavItems />
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
