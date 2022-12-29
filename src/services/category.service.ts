import Category from '../models/category'

export const getAllCategories = async (limit: number, from: number) => {

    const query = { status: true }

    try {

        const resp = await Promise.all([
            Category.countDocuments(query),
            Category.find(query)
                .skip(from)
                .limit(limit)
        ]);

        const [total, categories] = resp
        return { total, categories }
    } catch (error) {
        console.log(error);
        return {}
    }

}