"use client";

import { Monitor } from "lucide-react";
import { PasswordInput, Toggle } from "./Controls";

type Device = {
  id: number;
  browser: string;
  os: string;
  location: string;
  lastActive: string;
};

type SecuritySettingsProps = {
  devices: Device[];
  onLogoutDevice: (id: number) => void;
  onLogoutAll: () => void;
  loginAlerts: boolean;
  onToggleLoginAlerts: () => void;
};

export default function SecuritySettings({
  devices,
  onLogoutDevice,
  onLogoutAll,
  loginAlerts,
  onToggleLoginAlerts,
}: SecuritySettingsProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* ─── Change Password ─── */}
      <div className="bg-white dark:bg-white/5 rounded-xl p-6">
        <h2 className="text-[32px] font-medium text-[#121212] dark:text-white mb-5">
          Change Password
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <PasswordInput label="Current Password" />
          <PasswordInput label="New Password" />
        </div>

        <div className="w-1/2 mb-6">
          <PasswordInput label="Confirm New Password" />
        </div>

        <div className="flex justify-end gap-3">
          <button className="px-5 h-[48px] text-base font-medium text-[#F66F7D] border border-[#F66F7D] rounded-md bg-transparent hover:bg-[#F66F7D] hover:text-white transition-colors">
            Discard Changes
          </button>

          <button className="px-5 h-[48px] text-base font-medium text-white bg-[#F66F7D] rounded-md hover:opacity-90 transition">
            Save Changes
          </button>
        </div>
      </div>

      {/* ─── Login Devices ─── */}
      <div className="bg-white dark:bg-white/5 rounded-xl p-6">
        <h2 className="text-[32px] font-medium text-[#121212] dark:text-white mb-5">
          Login Devices
        </h2>

        <div className="flex flex-col">
          {devices.map((device, index) => (
            <div
              key={device.id}
              className={`flex justify-between items-center py-4 ${
                index < devices.length - 1
                  ? "border-b border-gray-200 dark:border-white/10"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <Monitor
                  size={20}
                  className="text-gray-500 dark:text-gray-300"
                />

                <div>
                  <p className="text-[16px] text-[#2C2C2C] dark:text-white">
                    {device.browser} – {device.os} – {device.location}
                  </p>
                  <p className="text-[14px] text-[#5E5E5E] dark:text-gray-400">
                    Last Active: {device.lastActive}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onLogoutDevice(device.id)}
                className="px-4 py-2 text-[14px] font-medium text-[#F66F7D] border border-[#F66F7D] rounded-md bg-transparent hover:bg-[#F66F7D] hover:text-white transition-colors"
              >
                Log Out
              </button>
            </div>
          ))}

          {devices.length === 0 && (
            <p className="text-[14px] text-[#5E5E5E] dark:text-gray-400 text-center py-4">
              No active devices.
            </p>
          )}
        </div>

        <div className="mt-5">
          <button
            onClick={onLogoutAll}
            className="px-5 py-2 text-base font-medium text-white bg-[#F66F7D] rounded-md hover:opacity-90 transition"
          >
            Log Out All Devices
          </button>
        </div>
      </div>

      {/* ─── Login Alerts ─── */}
      <div className="bg-white dark:bg-white/5 rounded-xl px-6 py-[18px] flex justify-between items-center">
        <div>
          <p className="text-xl font-medium text-[#2C2C2C] dark:text-white">
            Login Alerts
          </p>
          <p className="text-[16px] text-[#5E5E5E] dark:text-gray-300">
            Get notified when a new device logs into your account.
          </p>
        </div>

        <Toggle checked={loginAlerts} onChange={onToggleLoginAlerts} />
      </div>
    </div>
  );
}