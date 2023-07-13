import { FC } from 'react';
import comment_avt from './tom_cruise.jpg';
import { BiLike, BiReply } from 'react-icons/bi';
export const Comment: FC = () => {
    return (
        <div className="comment p-2 border-gray-400 border-b flex ">
            <img className="comment__avt h-16" src={comment_avt} alt="comment-avt" />
            <div className="comment__content ml-3">
                <div className="comment__author text-blue-900 font-semibold ">Tri Nguyen</div>
                <div className="comment__text font-light">Phim hay lam</div>
                <div className="comment__actions flex">
                    <div className="action__like flex text-sm font-light mr-2">
                        <BiLike size="1.2rem" />
                        <span className="ml-1">Like</span>
                    </div>
                    <div className="action__reply flex text-sm font-light">
                        <BiReply size="1.2rem" />
                        <span className="ml-1">Reply</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Comments: FC = () => {
    return (
        <div className="comments-container bg-transparent-white p-2 mt-2 rounded-md">
            <div className="flex">
                <div className="bg-primary rounded-md p-2 mr-2">All Comments</div>
                <div className=" rounded-md p-2 mr-2">Comments One Chapter</div>
            </div>
            <div className="comments mt-2">
                <Comment />
                <Comment />
            </div>
        </div>
    );
};

export default Comments;
