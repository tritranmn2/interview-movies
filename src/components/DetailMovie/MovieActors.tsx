import { FC } from 'react';
import avt_actor from './tom_cruise.jpg';

export interface Actor {
    avt: string;
    name: string;
}

export interface ActorProps {
    item: Actor;
}

export interface MovieActorsProps {
    movieActors: ActorProps[];
}

const actors = [
    { avt: avt_actor, name: 'Tom Cruise' },
    { avt: avt_actor, name: 'Tom Cruise' },
    { avt: avt_actor, name: 'Tom Cruise' },
    { avt: avt_actor, name: 'Tom Cruise' },
];

export const Actor: FC<ActorProps> = ({ item }) => {
    const { avt, name } = item;
    return (
        <div className="w-1/4 p-2">
            <img src={avt} alt="" className="w-full" />
            <div className="actor-name text-center font-light">{name}</div>
        </div>
    );
};

const MovieActors: FC = () => {
    return (
        <div className="movie-actors mt-2">
            <div className="topic text-xl">Actors</div>
            <div className="flex flex-wrap -mx-2">
                {actors.map((item, index) => {
                    return <Actor item={item} key={index} />;
                })}
            </div>
        </div>
    );
};

export default MovieActors;
