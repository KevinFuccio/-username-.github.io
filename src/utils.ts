export const PJ_1 = `This is my first ever project using HTML,CSS and JavaScript, it's a simple quiz game where you can see the score at the end of the questionary`
export const PJ_2 = "This is one of my first projects using React during my bootcamp, very challenging but enjoyable experience, you can select movies and see all the informations and rating."
export const PJ_3 = "This is a Spotify Clone using React, this project was an enjoyable experience because I was collaborating with other developers."
export const PJ_4 = `This is my final project of my bootcamp, it's a complete e-commerce website using React TypeScript on the client side and Java with Springboot on the server side, you can select the products and pay with PayPal.`

export const scrollToElement = (id:string) => {
    const container = document.getElementById(id);
    container?.scrollIntoView({ behavior: "smooth" });
};