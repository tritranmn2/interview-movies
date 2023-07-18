import { FC, ReactNode } from 'react';
import MovieSpoitlight from './MovieSpoitlight';
import Categories from './Categories';
import MovieActors from './MovieActors';
import Comments from './Comments';
import MovieSimilars from './MovieSimilars';
import { useLocation } from 'react-router-dom';
import { MovieProps } from '../Movie';

const Index: FC = () => {
    const location = useLocation();
    const { item } = location.state as MovieProps;
    const { name, img, star, link, decription } = item;
    return (
        <div>
            <MovieSpoitlight img={img} />
            <div className=" grid grid-cols-3 gap-3">
                <div className="detail-movie col-span-2 mx-2">
                    <Categories />
                    <div className="movie-title text-xl mt-2">{name}</div>
                    <div className="movie-description font-light">{decription}</div>
                    <MovieActors />
                    <Comments />
                </div>
                <MovieSimilars />
            </div>
        </div>
    );
};

export default Index;
