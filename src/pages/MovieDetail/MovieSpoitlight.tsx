import { FC } from 'react';
import { BiPlay } from 'react-icons/bi';

export interface MovieSpoitlightProps {
    img: string;
}

const MovieSpoitlight: FC<MovieSpoitlightProps> = ({ img }) => {
    return (
        <div className="movie-spoitlight h-72 relative ">
            <img src={img} alt="image Default" className="h-full w-full rounded-2xl" />
            <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <BiPlay size="3.6rem" className="m-auto bg-transparent-white rounded-full " />
                <div className="text-xl">Watch Now</div>
            </div>
        </div>
    );
};

export default MovieSpoitlight;