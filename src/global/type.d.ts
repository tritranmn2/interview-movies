import { ReactNode } from 'react';

export interface Props<T> {
    item: T;
    children?: ReactNode;
    onClick?: () => void;
}
