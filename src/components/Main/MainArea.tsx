import { FC } from 'react';
import movie_img from './movie_img.jpg';
import Movie from '../Movie';
export interface MainAreaProps {
    type: string;
}
const movies = [
    { name: 'Avatar 1', star: '4.8', img: movie_img, link: '#', decription: 'd1' },
    { name: 'Avatar 2', star: '4.8', img: movie_img, link: '#', decription: 'd2' },
    { name: 'Avatar 3', star: '4.8', img: movie_img, link: '#', decription: 'd3' },
    { name: 'Avatar 4', star: '4.8', img: movie_img, link: '#', decription: 'd4' },
    { name: 'Avatar 55555555555555555555 455555', star: '4.8', img: movie_img, link: '#', decription: 'lorem' },
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
    return (
        <div className="my-6" id={type}>
            <div className="my-1 text-lg font-semibold">{type}</div>
            <ul className="movie_list flex flex-wrap -mx-2">
                <MovieContainer />
            </ul>
        </div>
    );
};

export default MainArea;
