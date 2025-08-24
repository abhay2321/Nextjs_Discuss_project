// import React from 'react'
// import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
// import { PostWithData } from '@/lib/query/post'

// type PostListProps = {
//     fetchData: () => Promise<PostWithData[]>
// }

// const PostList : React.FC<PostListProps> = async ({fetchData}) => {
//     const posts = await fetchData();
     
//     console.log(posts);
    

//   return (
//     <div className='flex flex-col gap-2'>
//         {
//             posts.map((post) => (
//                 <Card key={post.id}>
//                     <CardHeader>
//                         <CardTitle>{post.title}</CardTitle>
//                         <CardDescription className='flex items-center justify-between'>
//                             <h1>By {post.user.name}</h1>
//                             <h1>{post._count.comments} comments</h1>
//                         </CardDescription>
//                     </CardHeader>
//                 </Card>
//             ))
//         }
//     </div>
//   )
// }

// export default PostList

// src/components/posts/post-list.tsx
import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { type PostWithData } from '@/lib/query/post';
import Link from 'next/link'; // 1. Import the Link component

type PostListProps = {
    fetchData: () => Promise<PostWithData[]>
}

const PostList: React.FC<PostListProps> = async ({ fetchData }) => {
    const posts = await fetchData();

    return (
        <div className='flex flex-col gap-2'>
            {posts.map((post) => (
                // 2. Wrap the Card with the Link component
                <Link key={post.id} href={`/topics/${post.topic.slug}/posts/${post.id}`}>
                    <Card className="hover:border-gray-400 transition-colors">
                        <CardHeader>
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription className='flex items-center justify-between'>
                                <span>By {post.user.name}</span>
                                <span>{post._count.comments} comments</span>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </Link>
            ))}
        </div>
    );
}

export default PostList;