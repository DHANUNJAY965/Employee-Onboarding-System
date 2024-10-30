import React, { useState } from 'react';
import { Upload } from 'lucide-react';

function PersonalDetails() {
  const [givengender, setGivengender] = useState("M");
  const countries = [
    { code: "+65", name: "Singapore", symbol: "🇸🇬" },
    { code: "+60", name: "Malaysia", symbol: "🇲🇾" },
    { code: "+62", name: "Indonesia", symbol: "🇮🇩" },
    { code: "+66", name: "Thailand", symbol: "🇹🇭" },
    { code: "+63", name: "Philippines", symbol: "🇵🇭" },
  ];
  const nationalities = [
    "Singaporean",
    "Malaysian",
    "Indonesian",
    "Thai",
    "Filipino",
  ];
  const races = ["Chinese", "Malay", "Indian", "Eurasian", "Others"];
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Handle input changes here
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // Handle file upload logic here
  };

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm mb-2">Employee ID</label>
              <input
                type="text"
                placeholder="Employee ID"
                className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                type="text"
                className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Date Of Joining</label>
              <input
                type="date"
                className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-6">
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Mobile</label>
              <div className="flex h-11">
                <select
                  className="w-24 px-2 bg-gray-50 border rounded-l-lg"
                  onChange={handleInputChange}
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.symbol} {country.code}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="123456789"
                  className="flex-1 px-3 border rounded-r-lg shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">Gender</label>
              <div className="flex gap-3">
                {["M", "F", "O"].map((gender) => (
                  <button
                    key={gender}
                    className={`w-11 h-11 rounded-full ${
                      givengender === gender
                        ? "bg-blue-900 text-white"
                        : "bg-gray-100"
                    }`}
                    onClick={() => setGivengender(gender)}
                  >
                    {gender}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="ml-8">
          <div className="w-32 h-32 rounded-full border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
            <input
              type="file"
              className="hidden"
              id="file-upload"
              onChange={handleFileUpload}
              accept="image/*"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="w-8 h-8 text-gray-400 mb-2" />
              <div className="text-sm text-gray-500">Upload Photo</div>
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-6 mt-6">
        <div>
          <label className="block text-sm mb-2">Date of Birth</label>
          <input
            type="date"
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Age</label>
          <input
            type="text"
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Nationality</label>
          <select
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            {nationalities.map((nat) => (
              <option key={nat} value={nat}>{nat}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm mb-2">Religion</label>
          <select
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            {["Buddhism", "Christianity", "Hinduism", "Islam", "Others"].map((religion) => (
              <option key={religion} value={religion}>{religion}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm mb-2">Race</label>
          <select
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            {races.map((race) => (
              <option key={race} value={race}>{race}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-6">
        <div>
          <label className="block text-sm mb-2">Country</label>
          <input
            type="text"
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Province/State</label>
          <input
            type="text"
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Postal Code</label>
          <input
            type="text"
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">City</label>
          <input
            type="text"
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-6">
        <div>
          <label className="block text-sm mb-2">Street Name</label>
          <input
            type="text"
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Block/House No.</label>
          <input
            type="text"
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Level No.</label>
          <input
            type="text"
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Unit No.</label>
          <input
            type="text"
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;