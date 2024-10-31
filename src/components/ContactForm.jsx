// import  { useState } from "react";
// import { ChevronDown, Plus, Minus } from "lucide-react";

// const countries = [
//   { code: "SG", name: "Singapore", flag: "🇸🇬", extension: "+65" },
//   { code: "MY", name: "Malaysia", flag: "🇲🇾", extension: "+60" },
//   { code: "ID", name: "Indonesia", flag: "🇮🇩", extension: "+62" },
//   { code: "TH", name: "Thailand", flag: "🇹🇭", extension: "+66" },
//   { code: "VN", name: "Vietnam", flag: "🇻🇳", extension: "+84" },
// ];

// const ContactForm = () => {
//   const [referenceContacts, setReferenceContacts] = useState([
//     { name: "", relationship: "", phone: "", country: countries[0], email: "" },
//   ]);
//   const [emergencyContacts, setEmergencyContacts] = useState([
//     { name: "", relationship: "", phone: "", country: countries[0] },
//   ]);
//   const [showReferenceDropdown, setShowReferenceDropdown] = useState({});
//   const [showEmergencyDropdown, setShowEmergencyDropdown] = useState({});

//   const addReferenceContact = () => {
//     setReferenceContacts([
//       ...referenceContacts,
//       {
//         name: "",
//         relationship: "",
//         phone: "",
//         country: countries[0],
//         email: "",
//       },
//     ]);
//   };

//   const removeLastReferenceContact = () => {
//     if (referenceContacts.length > 1) {
//       setReferenceContacts(referenceContacts.slice(0, -1));
//     }
//   };

//   const addEmergencyContact = () => {
//     setEmergencyContacts([
//       ...emergencyContacts,
//       { name: "", relationship: "", phone: "", country: countries[0] },
//     ]);
//   };

//   const removeLastEmergencyContact = () => {
//     if (emergencyContacts.length > 1) {
//       setEmergencyContacts(emergencyContacts.slice(0, -1));
//     }
//   };

//   const ContactSection = ({
//     title,
//     contacts,
//     setContacts,
//     showDropdown,
//     setShowDropdown,
//     addContact,
//     removeContact,
//     includeEmail,
//   }) => {
//     const handleCountrySelect = (index, country) => {
//       const updatedContacts = [...contacts];
//       updatedContacts[index].country = country;
//       setContacts(updatedContacts);
//       setShowDropdown({ ...showDropdown, [index]: false });
//     };

//     return (
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold text-gray-800 mb-6">{title}</h2>
//         <div className="space-y-6">
//           {contacts.map((contact, index) => (
//             <div key={index} className="">
//               <div className="grid grid-cols-5 gap-24">
//                 <div className="w-64">
//                   <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     className="h-12 bg-white rounded-lg shadow-[4px_4px_4px_rgba(0,0,0,0.08),-1px_-1px_4px_rgba(0,0,0,0.08)] px-4 text-gray-700"
//                     value={contact.name}
//                     onChange={(e) => {
//                       const updatedContacts = [...contacts];
//                       updatedContacts[index].name = e.target.value;
//                       setContacts(updatedContacts);
//                     }}
//                   />
//                 </div>
//                 <div className="w-64">
//                   <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">
//                     Relationship
//                   </label>
//                   <input
//                     type="text"
//                     className="h-12 bg-white rounded-lg shadow-[4px_4px_4px_rgba(0,0,0,0.08),-1px_-1px_4px_rgba(0,0,0,0.08)] px-4 text-gray-700"
//                     value={contact.relationship}
//                     onChange={(e) => {
//                       const updatedContacts = [...contacts];
//                       updatedContacts[index].relationship = e.target.value;
//                       setContacts(updatedContacts);
//                     }}
//                   />
//                 </div>
//                 {includeEmail && (
//                   <div className="w-64">
//                     <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">
//                       E-mail
//                     </label>
//                     <input
//                       type="email"
//                       className="h-12 bg-white rounded-lg shadow-[4px_4px_4px_rgba(0,0,0,0.08),-1px_-1px_4px_rgba(0,0,0,0.08)] px-4 text-gray-700"
//                       value={contact.email}
//                       onChange={(e) => {
//                         const updatedContacts = [...contacts];
//                         updatedContacts[index].email = e.target.value;
//                         setContacts(updatedContacts);
//                       }}
//                     />
//                   </div>
//                 )}
//                 <div className="w-64">
//                   <label className="text-[18px] leading-[27px] font-poppins font-normal text-black mb-2">
//                     Phone No
//                   </label>
//                   <div className="flex">
//                     <div className="relative">
//                       <button
//                         className="h-12 px-3 bg-white rounded-l-lg shadow-[4px_4px_4px_rgba(0,0,0,0.08),-1px_-1px_4px_rgba(0,0,0,0.08)] flex items-center gap-2 border-r border-gray-100"
//                         onClick={() =>
//                           setShowDropdown({
//                             ...showDropdown,
//                             [index]: !showDropdown[index],
//                           })
//                         }
//                       >
//                         <span className="text-lg">{contact.country.flag}</span>
//                         <ChevronDown size={16} className="text-gray-400" />
//                       </button>
//                       {showDropdown[index] && (
//                         <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg z-10">
//                           {countries.map((country) => (
//                             <button
//                               key={country.code}
//                               className=" px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
//                               onClick={() =>
//                                 handleCountrySelect(index, country)
//                               }
//                             >
//                               <span className="text-lg">{country.flag}</span>
//                               <span className="text-sm">{country.name}</span>
//                               <span className="text-gray-400 text-sm ml-auto">
//                                 {country.extension}
//                               </span>
//                             </button>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                     <input
//                       type="text"
//                       className="flex-1 h-12 bg-white rounded-r-lg shadow-[4px_4px_4px_rgba(0,0,0,0.08),-1px_-1px_4px_rgba(0,0,0,0.08)] px-4 text-gray-700"
//                       value={contact.phone}
//                       placeholder={contact.country.extension}
//                       onChange={(e) => {
//                         const updatedContacts = [...contacts];
//                         updatedContacts[index].phone = e.target.value;
//                         setContacts(updatedContacts);
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//               {index === contacts.length - 1 && (
//                 <div className="flex w-fit mx-auto items-end gap-2 pt-4 mb-[2px]">
//                   {contacts.length > 1 && (
//                     <button
//                       onClick={removeContact}
//                       className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors shadow-lg"
//                     >
//                       <Minus size={20} />
//                     </button>
//                   )}
//                   <button
//                     onClick={addContact}
//                     className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors shadow-lg"
//                   >
//                     <Plus size={20} />
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="p-6 max-w-6xl">
//       <ContactSection
//         title="Reference Contact"
//         contacts={referenceContacts}
//         setContacts={setReferenceContacts}
//         showDropdown={showReferenceDropdown}
//         setShowDropdown={setShowReferenceDropdown}
//         addContact={addReferenceContact}
//         removeContact={removeLastReferenceContact}
//         includeEmail={true}
//       />

