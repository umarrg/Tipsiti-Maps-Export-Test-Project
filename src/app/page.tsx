/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Header from "@/components/Header";
import ConnectStep from "@/components/ConnectStep";
import PlacesList from "@/components/PlacesList";
import ExportStep from "@/components/ExportStep";
import { useState } from "react";

interface Place {
  id: string;
  name: string;
  address: string;
  type: string;
  rating: number;
  saved_date: string;
}

export default function Home() {
  const [step, setStep] = useState(1);
  const [isConnected, setIsConnected] = useState(false);
  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedPlaces, setSelectedPlaces] = useState<Set<string>>(new Set());

  const handleConnect = async () => {
    setIsConnected(true);
    setStep(2);

    const mockPlaces = [
      {
        id: "1",
        name: "Barnawa Lounge",
        address: "1 Club Road, Barnawa, Kaduna",
        type: "Cafe",
        rating: 4.3,
        saved_date: "2024-03-15",
      },
      {
        id: "2",
        name: "Gamji Gate Park",
        address: "Kanta Road, Tudun Wada, Kaduna",
        type: "Park",
        rating: 4.5,
        saved_date: "2024-03-10",
      },
      {
        id: "3",
        name: "Kada Fry Spot",
        address: "Ahmadu Bello Way, Kaduna",
        type: "Restaurant",
        rating: 4.2,
        saved_date: "2024-03-08",
      },
      {
        id: "4",
        name: "Kaduna Museum",
        address: "Ali Akilu Road, Unguwan Sarki, Kaduna",
        type: "Museum",
        rating: 4.4,
        saved_date: "2024-03-05",
      },
      {
        id: "5",
        name: "Kajuru Castle",
        address: "Kajuru Local Government Area, Kaduna",
        type: "Tourist Attraction",
        rating: 4.6,
        saved_date: "2024-03-01",
      },
    ];

    setTimeout(() => {
      setPlaces(mockPlaces);
    }, 1500);
  };

  const handlePlaceToggle = (placeId: string) => {
    setSelectedPlaces((prev) => {
      const newSelected = new Set(prev);
      if (newSelected.has(placeId)) {
        newSelected.delete(placeId);
      } else {
        newSelected.add(placeId);
      }
      return newSelected;
    });
  };

  const handleExport = () => {
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          {step === 1 && <ConnectStep onConnect={handleConnect} />}

          {step === 2 && (
            <PlacesList
              places={places}
              selectedPlaces={selectedPlaces}
              onPlaceToggle={handlePlaceToggle}
              onExport={handleExport}
              isLoading={places.length === 0}
            />
          )}

          {step === 3 && <ExportStep selectedCount={selectedPlaces.size} />}
        </div>
      </main>
    </div>
  );
}
