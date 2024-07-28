import { cookies } from 'next/headers';
import tokenServer from '@/app/api/_utils/token';
import prisma from '@/app/api/_utils/prisma';
import NotFound from '@/app/not-found';
import Deleter from '@/components/Deleter';

export default async function EditPostPage(params) {
    const { slug } = params.params;
    const cookieStore = cookies().get('usertoken');
    if (!cookieStore) {
        return (
            <div className='texts full overflow center'>
                <h3 className='center'>请先登录</h3>
            </div>
        );
    }

    let user;

    try {
        user = await tokenServer.verify(cookieStore.value);
    } catch (e) {
        console.log(e);
        return (
            <div className='texts full center'>
                <h3 className='center'>用户凭据失效，请重新登录</h3>
            </div>
        );
    }

    const post = await prisma.post.findUnique({
        where: { name: slug, userUid: user.uid },
        include: { content: false },
    });
    await prisma.$disconnect();

    if (!post) {
        return <NotFound />;
    }

    return (
        <>
            <Deleter name={post.name} title={post.title} />
        </>
    );
}
