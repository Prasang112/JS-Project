
import Category from "../model/category.model.js";

export const deleteCategory = (request, response, next) => {
    let categoryId = request.body.categoryKiId;
    // console.log(request);
    Category.delete(categoryId).then(result => {
        return response.status(200).json({ message: "Category deleted" });

    }).catch(err => {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error" });
    })
}

export const getCategoryById = (request, respone, next) => {
    let categoryId = request.body.categoryId;
    Category.getCategoryById(categoryId)
        .then(result => {
            console.log(result);
            return respone.status(200).json({ data: result });
        }).catch(err => {
            console.log(err);
            return respone.status(500).json({ error: "Internal Server error" });
        });
}

export const saveCategory = (request, response, next) => {
    let categoryName = request.body.categoryName;
    
    let category = new Category(null, categoryName);

    category.save()
        .then(result => {
            return response.status(201).json({ message: "Catrgory saved" });
        }).catch(err => {
            return response.status(500).json({ error: "Internal Server Error" });
        })
}

export const categoryList = (request, response, next) => {
    Category.list()
        .then(result => {
            console.log(result);
            if (result.length)
                return response.send(result);
            
            return respone.status(201).json({ Message: "categories ", data: ({ result }) })
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" });
        });
} 