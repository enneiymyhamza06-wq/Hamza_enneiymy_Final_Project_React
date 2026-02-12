import React from "react";
import { imgg } from "../constants/imags";


function About() {
    return (
         <section className=" py-16">
             <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
             <div className="w-[90%] h-[100%] bg-indigo-400">
                    <img
                        src={imgg.shopItem4}
                        alt="Our story" className="w-full h-[100%] object-cover" />
                </div>
                 <div>
                    <h2 className="text-3xl font-semibold mb-6"> Our story </h2>
    <p className="text-gray-600 leading-7 mb-4">
                        Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida loren elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum,
                        turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
            </p>
            <div className="bg-gray-200 p-6 border-l-4 border-gray-400">
                        <p className="text-gray-700 italic mb-2">
                       Creativity is just connecting things. When you ask creative people how they did something, they feel a 
                       little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
                         </p>
 <span className="text-gray-600 text-sm"> - Steve Jobs</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
