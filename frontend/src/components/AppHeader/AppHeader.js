function AppHeader({ handleSearch }) {
    function handleOnChange(event) {
        handleSearch(event);
    }
    return (
        <nav className="flex items-center justify-center flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">
                    React Gallery
                </span>
            </div>
            <div className="w-full flex flex-wrap flex-grow justify-center lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <input
                        href="#responsive-header"
                        placeholder="Search"
                        className="block mt-4 lg:inline-block lg:mt-0 text-black mr-4 rounded py-2 px-3"
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <a
                        href="www.github.com"
                        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                    >
                        Github
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default AppHeader;
