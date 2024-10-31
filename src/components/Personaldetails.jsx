// import React, { useState } from 'react';
// import { Upload } from 'lucide-react';

// function PersonalDetails() {
//   const [givengender, setGivengender] = useState("M");
//   const [age, setAge] = useState("");
//   const [dateOfBirth, setDateOfBirth] = useState("");

//   const countries = [
//     { code: "+65", name: "Singapore", symbol: "🇸🇬" },
//     { code: "+60", name: "Malaysia", symbol: "🇲🇾" },
//     { code: "+62", name: "Indonesia", symbol: "🇮🇩" },
//     { code: "+66", name: "Thailand", symbol: "🇹🇭" },
//     { code: "+63", name: "Philippines", symbol: "🇵🇭" },
//   ];
//   const nationalities = [
//     "Singaporean",
//     "Malaysian",
//     "Indonesian",
//     "Thai",
//     "Filipino",
//   ];
//   const races = ["Chinese", "Malay", "Indian", "Eurasian", "Others"];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     // Handle input changes here
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     // Handle file upload logic here
//   };

//   const calculateAge = (birthDate) => {
//     if (!birthDate) return "";

//     const dob = new Date(birthDate);
//     const today = new Date();

//     let calculatedAge = today.getFullYear() - dob.getFullYear();
//     const monthDiff = today.getMonth() - dob.getMonth();

//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
//       calculatedAge--;
//     }

//     return calculatedAge;
//   };

//   const handleDateOfBirthChange = (e) => {
//     const newDateOfBirth = e.target.value;
//     setDateOfBirth(newDateOfBirth);
//     setAge(calculateAge(newDateOfBirth));
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between">
//         <div className="flex-1">
//           <div className="grid grid-cols-3 gap-6">
//             <div>
//               <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Employee ID</label>
//               <input
//                 type="text"
//                 placeholder="Employee ID"
//                 className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
//               />
//             </div>
//             <div>
//               <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Full Name</label>
//               <input
//                 type="text"
//                 className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
//               />
//             </div>
//             <div>
//               <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Date Of Joining</label>
//               <input
//                 type="date"
//                 className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-3 gap-6 mt-6">
//             <div>
//               <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Email</label>
//               <input
//                 type="email"
//                 className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
//               />
//             </div>
//             <div>
//               <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Mobile</label>
//               <div className="flex h-11">
//                 <select
//                   className="w-24 px-2 bg-gray-50 border rounded-l-lg"
//                   onChange={handleInputChange}
//                 >
//                   {countries.map((country) => (
//                     <option key={country.code} value={country.code}>
//                       {country.symbol} {country.code}
//                     </option>
//                   ))}
//                 </select>
//                 <input
//                   type="text"
//                   placeholder="123456789"
//                   className="flex-1 px-3 border rounded-r-lg shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)]"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Gender</label>
//               <div className="flex gap-3">
//                 {["M", "F", "O"].map((gender) => (
//                   <button
//                     key={gender}
//                     className={`w-11 h-11 rounded-full ${
//                       givengender === gender
//                         ? "bg-blue-900 text-white"
//                         : "bg-gray-100"
//                     }`}
//                     onClick={() => setGivengender(gender)}
//                   >
//                     {gender}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="ml-8">
//           <div className="w-32 h-32 rounded-full border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
//             <input
//               type="file"
//               className="hidden"
//               id="file-upload"
//               onChange={handleFileUpload}
//               accept="image/*"
//             />
//             <label htmlFor="file-upload" className="cursor-pointer">
//               <Upload className="w-8 h-8 text-gray-400 mb-2" />
//               <div className="text-sm text-gray-500">Upload Photo</div>
//             </label>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-5 gap-6 mt-6">
//         <div>
//           <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Date of Birth</label>
//           <input
//             type="date"
//             value={dateOfBirth}
//             onChange={handleDateOfBirthChange}
//             className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
//           />
//         </div>
//         <div>
//           <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Age</label>
//           <input
//             type="text"
//             value={age}
//             readOnly
//             className="w-full h-11 bg-gray-100 shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg cursor-not-allowed"
//           />
//         </div>
//         <div>
//           <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Nationality</label>
//           <select
//             className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
//             onChange={handleInputChange}
//           >
//             <option value="">Select</option>
//             {nationalities.map((nat) => (
//               <option key={nat} value={nat}>{nat}</option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Religion</label>
//           <select
//             className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
//             onChange={handleInputChange}
//           >
//             <option value="">Select</option>
//             {["Buddhism", "Christianity", "Hinduism", "Islam", "Others"].map((religion) => (
//               <option key={religion} value={religion}>{religion}</option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Race</label>
//           <select
//             className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
//             onChange={handleInputChange}
//           >
//             <option value="">Select</option>
//             {races.map((race) => (
//               <option key={race} value={race}>{race}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div className="grid grid-cols-4 gap-6 mt-6">
//         <div>
//           <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Country</label>
//           <input
//             type="text"
//             className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
//           />
//         </div>
//         <div>
//           <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Province/State</label>
//           <input
//             type="text"
//             className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
//           />
//         </div>
//         <div>
//           <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Postal Code</label>
//           <input
//             type="text"
//             className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
//           />
//         </div>
//         <div>
//           <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">City</label>
//           <input
//             type="text"
//             className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-4 gap-6 mt-6">
//         <div>
//           <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Street Name</label>
//           <input
//             type="text"
//             className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
//           />
//         </div>
//         <div>
//           <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Block/House No.</label>
//           <input
//             type="text"
//             className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
//           />
//         </div>
//         <div>
//           <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Level No.</label>
//           <input
//             type="text"
//             className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
//           />
//         </div>
//         <div>
//           <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Unit No.</label>
//           <input
//             type="text"
//             className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
//           />
//         </div>
//       </div>
//       <div className="grid grid-cols-3 gap-6 mt-6">
//         <div className='col-span-2'>
//           <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Address</label>
//           <input
//             type="text"
//             className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
//           />
//         </div>
//         <div>
//           <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Language</label>
//           <input
//             type="text"
//             className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PersonalDetails;

