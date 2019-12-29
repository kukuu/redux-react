/*
 * The topics list reducer will always return an array of lists no matter what
 * You need to return something, so if there are no lists then we return an empty array
 * Can load data on page load with AJAX or http Client
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Feature 1",
            description: "Model -  Chrissy Teigen - Car 1",
            thumbnail: "https://cdn.carbuzz.com/gallery-images/840x560/474000/500/474536.jpg",
            seats: "Seats - 2",
            colour: "Colour - red"
        },
        {
            id: 2,
            first: "Feature 2",
            description: "Model - Think Southern - Car 2",
            thumbnail: "https://www.autoguide.com/blog/wp-content/uploads/2015/08/Nissan-R390-GT1.jpg",
            seats:"Seats - 4",
            colour: "Colour - blue"

        },
        {
            id: 3,
            first: "Feature 3",
            description: "Model - Ottolenghi - Car 3",
            thumbnail: "https://hips.hearstapps.com/roa.h-cdn.co/assets/cm/14/47/1280x782/546b6eac1d833_-_2013-nissan-z-lg.jpg?resize=480:*",
            seats: "Seats - 1",
            colour: "Colour - grey"
        }
        
    ]
}


