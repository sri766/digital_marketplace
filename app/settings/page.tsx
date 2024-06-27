import { Metadata } from "next";
import SettingsPage from "./SettingPage";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function Page() {
  // TODO: Protect this page via authentication

  return <SettingsPage />;
}