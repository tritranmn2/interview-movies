import { FC, ReactNode } from 'react';
import { BiPlay } from 'react-icons/bi';
import MovieSpoitlight from './MovieSpoitlight';
import Categories from './Categories';
import MovieActors from './MovieActors';
import Comments from './Comments';

const Index: FC = () => {
    return (
        <div className="">
            <MovieSpoitlight />
            <div className=" grid grid-cols-3 gap-3">
                <div className="detail-movie col-span-2 mx-2">
                    <Categories />
                    <div className="movie-title text-xl mt-2">Avartar</div>
                    <div className="movie-description font-light">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, fugiat eveniet. Architecto
                        officia asperiores quidem necessitatibus dignissimos, rem eveniet vel eum voluptatibus numquam.
                        Corporis aliquam repellat, eum quas odit iste!
                    </div>
                    <MovieActors />
                    <Comments />
                </div>
                <div className=" col-span-1">
                    <div className="operations">tym share</div>
                    <div className="similars">movie 1 movie2</div>
                </div>
            </div>
        </div>
    );
};

export default Index;
