import prisma from '@/lib/prisma';
import { success } from '@/lib/response.helper';
const GET = async (req: any) => {
    console.log("Hello world")
    return Response.json({ test: "Hello world" })
}

const POST = async (request: any) => {
    const requestData = await request?.json();
    const post = await prisma.post.create({ data: requestData });
    if (!post) {
        Response.error();
    }
    return Response.json(success(post));
}

export { GET, POST }