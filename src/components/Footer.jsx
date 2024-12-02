import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full px-12 pt-12 pb-6 bg-violet-800 text-white flex flex-col gap-12">
        <section className="flex items-center gap-40">
            <div className="max-w-96 text-wrap">
                <div className="font-bold text-2xl">Swiftkart</div>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia obcaecati at perspiciatis similique reiciendis aliquam.</p>
            </div>
            <div className="flex gap-40">
                <div className="text-neutral-100 flex flex-col gap-2">
                    <h2 className="font-medium text-lg">Company</h2>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="hover:text-neutral-200">About</a>
                        <a href="#" className="hover:text-neutral-200">Services</a>
                        <a href="#" className="hover:text-neutral-200">Review</a>
                        <a href="#" className="hover:text-neutral-200">Contact</a>
                    </div>
                </div>
                <div className="text-neutral-100 flex flex-col gap-2">
                    <h2 className="font-medium text-lg">Resources</h2>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="hover:text-neutral-200">Help Center</a>
                        <a href="#" className="hover:text-neutral-200">Support</a>
                    </div>
                </div>
                <div className="text-neutral-100 flex flex-col gap-2">
                    <h2 className="font-medium text-lg">Social</h2>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="hover:text-neutral-200">Facebook</a>
                        <a href="#" className="hover:text-neutral-200">Linkedin</a>
                        <a href="#" className="hover:text-neutral-200">Twitter</a>
                        <a href="#" className="hover:text-neutral-200">Ratings</a>
                    </div>
                </div>
                <div className="text-neutral-100 flex flex-col gap-2">
                    <h2 className="font-medium text-lg">Legal</h2>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="hover:text-neutral-200">Privacy Policy</a>
                        <a href="#" className="hover:text-neutral-200">Terms & Conditions</a>
                        <a href="#" className="hover:text-neutral-200">Refund Policy</a>
                    </div>
                </div>
            </div>
        </section>
        <section className="text-center">&copy; Swiftkart 2024. All rights reserved.</section>
    </footer>
  )
}

export default Footer