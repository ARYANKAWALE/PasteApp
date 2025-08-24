import { Copy } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();

  console.log(id)

  const pastes = useSelector((state) => state.paste.pastes);

  // Filter pastes based on search term (by title or content)
  const paste = pastes.filter((paste) => paste._id === id)[0];

  console.log("Paste->",paste);
  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0 
                    bg-white dark:bg-gray-900 
                    text-gray-900 dark:text-gray-100 
                    transition-colors duration-300">
      <div className="flex flex-col gap-y-5 items-start">
        <input
          type="text"
          placeholder="Title"
          value={paste.title}
          disabled
          className="w-full 
                     bg-gray-100 dark:bg-gray-800 
                     text-gray-900 dark:text-gray-100 
                     border border-gray-300 dark:border-gray-600 
                     rounded-md p-2 
                     placeholder-gray-500 dark:placeholder-gray-400
                     transition-colors duration-300"
        />
        <div
          className="w-full flex flex-col items-start relative rounded 
                     bg-gray-50 dark:bg-gray-800 
                     border border-gray-300 dark:border-gray-600 
                     backdrop-blur-2xl
                     transition-colors duration-300"
        >
          <div
            className="w-full rounded-t flex items-center justify-between gap-x-4 px-4 py-2 
                       border-b border-gray-300 dark:border-gray-600
                       transition-colors duration-300"
          >
            <div className="w-full flex gap-x-[6px] items-center select-none group">
              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(255,95,87)]" />

              <div
                className={`w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(254,188,46)]`}
              />

              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(45,200,66)]" />
            </div>
            {/* Circle and copy btn */}
            <div
              className={`w-fit rounded-t flex items-center justify-between gap-x-4 px-4`}
            >
              {/*Copy  button */}
              <button
                className="flex justify-center items-center transition-all duration-300 ease-in-out group
                           text-gray-600 dark:text-gray-400 
                           hover:text-green-600 dark:hover:text-green-400"
                onClick={() => {
                  navigator.clipboard.writeText(paste.content);
                  toast.success("Copied to Clipboard");
                }}
              >
                <Copy className="group-hover:text-green-500" size={20} />
              </button>
            </div>
          </div>

          {/* TextArea */}
          <textarea
            value={paste.content}
            disabled
            placeholder="Write Your Content Here...."
            className="w-full p-3 focus-visible:ring-0 
                       bg-transparent 
                       text-gray-900 dark:text-gray-100 
                       placeholder-gray-500 dark:placeholder-gray-400
                       resize-none outline-none
                       transition-colors duration-300"
            style={{
              caretColor: "#3b82f6",
            }}
            rows={20}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;
