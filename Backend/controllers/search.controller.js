import { User } from "../models/user.model.js";
import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function searchPerson(req, res) {
    const { query } = req.params;

    try {
        const response = fetchFromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}&language=en-US&page=1`);

        if (response.results.length === 0) {
            return res.status(404).send(null);
        };

        await User.findByIdAndUpdate(req.user._id, {
            $push:{
                searchHistory: {
                    id:response.results[0].id,
                    image:response.results[0].profile_path,
                    title:response.results[0].name,
                    serachType:"person",
                    createdAt: new Date(),
                }
            }
        })

        res.status(200).json({ success: true, content: response.results});
    } catch (error) {
        console.log("Error in serachPerson controller: ", error.message);
        res.status(500).json({ success: false, message: "Internal Server error"});
    }
};

export async function serachMovie(req, res) {
    const { query } = req.params;

    try {
        const response = fetchFromTMDB(`https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`);

        if(!response.results.length === 0) {
            res.status(404).send(null);
        }

        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                searchHistory: {
                    id: response.results[0].id,
                    image: response.results[0].poster_path,
                    title: response.results[0].title,
                    searchType: "movie",
                    createdAt: new Date(),
                },
            },
        });

        res.status(200).json({ success: true, content: response.results})
    } catch (error) {
        console.log("Error in serachPerson controller: ", error.message);
        res.status(500).json({ success: false, message: "Internal Server error"});
    }
};

export async function serachTv(req, res) {

};