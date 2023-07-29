let nextBtn = document.querySelector('.next-btn')
let prevBtn = document.querySelector('.prev-btn')
let reviewBox = document.querySelector('.review-carousel')

let reviewArr = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:  "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:  "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:   "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    }
];

let index = 0;

nextBtn.addEventListener('click', function(){
    index++;
    if(index > reviewArr.length-1){
        index = 0;
    }
    cardTexts()
})

prevBtn.addEventListener('click',function(){
    index--;
    if(index < 0){
        index = reviewArr.length-1
    }
    cardTexts()
})


function cardTexts(){
    reviewBox.innerHTML = `<div class="img">
                                <img src="${reviewArr[index].img}" alt="">
                            </div>
                            <p class="name">${reviewArr[index].name}</p>
                            <p class="job-title">${reviewArr[index].job}</p>
                            <p class="explanation">${reviewArr[index].text}</p>                            `
}