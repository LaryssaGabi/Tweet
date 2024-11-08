import PropTypes from "prop-types";

export function ThendItem({ category, name, tweetCount }) {
    return (
        <div className="py-3 hover: bg-gray-800 transition duration-200 cursor-pointer">
            <p className="text-gray-500 text-sm">{category}</p>
            <p className="font-bold">{name}</p>
            {tweetCount && < p className="text-gray-500 text-sm">{tweetCount}</p>}
        </div>
    );
}

ThendItem.propTypes = {
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tweetCount: PropTypes.string
};
