import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const countries = [
  { code: 'SG', name: 'Singapore', flag: '🇸🇬', extension: '+65' },
  { code: 'MY', name: 'Malaysia', flag: '🇲🇾', extension: '+60' },
  { code: 'ID', name: 'Indonesia', flag: '🇮🇩', extension: '+62' },
  { code: 'TH', name: 'Thailand', flag: '🇹🇭', extension: '+66' },
  { code: 'VN', name: 'Vietnam', flag: '🇻🇳', extension: '+84' },
];

const ContactForm = () => {
  const [referenceContacts, setReferenceContacts] = useState([
    { name: '', relationship: '', phone: '', country: countries[0], email: '' }
  ]);
  const [emergencyContacts, setEmergencyContacts] = useState([
    { name: '', relationship: '', phone: '', country: countries[0] }
  ]);
  const [showReferenceDropdown, setShowReferenceDropdown] = useState({});
  const [showEmergencyDropdown, setShowEmergencyDropdown] = useState({});

  const addReferenceContact = () => {
    setReferenceContacts([
      ...referenceContacts,
      { name: '', relationship: '', phone: '', country: countries[0], email: '' }
    ]);
  };

  const removeLastReferenceContact = () => {
    if (referenceContacts.length > 1) {
      setReferenceContacts(referenceContacts.slice(0, -1));
    }
  };

  const addEmergencyContact = () => {
    setEmergencyContacts([
      ...emergencyContacts,
      { name: '', relationship: '', phone: '', country: countries[0] }
    ]);
  };

  const removeLastEmergencyContact = () => {
    if (emergencyContacts.length > 1) {
      setEmergencyContacts(emergencyContacts.slice(0, -1));
    }
  };

  const ContactSection = ({ 
    title, 
    contacts, 
    setContacts, 
    showDropdown, 
    setShowDropdown, 
    addContact,
    removeContact, 
    includeEmail 
  }) => {
    const handleCountrySelect = (index, country) => {
      const updatedContacts = [...contacts];
      updatedContacts[index].country = country;
      setContacts(updatedContacts);
      setShowDropdown({ ...showDropdown, [index]: false });
    };

    return (
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">{title}</h2>
        <div className="space-y-6">
          {contacts.map((contact, index) => (
            <div key={index} className="relative">
              <div className="flex gap-2">
                <div className="w-64">
                  <label className="block text-gray-700 text-sm mb-2">Name</label>
                  <input
                    type="text"
                    className="h-12 bg-white rounded-lg shadow-[4px_4px_4px_rgba(0,0,0,0.08),-1px_-1px_4px_rgba(0,0,0,0.08)] px-4 text-gray-700"
                    value={contact.name}
                    onChange={(e) => {
                      const updatedContacts = [...contacts];
                      updatedContacts[index].name = e.target.value;
                      setContacts(updatedContacts);
                    }}
                  />
                </div>
                <div className="w-64">
                  <label className="block text-gray-700 text-sm mb-2">Relationship</label>
                  <input
                    type="text"
                    className="h-12 bg-white rounded-lg shadow-[4px_4px_4px_rgba(0,0,0,0.08),-1px_-1px_4px_rgba(0,0,0,0.08)] px-4 text-gray-700"
                    value={contact.relationship}
                    onChange={(e) => {
                      const updatedContacts = [...contacts];
                      updatedContacts[index].relationship = e.target.value;
                      setContacts(updatedContacts);
                    }}
                  />
                </div>
                <div className="w-64">
                  <label className="block text-gray-700 text-sm mb-2">Phone No</label>
                  <div className="flex">
                    <div className="relative">
                      <button
                        className="h-12 px-3 bg-white rounded-l-lg shadow-[4px_4px_4px_rgba(0,0,0,0.08),-1px_-1px_4px_rgba(0,0,0,0.08)] flex items-center gap-2 border-r border-gray-100"
                        onClick={() => setShowDropdown({ ...showDropdown, [index]: !showDropdown[index] })}
                      >
                        <span className="text-lg">{contact.country.flag}</span>
                        <ChevronDown size={16} className="text-gray-400" />
                      </button>
                      {showDropdown[index] && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg z-10">
                          {countries.map((country) => (
                            <button
                              key={country.code}
                              className=" px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
                              onClick={() => handleCountrySelect(index, country)}
                            >
                              <span className="text-lg">{country.flag}</span>
                              <span className="text-sm">{country.name}</span>
                              <span className="text-gray-400 text-sm ml-auto">{country.extension}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <input
                      type="text"
                      className="flex-1 h-12 bg-white rounded-r-lg shadow-[4px_4px_4px_rgba(0,0,0,0.08),-1px_-1px_4px_rgba(0,0,0,0.08)] px-4 text-gray-700"
                      value={contact.phone}
                      placeholder={contact.country.extension}
                      onChange={(e) => {
                        const updatedContacts = [...contacts];
                        updatedContacts[index].phone = e.target.value;
                        setContacts(updatedContacts);
                      }}
                    />
                  </div>
                </div>
                {includeEmail && (
                  <div className="w-64">
                    <label className="block text-gray-700 text-sm mb-2">E-mail</label>
                    <input
                      type="email"
                      className="h-12 bg-white rounded-lg shadow-[4px_4px_4px_rgba(0,0,0,0.08),-1px_-1px_4px_rgba(0,0,0,0.08)] px-4 text-gray-700"
                      value={contact.email}
                      onChange={(e) => {
                        const updatedContacts = [...contacts];
                        updatedContacts[index].email = e.target.value;
                        setContacts(updatedContacts);
                      }}
                    />
                  </div>
                )}
                {index === contacts.length - 1 && (
                  <div className="flex items-end gap-2 ml-4 mb-[2px]">
                    {contacts.length > 1 && (
                      <button
                        onClick={removeContact}
                        className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors shadow-lg"
                      >
                        <Minus size={20} />
                      </button>
                    )}
                    <button
                      onClick={addContact}
                      className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors shadow-lg"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 max-w-6xl">
      <ContactSection
        title="Reference Contact"
        contacts={referenceContacts}
        setContacts={setReferenceContacts}
        showDropdown={showReferenceDropdown}
        setShowDropdown={setShowReferenceDropdown}
        addContact={addReferenceContact}
        removeContact={removeLastReferenceContact}
        includeEmail={true}
      />
      
      <ContactSection
        title="Emergency Contact"
        contacts={emergencyContacts}
        setContacts={setEmergencyContacts}
        showDropdown={showEmergencyDropdown}
        setShowDropdown={setShowEmergencyDropdown}
        addContact={addEmergencyContact}
        removeContact={removeLastEmergencyContact}
        includeEmail={false}
      />
    </div>
  );
};

export default ContactForm;