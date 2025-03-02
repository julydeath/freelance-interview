/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export async function submitContactForm(formData: any) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  console.log({ name, email, subject, message });

  //   try {

  //   } catch (error) {

  //   }
}
