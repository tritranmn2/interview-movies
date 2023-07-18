import { FC, ReactNode } from 'react';
export interface CategoryProps {
    children: ReactNode;
}

const categories: string[] = ['Dramma', 'Action', 'Anime'];

export const Category: FC<CategoryProps> = ({ children }) => {
    return <div className="px-2 py-1 mr-2  border border-gray-500  rounded-xl text-sm">{children}</div>;
};
const Categories: FC = () => {
    return (
        <div className="movie-categories flex items-center mt-2">
            {categories.map((category) => {
                return <Category>{category}</Category>;
            })}
        </div>
    );
};

export default Categories;
