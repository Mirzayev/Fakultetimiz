import contactImage from '../assets/images/contact.jpg';

export default function Contact() {
    return (
        <div className="contact max-w-[1440px] mx-auto p-6 flex flex-col items-center bg-gray-50 min-h-screen">
            <div className="container mt-10 max-w-2xl bg-white shadow-xl rounded-xl p-8 border border-gray-200">
                <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">Contact Us</h3>
                <hr className="mb-6 border-gray-300" />

                <div className="flex justify-center mb-6">
                    <img className="w-2/3 rounded-lg shadow-md transition-transform transform " src={contactImage} alt="Contact" />
                </div>

                <form className="grid grid-cols-1 gap-6">
                    <div className="flex flex-col">
                        <label className="text-gray-500 mono  mb-1">First Name*</label>
                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-100 focus:border-blue-500 outline-none transition-shadow shadow-sm hover:shadow-md" placeholder="Enter your first name"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-500 mono  mb-1">Last Name*</label>
                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-100 focus:border-blue-500 outline-none transition-shadow shadow-sm hover:shadow-md" placeholder="Enter your last name"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-500 mono  mb-1">Email*</label>
                        <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-100 focus:border-blue-500 outline-none transition-shadow shadow-sm hover:shadow-md" placeholder="Enter your email"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-500 mono  mb-1">Message</label>
                        <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-100 focus:border-blue-500 outline-none transition-shadow shadow-sm hover:shadow-md resize-none" rows="4" placeholder="Write your message here..."></textarea>
                    </div>
                    <button type="submit" className="mt-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-transform transform hover:scale-101 shadow-md  cursor-pointer">Send Message</button>
                </form>
            </div>
        </div>
    );
}