import React, { useState, useEffect } from "react";
import { Upload } from "lucide-react";

function PersonalDetails({ data, setData }) {
  const [formState, setFormState] = useState({
    employeeId: data?.employeeId || "",
    fullName: data?.fullName || "",
    dateOfJoining: data?.dateOfJoining || "",
    email: data?.email || "",
    mobile: data?.mobile || "",
    countryCode: data?.countryCode || "+65",
    gender: data?.gender || "M",
    photo: data?.photo || null,
    dateOfBirth: data?.dateOfBirth || "",
    age: data?.age || "",
    nationality: data?.nationality || "",
    religion: data?.religion || "",
    race: data?.race || "",
    country: data?.country || "",
    provinceState: data?.provinceState || "",
    postalCode: data?.postalCode || "",
    city: data?.city || "",
    streetName: data?.streetName || "",
    blockHouseNo: data?.blockHouseNo || "",
    levelNo: data?.levelNo || "",
    unitNo: data?.unitNo || "",
    address: data?.address || "",
    language: data?.language || "",
  });

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

  useEffect(() => {
    setData(formState);
  }, [formState, setData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormState((prev) => ({
        ...prev,
        photo: file,
      }));
    }
  };

  const calculateAge = (birthDate) => {
    if (!birthDate) return "";

    const dob = new Date(birthDate);
    const today = new Date();

    let calculatedAge = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      calculatedAge--;
    }

    return calculatedAge;
  };

  const handleDateOfBirthChange = (e) => {
    const newDateOfBirth = e.target.value;
    const calculatedAge = calculateAge(newDateOfBirth);

    setFormState((prev) => ({
      ...prev,
      dateOfBirth: newDateOfBirth,
      age: calculatedAge,
    }));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Employee ID</label>
              <input
                type="text"
                name="employeeId"
                value={formState.employeeId}
                onChange={handleInputChange}
                placeholder="Employee ID"
                className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
              />
            </div>
            <div>
              <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formState.fullName}
                onChange={handleInputChange}
                className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
              />
            </div>
            <div>
              <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Date Of Joining</label>
              <input
                type="date"
                name="dateOfJoining"
                value={formState.dateOfJoining}
                onChange={handleInputChange}
                className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-6">
            <div>
              <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
              />
            </div>
            <div>
              <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Mobile</label>
              <div className="flex h-11">
                <select
                  name="countryCode"
                  value={formState.countryCode}
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
                  name="mobile"
                  value={formState.mobile}
                  onChange={handleInputChange}
                  placeholder="123456789"
                  className="flex-1 px-3 border rounded-r-lg shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)]"
                />
              </div>
            </div>
            <div>
              <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Gender</label>
              <div className="flex gap-3">
                {["M", "F", "O"].map((gender) => (
                  <button
                    key={gender}
                    className={`w-11 h-11 rounded-full ${
                      formState.gender === gender
                        ? "bg-blue-900 text-white"
                        : "bg-gray-100"
                    }`}
                    onClick={() =>
                      setFormState((prev) => ({ ...prev, gender }))
                    }
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
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formState.dateOfBirth}
            onChange={handleDateOfBirthChange}
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Age</label>
          <input
            type="text"
            name="age"
            value={formState.age}
            readOnly
            className="w-full h-11 bg-gray-100 shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg cursor-not-allowed"
          />
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Nationality</label>
          <select
            name="nationality"
            value={formState.nationality}
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            {nationalities.map((nat) => (
              <option key={nat} value={nat}>
                {nat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Religion</label>
          <select
            name="religion"
            value={formState.religion}
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            {["Buddhism", "Christianity", "Hinduism", "Islam", "Others"].map(
              (religion) => (
                <option key={religion} value={religion}>
                  {religion}
                </option>
              )
            )}
          </select>
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Race</label>
          <select
            name="race"
            value={formState.race}
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            {races.map((race) => (
              <option key={race} value={race}>
                {race}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-6">
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Country</label>
          <input
            type="text"
            name="country"
            value={formState.country}
            onChange={handleInputChange}
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Province/State</label>
          <input
            type="text"
            name="provinceState"
            value={formState.provinceState}
            onChange={handleInputChange}
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formState.postalCode}
            onChange={handleInputChange}
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">City</label>
          <input
            type="text"
            name="city"
            value={formState.city}
            onChange={handleInputChange}
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-6">
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Street Name</label>
          <input
            type="text"
            name="streetName"
            value={formState.streetName}
            onChange={handleInputChange}
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Block/House No.</label>
          <input
            type="text"
            name="blockHouseNo"
            value={formState.blockHouseNo}
            onChange={handleInputChange}
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Level No.</label>
          <input
            type="text"
            name="levelNo"
            value={formState.levelNo}
            onChange={handleInputChange}
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Unit No.</label>
          <input
            type="text"
            name="unitNo"
            value={formState.unitNo}
            onChange={handleInputChange}
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="col-span-2">
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={formState.address}
            onChange={handleInputChange}
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
        <div>
          <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">Language</label>
          <input
            type="text"
            name="language"
            value={formState.language}
            onChange={handleInputChange}
            className="w-full h-11 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15),-1px_-1px_4px_rgba(0,0,0,0.15)] rounded-lg px-3 text-gray-700 text-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
