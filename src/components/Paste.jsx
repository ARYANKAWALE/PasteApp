import { Calendar, Copy, Eye, PencilLine, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react"; // Import useState
import { removeFromPaste } from "../redux/PasteSlice";
import { FormatDate } from "../utils/formatDate";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term

  const handleDelete = (id) => {
    dispatch(removeFromPaste(id));
  };

  // Filter pastes based on search term (by title or content)
  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0 
                    bg-white dark:bg-gray-900 
                    text-gray-900 dark:text-gray-100 
                    transition-colors duration-300">
      <div className="flex flex-col gap-y-3">
        {/* Search */}
        <div className="w-full flex gap-3 px-4 py-2 rounded-[0.3rem] 
                        border border-gray-300 dark:border-gray-600 
                        bg-gray-50 dark:bg-gray-800 
                        mt-6 transition-colors duration-300">
          <input
            type="search"
            placeholder="Search paste here..."
            className="focus:outline-none w-full bg-transparent 
                       text-gray-900 dark:text-gray-100 
                       placeholder-gray-500 dark:placeholder-gray-400
                       transition-colors duration-300"
            value={searchTerm} // Bind the input to searchTerm state
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
          />
        </div>

        {/* All Pastes */}
        <div className="flex flex-col border border-gray-300 dark:border-gray-600 
                        bg-gray-50 dark:bg-gray-800 
                        py-4 rounded-[0.4rem] 
                        transition-colors duration-300">
          <h2 className="px-4 text-4xl font-bold 
                         border-b border-gray-300 dark:border-gray-600 
                         pb-4 text-gray-900 dark:text-gray-100
                         transition-colors duration-300">
            All Pastes
          </h2>
          <div className="w-full px-4 pt-4 flex flex-col gap-y-5">
            {filteredPastes.length > 0 ? (
              filteredPastes.map((paste) => (
                <div
                  key={paste?._id}
                  className="border border-gray-300 dark:border-gray-600 
                             bg-white dark:bg-gray-700 
                             w-full gap-y-6 justify-between flex flex-col sm:flex-row p-4 rounded-[0.3rem]
                             transition-colors duration-300 
                             hover:shadow-lg dark:hover:shadow-gray-900/50"
                >
                  {/* heading and Description */}
                  <div className="w-[50%] flex flex-col space-y-3">
                    <p className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
                      {paste?.title}
                    </p>
                    <p className="text-sm font-normal line-clamp-3 max-w-[80%] 
                                  text-gray-600 dark:text-gray-400">
                      {paste?.content}
                    </p>
                  </div>

                  {/* icons */}
                  <div className="flex flex-col gap-y-4 sm:items-end">
                    <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                      <button
                        className="p-2 rounded-[0.2rem] 
                                   bg-white dark:bg-gray-600 
                                   border border-gray-300 dark:border-gray-500  
                                   hover:bg-transparent dark:hover:bg-transparent 
                                   group hover:border-blue-500 dark:hover:border-blue-400
                                   transition-colors duration-300"
                        // onClick={() => toast.error("Not working")}
                      >
                        <a href={`/?pasteId=${paste?._id}`}>
                          <PencilLine
                            className="text-gray-700 dark:text-gray-300 
                                       group-hover:text-blue-500 dark:group-hover:text-blue-400"
                            size={20}
                          />
                        </a>
                      </button>
                      <button
                        className="p-2 rounded-[0.2rem] 
                                   bg-white dark:bg-gray-600 
                                   border border-gray-300 dark:border-gray-500  
                                   hover:bg-transparent dark:hover:bg-transparent 
                                   group hover:border-pink-500 dark:hover:border-pink-400
                                   transition-colors duration-300"
                        onClick={() => handleDelete(paste?._id)}
                      >
                        <Trash2
                          className="text-gray-700 dark:text-gray-300 
                                     group-hover:text-pink-500 dark:group-hover:text-pink-400"
                          size={20}
                        />
                      </button>

                      <button className="p-2 rounded-[0.2rem] 
                                         bg-white dark:bg-gray-600 
                                         border border-gray-300 dark:border-gray-500  
                                         hover:bg-transparent dark:hover:bg-transparent 
                                         group hover:border-orange-500 dark:hover:border-orange-400
                                         transition-colors duration-300">
                        <a href={`/pastes/${paste?._id}`} target="_blank">
                          <Eye
                            className="text-gray-700 dark:text-gray-300 
                                       group-hover:text-orange-500 dark:group-hover:text-orange-400"
                            size={20}
                          />
                        </a>
                      </button>
                      <button
                        className="p-2 rounded-[0.2rem] 
                                   bg-white dark:bg-gray-600 
                                   border border-gray-300 dark:border-gray-500  
                                   hover:bg-transparent dark:hover:bg-transparent 
                                   group hover:border-green-500 dark:hover:border-green-400
                                   transition-colors duration-300"
                        onClick={() => {
                          navigator.clipboard.writeText(paste?.content);
                          toast.success("Copied to Clipboard");
                        }}
                      >
                        <Copy
                          className="text-gray-700 dark:text-gray-300 
                                     group-hover:text-green-500 dark:group-hover:text-green-400"
                          size={20}
                        />
                      </button>
                    </div>

                    <div className="gap-x-2 flex">
                      <Calendar className="text-gray-600 dark:text-gray-400" size={20} />
                      <span className="text-gray-600 dark:text-gray-400">
                        {FormatDate(paste?.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-2xl text-center w-full text-red-500 dark:text-red-400">
                No Data Found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paste;
