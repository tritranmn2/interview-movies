import { FC } from 'react';
import { BiSolidStar } from 'react-icons/bi';

export interface MovieInfo {
    name: string;
    star: string;
    img: string;
    link: string;
}

export interface MovieProps {
    item: MovieInfo;
}

const Movie: FC<MovieProps> = ({ item }) => {
    let { name, star, img, link } = item;
    return (
        <li className="movie  w-1/5 px-2 my-2">
            <a href={link} className="relative">
                <img src={img} alt="default_img" className="movie_img w-full rounded-xl" />
                <div className="movie_name absolute bottom-2 left-2 font-light line-clamp-2 overflow-hidden whitespace-normal">
                    {name}
                </div>
                <div className="movie_rate absolute top-0 right-0 p-2 rounded-tr-xl rounded-bl-3xl text-xs flex bg-transparent-white">
                    <BiSolidStar size="14" className="text-yellow-400 mx-1" /> {star}
                </div>
            </a>
        </li>
    );
};

export default Movie;
