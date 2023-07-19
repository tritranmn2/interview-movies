import { FC, ReactNode } from 'react';
import { BiPlay, BiInfoCircle } from 'react-icons/bi';
interface ButtonProps {
    children: ReactNode;
}
export const Button: FC<ButtonProps> = ({ children }) => {
    return <div className=" flex items-center bg-transparent-white rounded-lg p-2 mx-1">{children}</div>;
};

const HomeSpoitlight: FC = () => {
    return (
        <div className="h-72 relative " id="Home">
            <img
                src="https://alkony.enerla.net/images/film/Moonfall-2022-1.jpg"
                alt="image Default"
                className="h-full w-full rounded-2xl"
            />
            <div className="flex items-center text-white  absolute bottom-2 right-2">
                <Button>
                    <BiPlay size="1.2rem" /> Play
                </Button>
                <Button>
                    <BiInfoCircle size="1.2rem" /> More Infor
                </Button>
            </div>
        </div>
    );
};

export default HomeSpoitlight;
