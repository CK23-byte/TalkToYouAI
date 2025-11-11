export const metadata = { title: "Contact, TalkToYou AI" };

export default function Page() {
  async function submit(formData: FormData) {
    const backend = process.env.NEXT_PUBLIC_API_URL || "";
    if (!backend) { alert("Backend URL missing"); return; }
    const res = await fetch(backend + "/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
      })
    });
    const j = await res.json();
    if (j.ok) alert("Thanks, we will get back to you");
    else alert("Failed to submit");
  }

  return (
    <section className="py-16">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-gray-700">Leave your email and we will notify you about early access and pricing.</p>
      <form className="mt-6 grid gap-3 max-w-xl" action={submit}>
        <input className="border border-gray-300 rounded-lg p-3" name="name" placeholder="Name" />
        <input className="border border-gray-300 rounded-lg p-3" name="email" type="email" placeholder="Email" required />
        <textarea className="border border-gray-300 rounded-lg p-3" name="message" placeholder="Message (optional)" rows={4} />
        <button className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-deep text-white hover:opacity-90" type="submit">Send</button>
      </form>
    </section>
  );
}
