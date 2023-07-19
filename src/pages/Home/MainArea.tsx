import { FC } from 'react';
import movie_img from '../../assets/img/movie_default.jpg';
import Movie from '../../components/Movie';
import { kebabCase } from 'lodash';
export interface MainAreaProps {
    type: string;
}

const movies = [
    { name: 'Avatar 1', star: '4.8', img: movie_img, decription: 'lorem' },
    { name: 'Avatar 2', star: '4.8', img: movie_img, decription: 'lorem' },
    { name: 'Avatar 3', star: '4.8', img: movie_img, decription: 'lorem' },
    { name: 'Avatar 4', star: '4.8', img: movie_img, decription: 'lorem' },
    { name: 'Avatar 55555555555555555555 455555', star: '4.8', img: movie_img, decription: 'lorem' },
];

export const MovieContainer: FC = () => {
    return (
        <>
            {movies.map((item, index) => {
                return <Movie item={item} className="w-1/5" key={index} />;
            })}
        </>
    );
};

const MainArea: FC<MainAreaProps> = ({ type }) => {
    const homeHashtag = kebabCase(type);

    return (
        <div className="my-6" id={homeHashtag}>
            <div className="my-1 text-lg font-semibold">{type}</div>
            <ul className="movie_list flex flex-wrap -mx-2">
                <MovieContainer />
            </ul>
        </div>
    );
};

export default MainArea;
