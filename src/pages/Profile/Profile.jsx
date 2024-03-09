import supabase from "@/dbutils/dbutils";
import React, { useEffect, useState } from "react";
import ProfileDetails from "./ProfileDetails";
import ProfileQRCode from "./ProfileQRCode";

const Profile = () => {
  const [qrValue, setQrValue] = useState(null);
  const [visible, setVisible] = useState(false);
  const [userID, setUserID] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [jobTitle, setJobTitle] = useState(null);

  useEffect(() => {
    const retrieveUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log("user: ", user);
      console.log("id: ", user?.id);
      console.log("iden: ", user?.aud);
      setUserID(user?.id);
      console.log("factors: ", user.user_metadata);
      const org_type = user?.user_metadata?.org_type;
      const org_id = user?.user_metadata?.org_id;
      const URI = user?.user_metadata?.domain_name;
      const token = localStorage.getItem("sp_access_token");
      const userFullName =
        user?.user_metadata?.first_name +
        " " +
        user?.user_metadata?.middle_name +
        " " +
        user?.user_metadata?.last_name;
      setFullName(userFullName);
      setUserEmail(user?.email);
      setUserName(user?.user_metadata?.user_name);
      setJobTitle(user?.user_metadata?.job_title);
      const userData =
        "http://" +
        URI +
        "&org_type=" +
        org_type +
        "&org_id=" +
        org_id +
        "&userID=" +
        userID +
        "&token=" +
        token;
      setQrValue(userData);
    };

    const userData = retrieveUser();
  }, [userID]);

  const handleQrCode = () => {
    // console.log("clicked");
    setVisible(!visible);
  };
  return (
    <div className="w-full">
      <h2 className="my-10 text-center font-bold text-3xl">Profile</h2>
      <div className="flex w-full divide-x-2 ">
        <div className="w-1/2 p-3 m-3">
          <ProfileDetails
            fullName={fullName}
            userEmail={userEmail}
            userName={userName}
            jobTitle={jobTitle}
          />
        </div>
        <div className="w-1/2 p-3 m-3">
          <ProfileQRCode
            qrValue={qrValue}
            visible={visible}
            setVisible={setVisible}
            handleQrCode={handleQrCode}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
