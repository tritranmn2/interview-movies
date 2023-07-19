import { BiSearch } from 'react-icons/bi';
import Profile from './Profile';

const Header = () => {
    return (
        <div className="flex items-center justify-between my-4">
            <div className="flex items-center font-medium text-xl bg-light-black text-grey-white rounded-3xl h-16 w-3/5 px-4 ">
                <BiSearch size="2rem" className="mx-2" />
                <input className="w-full bg-inherit " type="text" placeholder="Search for movies, TV shows..." />
            </div>
            <Profile />
        </div>
    );
};

export default Header;
