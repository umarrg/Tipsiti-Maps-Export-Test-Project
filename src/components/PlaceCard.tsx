interface Place {
  id: string;
  name: string;
  address: string;
  type: string;
  rating: number;
  saved_date: string;
}

interface PlaceCardProps {
  place: Place;
  isSelected: boolean;
  onToggle: () => void;
}

export default function PlaceCard({
  place,
  isSelected,
  onToggle,
}: PlaceCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "cafe":
        return "☕";
      case "restaurant":
        return "🍽️";
      case "park":
        return "🌳";
      case "museum":
        return "🏛️";
      case "bakery":
        return "🥖";
      case "tourist attraction":
        return "🎯";
      default:
        return "📍";
    }
  };

  return (
    <div
      className={`border rounded-lg p-4 cursor-pointer transition-all ${
        isSelected
          ? "border-primary bg-blue-50 shadow-sm"
          : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
      }`}
      onClick={onToggle}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1">
          <div className="text-2xl mt-1">{getTypeIcon(place.type)}</div>

          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate">{place.name}</h3>

            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {place.address}
            </p>

            <div className="flex items-center space-x-4 mt-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                {place.type}
              </span>

              <div className="flex items-center space-x-1">
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm text-gray-600">{place.rating}</span>
              </div>

              <span className="text-xs text-gray-500">
                Saved {formatDate(place.saved_date)}
              </span>
            </div>
          </div>
        </div>

        <div className="ml-3">
          <div
            className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
              isSelected ? "bg-primary border-primary" : "border-gray-300"
            }`}
          >
            {isSelected && (
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
