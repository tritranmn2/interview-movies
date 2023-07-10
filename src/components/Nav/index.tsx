import { FC, useState } from 'react';
import NavItem from './NavItem';
import { BiCalendar, BiCameraMovie, BiGroup, BiHome, BiLogOut, BiMoviePlay } from 'react-icons/bi';

const items = [
    { lable: 'Home', icon: <BiHome size="1.4rem" className="mx-1" />, active: true },
    { lable: 'Movies', icon: <BiCameraMovie size="1.4rem" className="mx-1" /> },
    { lable: 'TV Series', icon: <BiMoviePlay size="1.4rem" className="mx-1" /> },
    { lable: 'Upcoming', icon: <BiCalendar size="1.4rem" className="mx-1" /> },
    { lable: 'Friends', icon: <BiGroup size="1.4rem" className="mx-1" /> },
    { lable: 'Log out', icon: <BiLogOut size="1.4rem" className="mx-1" /> },
];

const ContainerNavItems: FC = () => {
    const [indexActive, setActive] = useState(() => 0);
    function handleItemClick(index: number) {
        items[indexActive].active = false;
        items[index].active = true;
        setActive(index);
    }
    return (
        <>
            {items.map((item, index) => {
                return <NavItem item={item} key={index} onClick={() => handleItemClick(index)} />;
            })}
        </>
    );
};

function Index() {
    return (
        <div className="nav-container col-span-2 bg-light-black">
            <nav className="sticky top-0 left-0 ">
                <a href="#" className="uppercase text-2xl text-primary flex justify-center py-8 cursor-pointer">
                    Movies
                </a>
                <ul>
                    <ContainerNavItems />
                </ul>
            </nav>
        </div>
    );
}

export default Index;
