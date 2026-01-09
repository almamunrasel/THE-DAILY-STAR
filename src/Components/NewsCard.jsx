import { FaStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md  p-4">
      
      {/* Author Section */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold">{author.name}</h4>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="card-title text-lg font-bold">
  <Link
    // to={`/news/${news.id}`}
    className="hover:underline underline-offset-4"
  >
    {news.title}
  </Link>
</h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="card-body pt-4">
        <p className="text-gray-600">
          {details.slice(0, 200)}...
          <span className="text-primary font-semibold cursor-pointer">
            {" "}Read More
          </span>
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1 text-orange-400">
            {[...Array(rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-600 ml-2">
              {rating.number}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
