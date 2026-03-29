import { Toggle } from "./Controls";

type AccountRow = {
  label: string;
  value?: string;
};

type AccountSettingsProps = {
  accountRows: ReadonlyArray<AccountRow>;
  publicProfile: boolean;
  onTogglePublicProfile: () => void;
  matureContent: boolean;
  onToggleMatureContent: () => void;
};

export default function AccountSettings({
  accountRows,
  publicProfile,
  onTogglePublicProfile,
  matureContent,
  onToggleMatureContent,
}: AccountSettingsProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Account Info */}
      <div className="bg-white dark:bg-white/5 rounded-xl overflow-hidden">
        {accountRows.map((item) => (
          <div
            key={item.label}
            className="flex justify-between items-center px-6 py-[18px]"
          >
            <span className="text-xl text-[#2C2C2C] dark:text-white">
              {item.label}
            </span>
            {item.value && (
              <span className="text-xl text-[#2C2C2C] dark:text-white">
                {item.value}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Public Profile */}
      <div className="bg-white dark:bg-white/5 rounded-xl px-6 py-[18px] flex justify-between items-center">
        <div>
          <p className="text-xl font-medium text-[#2C2C2C] dark:text-white mb-1">
            Public Profile
          </p>
          <p className="text-[16px] text-[#5E5E5E] dark:text-gray-300">
            Anyone on the platform can view your profile information and activity.
          </p>
        </div>
        <Toggle checked={publicProfile} onChange={onTogglePublicProfile} />
      </div>

      {/* Mature Content (FIXED) */}
      <div className="bg-white dark:bg-white/5 rounded-xl px-6 py-[18px] flex justify-between items-center">
        <div>
          <p className="text-xl font-medium text-[#2C2C2C] dark:text-white mb-1">
            Mature Content
          </p>
          <p className="text-[16px] text-[#5E5E5E] dark:text-gray-300">
            You must be 18+ to view mature stories or media.
          </p>
        </div>
        <Toggle checked={matureContent} onChange={onToggleMatureContent} />
      </div>

      {/* Deactivate Account (FIXED) */}
      <div className="bg-white dark:bg-white/5 rounded-xl px-6 py-[18px]  cursor-pointer hover:border-gray-400 dark:hover:border-white/30 transition-colors">
        <p className="text-xl font-medium text-[#EE0000] mb-1">
          Deactivate account
        </p>
        <p className="text-[16px] text-[#5E5E5E] dark:text-gray-300">
          Deactivating will suspend your account until you sign back in.
        </p>
      </div>

      {/* Delete Account (FIXED) */}
      <div className="bg-white dark:bg-white/5 rounded-xl px-6 py-[18px] cursor-pointer hover:border-[#EE0000] transition-colors">
        <p className="text-xl font-medium text-[#EE0000] mb-1">
          Delete account
        </p>
        <p className="text-[16px] text-[#5E5E5E] dark:text-gray-300">
          Permanently delete your account and all of your content.
        </p>
      </div>
    </div>
  );
}