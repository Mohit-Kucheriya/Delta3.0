export default function Tailwind() {
    return (
        <div className="mt-20 mx-52 flex flex-wrap border-purple-400	border-2 h-96 rounded-xl">
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-20 flex justify-center items-center text-3xl font-semibold w-full rounded-xl rounded-b-none	">News you can trust.</div>
            <div className="mt-6 w-full text-center">
                <h3 className="text-2xl font-semibold">Stay up to date with latest! </h3>
                <p className="text-xl font-regular italic mt-2 text-zinc-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, unde!</p>
                <form action="" className="flex flex-wrap">
                    <input type="email" placeholder="your@email.com" className="mx-60 my-2 p-2 bg-slate-200 w-full outline-none " />
                    <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full mx-60 my-2 p-1 font-semibold">Subscribe</button>
                </form>
                <p className=" font-regular underline mt-2 text-zinc-700">We respect your privacy</p>
            </div>
        </div>
    );
}