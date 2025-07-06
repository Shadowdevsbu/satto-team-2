import ProfileInfo from "../component/SettingsComp/ProfileInfo";
import AccountSecurity from "../component/SettingsComp/AccountSecurity";
import NotificationPrefer from "../component/SettingsComp/NotificationPrefer";

const SettingsPage = () => {
  return (
    <div className="bg-[#E5E7EB] w-full min-h-screen flex items-center justify-center py-6 sm:py-10">
      <div className="flex flex-col gap-4 w-full max-w-2xl px-2 sm:px-0">
        <ProfileInfo />
        <AccountSecurity />
        <NotificationPrefer />
      </div>
    </div>
  );
};

export default SettingsPage;
