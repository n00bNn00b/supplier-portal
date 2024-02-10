import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import supabase from "@/dbutils/dbutils";
import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const Profile = () => {
  const [qrValue, setQrValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [userID, setUserID] = useState(null);
  const [userDetails, setUserDetails] = useState("");

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
      const userData =
        "http://" +
        URI +
        "&org_type=" +
        org_type +
        "&org_id=" +
        org_id +
        "&token=";
      setUserDetails(userData);
    };

    const userData = retrieveUser();
  }, []);

  const handleQrCode = () => {
    console.log("clicked");
    setVisible(!visible);
    setQrValue("http://localhost:5173");
  };
  return (
    <div>
      <h2 className="my-10 text-center">Profile</h2>
      <Button className="flex mx-auto mb-10" onClick={handleQrCode}>
        Generate QR Code
      </Button>
      {visible && (
        <Card className="w-1/2 mx-auto">
          <CardContent>
            <QRCode value={userDetails} className="flex mx-auto mt-10" />
            <CardDescription className="text-center mt-5">
              {userDetails}
            </CardDescription>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Profile;
