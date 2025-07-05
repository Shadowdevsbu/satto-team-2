import ProfileInfo from "../component/SettingsComp/ProfileInfo";
import AccountSecurity from "../component/SettingsComp/AccountSecurity";

const SettingsPage = () => {
  return (
    <div className="bg-[#E5E7EB] w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-6 w-full max-w-2xl">
        <ProfileInfo />
        <AccountSecurity />
      </div>
    </div>
  );
};

export default SettingsPage;
