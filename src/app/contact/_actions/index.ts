/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { TMessageInput } from "../_components/MessageValidation";



export const createMessage = async (messageData: TMessageInput): Promise<any> => {


  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messageData), // ✅ Properly formatted
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message || "Message creation failed");
  }

  return data;
};
