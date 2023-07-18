import { FC } from 'react';
import { kebabCase } from 'lodash';

import { BiSolidStar } from 'react-icons/bi';
import { Props } from 'type';
import { Link } from 'react-router-dom';

export interface MovieType {
    name: string;
    star: string;
    img: string;
    link: string;
    decription: string;
}

export interface MovieProps extends Props<MovieType> {
    className?: string;
}

const Index: FC<MovieProps> = ({ item, className }) => {
    let { name, star, img, link, decription } = item;
    const slug = kebabCase(name);
    return (
        <li className={`movie ${className} p-2`}>
            <Link to={`/movie-detail/${slug}`} state={{ item: item }} className="relative">
                <img src={img} alt="default_img" className="movie_img w-full rounded-xl" />
                <div className="movie_name absolute bottom-2 left-2 font-light line-clamp-2 truncate w-11/12">
                    {name}
                </div>
                <div className="movie_rate absolute top-0 right-0 p-2 rounded-tr-xl rounded-bl-3xl text-xs flex bg-transparent-white">
                    <BiSolidStar size="14" className="text-yellow-400 mx-1" /> {star}
                </div>
            </Link>
        </li>
    );
};
export default Index;
