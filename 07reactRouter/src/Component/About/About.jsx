import  myPhoto  from "../../assets/myPhoto.png"
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-40">
                    <div className="md:3/12 lg:w-3/12 ">
                        <img className="rounded-lg"
                            src={myPhoto}
                            alt="image"
                        />
                    </div>
                    <div className="md:8/12 lg:w-7/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl rounded-md ">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        I am Nitin Sanodiya. I have an interest in Front-End Development and I constantly seeking to engage
                        my knowledge to learn something useful and keep challenging myself to be a better performer. Good
                        and quick learner, and team player, loves to learn new things and explore different technologies
                        </p>
                        <p className="mt-4 text-gray-600">
                        With proficiency in C++, HTML, CSS, JavaScript, SQL, MySQL, and hands-on experience with tools like ReactJS, MongoDB, and Postman, I am well-prepared to take on challenges in both front-end and full-stack development. I am especially skilled in working with RESTful APIs and have a solid understanding of web development fundamentals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


