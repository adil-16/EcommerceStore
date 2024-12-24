"use client";
import EmailField from "@/components/fields/EmailField";
import TextField from "@/components/fields/TextField";
import React from "react";

const CartInformation = () => {
  const [name, setName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [apartment, setApartment] = React.useState("");
  const [city, setCity] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <div className="flex flex-col py-5 px-6 md:w-[53%] w-full gap-y-8">
      <TextField
        label="Full Name"
        name="Full Name"
        placeholder="Enter your name"
        text={name}
        setText={(e) => setName(e.target.value)}
      />

      <TextField
        label="Company Name"
        name="Company Name"
        placeholder="Enter company name"
        text={company}
        setText={(e) => setCompany(e.target.value)}
      />

      <TextField
        label="Street Address"
        name="Street Address"
        placeholder="Enter street address"
        text={address}
        setText={(e) => setAddress(e.target.value)}
      />

      <TextField
        label="Apartment, floor, etc. (optional)"
        name="Apartment, floor, etc. (optional)"
        placeholder="Enter apartment, floor, etc."
        text={apartment}
        setText={(e) => setApartment(e.target.value)}
      />

      <TextField
        label="Town/City"
        name="City"
        placeholder="Enter city"
        text={city}
        setText={(e) => setCity(e.target.value)}
      />

      <TextField
        label="Phone number"
        name="Phone number"
        placeholder="Enter number"
        text={number}
        setText={(e) => setNumber(e.target.value)}
      />

      <EmailField
        label="Email Address"
        name="Email Address"
        placeholder="Enter email address"
        text={email}
        setText={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

export default CartInformation;
