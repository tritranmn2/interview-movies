import { FC } from 'react';
import { BiBookmark, BiHeart, BiShareAlt, BiSolidStar, BiStar } from 'react-icons/bi';
import { Props } from 'type';
import movie_img from './movie_img.jpg';
import Movie from '../Movie';

export interface OperationType {
    label: string;
    icon: JSX.Element;
}

export interface HistoryType {
    name: string;
    time: string;
}

export type OperationProps = Props<OperationType>;
export type HistoryProps = Props<HistoryType>;

const operations = [
    { label: 'tym', icon: <BiHeart size="1.6rem" /> },
    { label: 'follow', icon: <BiBookmark size="1.6rem" /> },
    { label: 'share', icon: <BiShareAlt size="1.6rem" /> },
];

const movies = [
    { name: 'Avatar 5', star: '4.8', img: movie_img, link: '#' },
    { name: 'Avatar 5', star: '4.8', img: movie_img, link: '#' },
    { name: 'Avatar 5', star: '4.8', img: movie_img, link: '#' },
    { name: 'Avatar 55555555555555555555', star: '4.8', img: movie_img, link: '#' },
];

const histories: HistoryType[] = [
    { name: 'Avatar 5', time: '11 day before' },
    { name: 'Avatar 5', time: '11 day before' },
    { name: 'Avatar 5', time: '11 day before' },
    { name: 'Avatar 555555555555555555555555', time: '11 day before' },
];

export const Operation: FC<OperationProps> = ({ item }) => {
    const { icon } = item;
    return (
        <a href="#" className="mr-2 ">
            {icon}
        </a>
    );
};

export const History: FC<HistoryProps> = ({ item }) => {
    const { name, time } = item;
    return (
        <a href="#" className="p-1 flex border-b border-gray-400 ">
            <div className="w-24 mr-4 truncate">{name}</div>
            <div className="text-grey-white">{time}</div>
        </a>
    );
};

const MovieSimilars: FC = () => {
    return (
        <div className=" col-span-1 ">
            <div className=" flex justify-center mt-2 text-grey-white">
                <div className="operations flex">
                    {operations.map((item, index) => {
                        return <Operation item={item} key={index} />;
                    })}
                </div>
                <div className="ml-4 flex  items-center">
                    <BiSolidStar size="1.4rem" className="text-yellow-400" />
                    <span className="text-white  ">8.5</span>
                    <span className="before:text-white before:pr-2 before:border-r before:text-xs text-sm ">165k</span>
                </div>
            </div>
            <div className="similars ">
                <div className="bg-transparent-white p-2 mt-2 rounded-xl">
                    <div className="text-lg ">Similars</div>
                    <ul className=" flex flex-wrap -mx-2">
                        {movies.map((item, index) => {
                            return <Movie item={item} className="w-1/2" key={index} />;
                        })}
                    </ul>
                </div>
                <div className="histories bg-transparent-white p-2 mt-2 rounded-xl">
                    <div className="text-lg ">Histories</div>
                    <ul>
                        {histories.map((item, key) => {
                            return <History item={item} key={key} />;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MovieSimilars;
