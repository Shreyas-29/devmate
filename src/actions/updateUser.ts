import { db } from "@/lib/db";

const updateUser = async (userId: string, slug: string) => {
    try {
        const user = await db.user.update({
            where: {
                id: userId,
            },
            data: {
                problems: {
                    connect: {
                        slug: slug,
                    },
                },
            },
        });
        console.log(`User with ID ${userId} updated with problem ${slug}`);
        return user;
    } catch (error) {
        console.error(error);
    }
};

export default updateUser;