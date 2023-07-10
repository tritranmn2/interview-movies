import { BiBell, BiBox } from 'react-icons/bi';
import avt from './goku.png';
export interface ProfileItem {
    lable: String;
    icon: JSX.Element;
    link: String;
}
const profileItems = [
    { lable: 'noti', icon: <BiBell size="2rem" />, link: '' },
    { lable: 'box', icon: <BiBox size="2rem" />, link: '' },
    { lable: 'avt', icon: <img src={avt} alt="avt" className="rounded-full h-9 w-9" />, link: '' },
];

const Profile = () => {
    return (
        <ul className="flex justify-between items-center">
            {profileItems.map((item, index) => {
                return (
                    <li key={index} className="mx-3 p-2 bg-light-black rounded-full">
                        <a href={item.link}>{item.icon}</a>
                    </li>
                );
            })}
        </ul>
    );
};

export default Profile;
