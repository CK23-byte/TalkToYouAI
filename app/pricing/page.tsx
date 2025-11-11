export const metadata = { title: "Pricing, TalkToYou AI" };

async function checkout(plan: string) {
  const backend = process.env.NEXT_PUBLIC_API_URL || "";
  if (!backend) { alert("Backend URL missing"); return; }
  const res = await fetch(backend + "/api/stripe/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ plan })
  });
  const j = await res.json();
  if (j.url) window.location.href = j.url;
  else alert("Checkout failed");
}

export default function Page() {
  return (
    <section className="py-16">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <p className="mt-2 text-gray-700">Simple plans with clear limits. Chat is per message, video is per minute, both include secure storage.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold">Starter</h3>
          <p className="text-sm">Good for first memories</p>
          <ul className="mt-3 text-sm list-disc list-inside">
            <li>100 chat messages per month</li>
            <li>30 video minutes per month</li>
            <li>1 avatar</li>
          </ul>
          <button onClick={() => checkout('starter')} className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-deep text-white hover:opacity-90">Choose Starter</button>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 border-deep">
          <h3 className="font-bold">Plus</h3>
          <p className="text-sm">For ongoing conversations</p>
          <ul className="mt-3 text-sm list-disc list-inside">
            <li>500 chat messages per month</li>
            <li>120 video minutes per month</li>
            <li>3 avatars</li>
          </ul>
          <button onClick={() => checkout('plus')} className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-deep text-white hover:opacity-90">Choose Plus</button>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold">Pro</h3>
          <p className="text-sm">For families and collectors</p>
          <ul className="mt-3 text-sm list-disc list-inside">
            <li>2,000 chat messages per month</li>
            <li>400 video minutes per month</li>
            <li>10 avatars</li>
          </ul>
          <button onClick={() => checkout('pro')} className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-deep text-white hover:opacity-90">Choose Pro</button>
        </div>
      </div>
    </section>
  );
}
