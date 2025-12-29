// Bismillahirrahmanirrahim


// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber

"use client";

import React, { useEffect, useState } from "react";

type User = {
  id: string;
  name: string | null;
  email: string | null;
  role: "USER" | "ADMIN";
  disabled: boolean;
  createdAt: string;
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionPending, setActionPending] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/users");
      if (!res.ok) throw new Error(await res.text());
      const data = (await res.json()) as User[];
      setUsers(data);
    } catch (err: any) {
      setError(err.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  }

  async function doAction(userId: string, action: "toggleAdmin" | "toggleDisable" | "delete") {
    if (!confirm("Are you sure?")) return;
    setActionPending(userId);
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
      if (!res.ok) throw new Error(await res.text());
      await fetchUsers();
    } catch (err: any) {
      alert(err.message || "Action failed");
    } finally {
      setActionPending(null);
    }
  }

  if (loading) return <div className="p-4">Loading users…</div>;
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;

  return (
    <div className="p-4 container mx-auto">
      <h2 className="mb-4 text-2xl font-semibold">Admin — Rêveberiya Bikarhêneran</h2>

      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Nav</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2">Rol</th>
              <th className="px-4 py-2">Enabled</th>
              <th className="px-4 py-2">Hateve</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="px-4 py-3">{u.name ?? "—"}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{u.email ?? "—"}</td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block px-2 py-1 rounded bg-slate-100 text-sm">
                    {u.role}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">{u.disabled ? "No" : "Yes"}</td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button
                    className="px-3 py-1 bg-blue-600 text-white rounded disabled:opacity-50"
                    onClick={() => doAction(u.id, "toggleAdmin")}
                    disabled={actionPending === u.id}
                  >
                    {u.role === "ADMIN" ? "Demote" : "Promote"}
                  </button>
                  <button
                    className="px-3 py-1 bg-yellow-500 text-white rounded disabled:opacity-50"
                    onClick={() => doAction(u.id, "toggleDisable")}
                    disabled={actionPending === u.id}
                  >
                    {u.disabled ? "Enable" : "Disable"}
                  </button>
                  <button
                    className="px-3 py-1 bg-red-600 text-white rounded disabled:opacity-50"
                    onClick={() => doAction(u.id, "delete")}
                    disabled={actionPending === u.id}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-4 text-center text-gray-600">
                  Bê bikarhêner.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
