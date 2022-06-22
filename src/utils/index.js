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

exports.deleteFilm = async (collection, filmObj) => {
    try{
        const deleteFilm = await collection.deleteOne(filmObj);
        console.log(deleteFilm);
    }
    catch (error){
        console.log(error);
    }
};

exports.updateFilm = async (collection, oldTitle,newFilm) => {
    try{
        const checkTitle = {title:oldTitle};
        const updateTo = {$set:{title:newFilm.title,actor:newFilm.actor,imdbRating:newFilm.imdbRating}};
        const updateFilm = await collection.updateOne(checkTitle,updateTo);
        console.log(updateFilm);
    }
    catch (error){
        console.log(error);
    }
}
