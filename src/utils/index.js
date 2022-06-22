exports.addFilm = async (collection, filmObj) => {
    try {
        const addEntry = await collection.insertOne(filmObj);
        console.log(addEntry);
    } catch (error) {
        console.log(error);
    }
};

exports.listFilms = async (collection) => {
    try {
        const filmList = await collection.find().toArray();
        console.log(filmList);
    } catch (error) {
        console.log(error);
    }
};

exports.deleteFilm = async (collection, toDelete) => {
    try{
        const deleteTitle = {title:toDelete};
        const filmDelete = await collection.deleteOne(deleteTitle);
        console.log(filmDelete);
    }
    catch (error){
        console.log(error);
    }
};
