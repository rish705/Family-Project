var images = ["92d4a69f-1905-4ac6-a25a-6c0f7bc1526b.png",
    "images.jpg",
    "download copy.jpg",
    "MairahPhoto.jpg"
]
var names = ["family book", "Risshit", "Mom", "Dad", "Sister"]
var i = 0;

function update() {
    i++;
    var numbers_of_family_member_in_array = 4
    if (i > numbers_of_family_member_in_array) { i = 0; }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_picture").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}