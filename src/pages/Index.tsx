import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';
import { listPostsThunk } from '../features/post.slice';
import { useEffect } from 'react';

export default function Home() {
    const { posts, status } = useSelector((state: RootState) => state.post);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        console.log('listPostsThunk change');

        dispatch(listPostsThunk());
    }, []);

    return (
        <div className="flex flex-col w-full gap-4 items-center">
            <div>Status: {status.toUpperCase()}</div>

            <ul className="w-full max-w-[600px] flex flex-col gap-4">
                {posts.map((post) => (
                    <div className="p-6 rounded-xl border shadow-sm" key={post.id}>
                        <p className="text-lg font-bold mb-2">{post.title}</p>
                        <p className="text-sm">{post.body}</p>
                    </div>
                ))}
            </ul>
        </div>
    );
}
