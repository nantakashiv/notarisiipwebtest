"use client";

import { useState } from "react";
import { useMessages } from "../../../components/shared/I18nProvider";

export default function AppointmentPage() {
  const m = useMessages();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          date,
          time,
          service,
          notes,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSuccessMsg("✅ Appointment request sent! We will contact you soon.");
      setFullName("");
      setEmail("");
      setPhone("");
      setDate("");
      setTime("");
      setService("");
      setNotes("");
    } catch (err) {
      setErrorMsg("❌ Failed to send appointment request. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-4 text-slate-900">
          {m.appointment.title}
        </h1>
        <p className="text-slate-600 mb-10">{m.appointment.desc}</p>

        {/* ALERTS */}
        {successMsg && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            {successMsg}
          </div>
        )}

        {errorMsg && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMsg}
          </div>
        )}

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Full Name */}
          <div className="col-span-2">
            <label className="font-medium text-slate-700">
              {m.appointment.fullName}
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="
                w-full mt-2 p-3
                rounded-lg
                border border-slate-200
                bg-white
                text-slate-900
                placeholder:text-slate-400
                focus:border-slate-900
                focus:ring-4 focus:ring-slate-900/10
                outline-none
                transition
              "
              placeholder={m.appointment.fullNamePh}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-medium text-slate-700">
              {m.appointment.email}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full mt-2 p-3
                rounded-lg
                border border-slate-200
                bg-white
                text-slate-900
                placeholder:text-slate-400
                focus:border-slate-900
                focus:ring-4 focus:ring-slate-900/10
                outline-none
                transition
              "
              placeholder="your@email.com"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="font-medium text-slate-700">
              {m.appointment.phone}
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="
                w-full mt-2 p-3
                rounded-lg
                border border-slate-200
                bg-white
                text-slate-900
                placeholder:text-slate-400
                focus:border-slate-900
                focus:ring-4 focus:ring-slate-900/10
                outline-none
                transition
              "
              placeholder={m.appointment.phonePh}
              required
            />
          </div>

          {/* Date */}
          <div>
            <label className="font-medium text-slate-700">
              {m.appointment.date}
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="
                w-full mt-2 p-3
                rounded-lg
                border border-slate-200
                bg-white
                text-slate-400
                focus:text-slate-900
                focus:border-slate-900
                focus:ring-4 focus:ring-slate-900/10
                outline-none
                transition
              "
              required
            />
          </div>

          {/* Time */}
          <div>
            <label className="font-medium text-slate-700">
              {m.appointment.time}
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="
                w-full mt-2 p-3
                rounded-lg
                border border-slate-200
                bg-white
                text-slate-400
                focus:text-slate-900
                focus:border-slate-900
                focus:ring-4 focus:ring-slate-900/10
                outline-none
                transition
              "
              required
            />
          </div>

          {/* Service Type */}
          <div className="col-span-2">
            <label className="font-medium text-slate-700">
              {m.appointment.serviceType}
            </label>

            <div className="relative mt-2">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="
                  w-full p-3 pr-11
                  rounded-lg
                  border border-slate-200
                  bg-white
                  focus:border-slate-900
                  focus:ring-4 focus:ring-slate-900/10
                  outline-none
                  transition
                  appearance-none
                  text-slate-400
                  valid:text-slate-900
                "
                required
              >
                <option value="" disabled>
                  {m.appointment.serviceSelect}
                </option>

                <option value="Notary Deed">
                  {m.appointment.services.notaryDeed}
                </option>
                <option value="Legalization">
                  {m.appointment.services.legalization}
                </option>
                <option value="Consultation">
                  {m.appointment.services.consultation}
                </option>
                <option value="Contract Drafting">
                  {m.appointment.services.contractDrafting}
                </option>
                <option value="Other">{m.appointment.services.other}</option>
              </select>

              <span
                className="
                  pointer-events-none
                  absolute right-4 top-1/2 -translate-y-1/2
                  text-slate-400
                "
              >
                ▼
              </span>
            </div>

            <p className="mt-2 text-xs text-slate-500">{m.appointment.helper}</p>
          </div>

          {/* Additional Notes */}
          <div className="col-span-2">
            <label className="font-medium text-slate-700">
              {m.appointment.notes}
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="
                w-full mt-2 p-3
                rounded-lg
                border border-slate-200
                bg-white
                text-slate-900
                placeholder:text-slate-400
                h-32
                focus:border-slate-900
                focus:ring-4 focus:ring-slate-900/10
                outline-none
                transition
              "
              placeholder={m.appointment.notesPh}
            />
          </div>

          {/* SUBMIT */}
          <div className="col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-slate-900 text-white
                py-4 rounded-xl
                text-lg font-semibold
                shadow-[0_16px_50px_rgba(2,6,23,0.18)]
                hover:bg-slate-800
                hover:-translate-y-[1px]
                active:translate-y-0
                transition
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {loading ? "Sending..." : m.appointment.submit}
            </button>
          </div>
        </form>

        {/* CONTACT INFO */}
        <div className="mt-16 bg-slate-50 border border-slate-200 p-6 rounded-xl">
          <h2 className="text-xl text-slate-900 font-bold mb-2">
            {m.appointment.needHelp}
          </h2>
          <p className="text-slate-700">
            {m.appointment.contactPrefix}
            <strong>+62 816-697-686</strong>
            {m.appointment.contactMiddle}
            <strong>kantornotarisiip@gmail.com</strong>
          </p>
        </div>

        {/* GOOGLE MAPS */}
        <div className="mt-10 h-64 rounded-xl overflow-hidden border border-slate-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63367.63937926866!2d109.01340887910158!3d-6.952868099999989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fbb001828896d%3A0x7a8e960c0a3bc60e!2sKantor%20Notaris%20%26%20PPAT%20Iip%20Affadin%2CS.H.%2CM.Kn!5e0!3m2!1sen!2sid!4v1764216296280!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
