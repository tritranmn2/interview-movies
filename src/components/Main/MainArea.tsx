import { FC } from 'react';
import Movie from './Movie';
import movie_img from './movie_img.jpg';
export interface MainAreaProps {
    type: string;
}
const movies = [
    { name: 'Avatar 5', star: '4.8', img: movie_img, link: '#' },
    { name: 'Avatar 5', star: '4.8', img: movie_img, link: '#' },
    { name: 'Avatar 5', star: '4.8', img: movie_img, link: '#' },
    { name: 'Avatar 5', star: '4.8', img: movie_img, link: '#' },
    { name: 'Avatar 55555555555555555555 455555', star: '4.8', img: movie_img, link: '#' },
];

export const MovieContainer: FC = () => {
    return (
        <>
            {movies.map((item, index) => {
                return <Movie item={item} key={index} />;
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
