export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-semibold text-gray-900">
              Tipsiti Maps Export
            </h1>
          </div>

          <div className="text-sm text-gray-500">
            Export saved places from Google Maps
          </div>
        </div>
      </div>
    </header>
  );
}
