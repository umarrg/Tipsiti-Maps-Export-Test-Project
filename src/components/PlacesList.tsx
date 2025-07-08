import LoadingSpinner from "./LoadingSpinner";
import PlaceCard from "./PlaceCard";

interface Place {
  id: string;
  name: string;
  address: string;
  type: string;
  rating: number;
  saved_date: string;
}

interface PlacesListProps {
  places: Place[];
  selectedPlaces: Set<string>;
  onPlaceToggle: (placeId: string) => void;
  onExport: () => void;
  isLoading: boolean;
}

export default function PlacesList({
  places,
  selectedPlaces,
  onPlaceToggle,
  onExport,
  isLoading,
}: PlacesListProps) {
  if (isLoading) {
    return (
      <div className="py-12">
        <LoadingSpinner />
        <p className="text-center text-gray-600 mt-4">
          Fetching your saved places from Google Maps...
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Your Saved Places
        </h2>
        <p className="text-gray-600">
          Found {places.length} saved places. Select the ones you want to export
          to Tipsiti.
        </p>
      </div>

      <div className="mb-6 flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              const allSelected = places.every((place) =>
                selectedPlaces.has(place.id)
              );
              places.forEach((place) => {
                if (allSelected) {
                  selectedPlaces.delete(place.id);
                } else {
                  selectedPlaces.add(place.id);
                }
              });
              onPlaceToggle("");
            }}
            className="text-sm text-primary hover:text-blue-700 font-medium"
          >
            {places.every((place) => selectedPlaces.has(place.id))
              ? "Deselect All"
              : "Select All"}
          </button>

          <span className="text-sm text-gray-500">
            {selectedPlaces.size} of {places.length} selected
          </span>
        </div>

        <button
          onClick={onExport}
          disabled={selectedPlaces.size === 0}
          className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Export to Tipsiti ({selectedPlaces.size})
        </button>
      </div>

      <div className="space-y-3">
        {places.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            isSelected={selectedPlaces.has(place.id)}
            onToggle={() => onPlaceToggle(place.id)}
          />
        ))}
      </div>
    </div>
  );
}
