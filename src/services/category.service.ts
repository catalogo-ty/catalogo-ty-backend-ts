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

export const getOneCategory = async (id: string) => {


    try {
        const category = await Category.findById(id);
        return category
    } catch (error) {
        console.log(error);
        return null
    }

}