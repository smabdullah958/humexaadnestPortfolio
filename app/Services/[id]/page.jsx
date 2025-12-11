"use client";
import React from "react";
import { ServicesObject } from "@/Components/Services";

export default function ServiceDetails({ params }) {
  const { id } = React.use(params);

  const service = ServicesObject.find((s) => s.id == id);

  if (!service) {
    return <div className="p-10 text-red-600">Service Not Found</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-600">{service.name}</h1>
      <p className="mt-4 whitespace-pre-line">{service.full}</p>
    </div>
  );
}
