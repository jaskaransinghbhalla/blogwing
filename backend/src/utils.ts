export async function hashPassword(password: string) {
    const myText = new TextEncoder().encode(password);
    const myDigest = await crypto.subtle.digest(
      {
        name: "SHA-256",
      },
      myText
    );
    const hexString = [...new Uint8Array(myDigest)]
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  
    return hexString;
  }
  