//       <ContactSection
//         title="Emergency Contact"
//         contacts={emergencyContacts}
//         setContacts={setEmergencyContacts}
//         showDropdown={showEmergencyDropdown}
//         setShowDropdown={setShowEmergencyDropdown}
//         addContact={addEmergencyContact}
//         removeContact={removeLastEmergencyContact}
//         includeEmail={false}
//       />
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';

const countries = [
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
];

const ContactForm = () => {
  const [referenceContacts, setReferenceContacts] = useState([{ name: '', relationship: '', phone: '', email: '', countryCode: countries[0].code }]);
  const [emergencyContacts, setEmergencyContacts] = useState([{ name: '', relationship: '', phone: '', countryCode: countries[0].code }]);

  const addContact = (type) => {
    const newContact = { name: '', relationship: '', phone: '', countryCode: countries[0].code, ...(type === 'reference' ? { email: '' } : {}) };
    if (type === 'reference') {
      setReferenceContacts([...referenceContacts, newContact]);
    } else {
      setEmergencyContacts([...emergencyContacts, newContact]);
    }
  };

  const removeContact = (type, index) => {
    if (type === 'reference') {
      const newContacts = referenceContacts.filter((_, i) => i !== index);
      setReferenceContacts(newContacts);
    } else {
      const newContacts = emergencyContacts.filter((_, i) => i !== index);
      setEmergencyContacts(newContacts);
    }
  };

  const handleCountryChange = (type, index, newCode) => {
    const updatedContacts = (type === 'reference' ? referenceContacts : emergencyContacts).map((contact, i) =>
      i === index ? { ...contact, countryCode: newCode } : contact
    );
    type === 'reference' ? setReferenceContacts(updatedContacts) : setEmergencyContacts(updatedContacts);
  };

  const ContactSection = ({ type, contacts, showEmail = false }) => (
    <div className="mb-8">
      <h2 className="text-2xl font-medium text-gray-800 mb-6">
        {type === 'reference' ? 'Reference Contact' : 'Emergency Contact'}
      </h2>
      {contacts.map((contact, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4 relative">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full h-[46px] bg-white shadow rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Relationship</label>
            <input
              type="text"
              placeholder="Relationship"
              className="w-full h-[46px] bg-white shadow rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
            />
          </div>
          <div className="relative">
            <label className="block text-gray-700 text-sm font-medium mb-1">Phone</label>
            <div className="flex">
              <select
                value={contact.countryCode}
                onChange={(e) => handleCountryChange(type, index, e.target.value)}
                className="h-[46px] bg-white shadow rounded-l-lg pl-3 text-gray-700"
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag} {country.code}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="91234567"
                className="w-full h-[46px] bg-white shadow rounded-r-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
              />
            </div>
          </div>
          {showEmail && (
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">E-mail</label>
              <input
                type="email"
                placeholder="E-mail"
                className="w-full h-[46px] bg-white shadow rounded-lg text-gray-700 text-[18px] font-light tracking-wider pl-3"
              />
            </div>
          )}
          <div className="flex items-center mt-6 space-x-2">
            {index === contacts.length - 1 && (
              <>
                <button
                  onClick={() => addContact(type)}
                  className="flex items-center justify-center w-8 h-8 bg-blue-400 rounded-full hover:bg-blue-500 transition-colors"
                >
                  <Plus className="w-5 h-5 text-white" />
                </button>
                {contacts.length > 1 && (
                  <button
                    onClick={() => removeContact(type, index)}
                    className="flex items-center justify-center w-8 h-8 bg-red-400 rounded-full hover:bg-red-500 transition-colors"
                  >
                    <Minus className="w-5 h-5 text-white" />
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <ContactSection type="reference" contacts={referenceContacts} showEmail={true} />
      <ContactSection type="emergency" contacts={emergencyContacts} />
    </div>
  );
};

export default ContactForm;
