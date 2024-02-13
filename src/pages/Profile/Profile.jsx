import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import supabase from "@/dbutils/dbutils";
import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const Profile = () => {
  const [qrValue, setQrValue] = useState(null);
  const [visible, setVisible] = useState(false);
  const [userID, setUserID] = useState(null);

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
    console.log("clicked");
    setVisible(!visible);
  };
  return (
    <div className="w-full">
      <h2 className="my-10 text-center font-bold text-3xl">Profile</h2>
      <div className="flex w-full divide-x-2 ">
        <div className="w-1/2 p-3 m-3">
          <Card>
            <CardContent>
              <p>Name:</p>
              <p>Email:</p>
              <p>Username: </p>
              <p>Job Title: </p>
            </CardContent>
          </Card>
        </div>

        <div className="w-1/2 p-3 m-3">
          <Card>
            <Button className="flex mx-auto mt-2 mb-10" onClick={handleQrCode}>
              Generate QR Code
            </Button>
            {visible && (
              <CardContent className="w-fit mx-auto grid grid-cols-1">
                <QRCode value={qrValue} className="flex mx-auto mt-10" />

                <CardDescription className="text-center mt-5 overflow-hidden">
                  {qrValue}
                </CardDescription>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
